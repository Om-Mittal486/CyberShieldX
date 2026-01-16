import Papa from 'papaparse';

// Define CrimePattern interface if not already available
export interface CrimePattern {
    type: string;
    description: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    confidence: number;
}

export interface AnalysisResult {
    category: 'safe' | 'mild' | 'harassment' | 'high-risk';
    toxicityScore: number; // 0-100
    confidenceScore: number; // 0-100
    matchedKeywords: string[];
    summary: string;
    crimePattern?: CrimePattern;
    similarExamples?: Array<{
        message: string;
        toxicity_label: string;
        crime_type: string;
        similarity: number;
    }>;
    sentiment?: {
        score: number;
        comparative: number;
        tokens: string[];
        words: string[];
        positive: string[];
        negative: string[];
    };
}

interface DatasetRow {
    message_text: string;
    toxicity_label: string;
    toxicity_score: string;
    confidence: string;
    crime_type: string;
    severity_level: string;
    legal_section: string;
    matched_keywords: string;
}

export class MessageAnalyzer {
    private cache: Map<string, AnalysisResult>;
    private static dataset: DatasetRow[] = [];
    private static datasetLoaded: boolean = false;

    // Keyword dictionaries (enhanced from dataset with Hindi/Hinglish support)
    private threats = [
        // English threats
        'kill', 'murder', 'hurt', 'attack', 'bomb', 'shoot', 'stab', 'die', 'burn', 'destroy', 'threat', 'coming for you', 'regret',
        'leak', 'expose', 'ruin', 'destroy', 'consequences', 'suffer', 'watch your back', 'coming after',
        // Hindi/Hinglish threats
        'maar', 'marunga', 'maarunga', 'pel', 'pelunga', 'thok', 'thokunga', 'jala', 'jalaa', 'udaa', 'barbaad',
        'maut', 'laash', 'zinda jala', 'kaat', 'faad', 'blast', 'bomb', 'acid', 'current', 'bijli',
        'gangbang', 'gangrape', 'chudwa', 'rape', 'pregnant', 'abortion', 'kutte se', 'horse se'
    ];

    private harassment = [
        // English harassment
        'stupid', 'idiot', 'ugly', 'fat', 'hate', 'trash', 'failure', 'useless', 'disgusting', 'creepy', 'worthless', 'pathetic',
        'loser', 'waste', 'dumb', 'annoying', 'irritating', 'embarrassing', 'ashamed',
        // Hindi/Hinglish harassment
        'madarchod', 'bhenchod', 'bhosdike', 'chutiya', 'chutiye', 'gandu', 'lavde', 'lodu', 'harami', 'haramkhor',
        'randi', 'randwa', 'bhadwa', 'bhadwe', 'kutiya', 'kutte', 'saala', 'saale', 'mkc', 'bc',
        'teri maa', 'teri behen', 'maa ki chut', 'behen ki chut', 'bhosdi', 'gand', 'lund', 'chut'
    ];

    private fraud = [
        // English fraud
        'bank', 'account', 'password', 'credit card', 'transfer', 'money', 'urgent', 'winner', 'lottery', 'otp', 'verify', 'kyc', 'upi',
        'refund', 'payment', 'wallet', 'crypto', 'investment', 'loan', 'prize', 'cashback',
        // Hindi/Hinglish fraud
        'paisa', 'rupees', 'lakh', 'crore', 'transfer kar', 'bhej do', 'bheja', 'wapas kar', 'scam', 'fraud',
        'blackmail', 'video leak', 'photo leak', 'private video', 'nudes', 'dark web', 'viral kar'
    ];

    // Basic sentiment dictionaries
    private positiveWords = ['good', 'great', 'awesome', 'nice', 'happy', 'love', 'excellent', 'best', 'wonderful', 'safe'];
    private negativeWords = ['bad', 'terrible', 'awful', 'sad', 'hate', 'worst', 'horrible', 'dangerous', 'fail', 'poor'];

    constructor() {
        this.cache = new Map();
        MessageAnalyzer.loadDataset();
    }

    /**
     * Load dataset from CSV file
     */
    private static async loadDataset() {
        if (MessageAnalyzer.datasetLoaded) {
            console.log('MessageAnalyzer: Dataset already loaded.');
            return;
        }

        console.log('MessageAnalyzer: Loading dataset...');

        try {
            // Construct URL - handle server vs client
            let url = '/data/cybershieldx_dataset.csv';

            if (typeof window === 'undefined') {
                // Server-side: Try to use absolute URL if available, otherwise this might fail in strict fetch envs
                // However, Next.js 'fetch' often handles relative paths in API routes depending on config.
                // Best effort for server:
                const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
                url = `${baseUrl}${url}`;
            }

            console.log(`MessageAnalyzer: Fetching from ${url}`);
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Failed to fetch dataset: ${response.status} ${response.statusText}`);
            }

            const csvText = await response.text();

            Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    MessageAnalyzer.dataset = results.data as DatasetRow[];
                    MessageAnalyzer.datasetLoaded = true;
                    console.log(`✅ MessageAnalyzer Dataset loaded successfully: ${MessageAnalyzer.dataset.length} examples`);
                },
                error: (error: Error) => {
                    console.error('❌ Error parsing dataset CSV:', error);
                }
            });
        } catch (error) {
            console.error('❌ Failed to load dataset:', error);
        }
    }

    // ... (analyze method needs update to check static loaded)

    private async waitForDataset(maxWait: number = 3000): Promise<void> {
        const startTime = Date.now();
        while (!MessageAnalyzer.datasetLoaded && (Date.now() - startTime) < maxWait) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }

    public async analyze(message: string): Promise<AnalysisResult> {
        console.log(`MessageAnalyzer: Analyzing message: "${message.substring(0, 20)}..."`);

        if (!message || message.trim().length === 0) {
            return this.createEmptyResult();
        }

        const cacheKey = this.getCacheKey(message);
        if (this.cache.has(cacheKey)) {
            console.log('MessageAnalyzer: Returning cached result');
            return this.cache.get(cacheKey)!;
        }

        // Wait for dataset to load if not already loaded
        if (!MessageAnalyzer.datasetLoaded) {
            console.log('MessageAnalyzer: Dataset not loaded yet, waiting...');
            await this.waitForDataset();
            console.log('MessageAnalyzer: Finished waiting for dataset. Loaded:', MessageAnalyzer.datasetLoaded);
        }

        // Find similar examples from dataset
        console.log('MessageAnalyzer: Finding similar examples...');
        const similarExamples = this.findSimilarMessages(message);
        console.log(`MessageAnalyzer: Found ${similarExamples.length} similar examples.`);

        const detectedKeywords = this.detectKeywords(message);
        const sentiment = this.simpleSentimentAnalysis(message);
        const toxicityScore = this.calculateEnhancedToxicityScore(message, detectedKeywords, sentiment, similarExamples);
        const category = this.determineCategory(toxicityScore, detectedKeywords);
        const crimePattern = this.detectCrimePatternFromDataset(detectedKeywords, similarExamples);
        const confidenceScore = this.calculateConfidence(message, detectedKeywords, similarExamples);
        const summary = this.generateSummary(category, detectedKeywords.all, sentiment.score, similarExamples);

        const result: AnalysisResult = {
            category,
            toxicityScore: Math.round(toxicityScore),
            confidenceScore: Math.round(confidenceScore),
            matchedKeywords: detectedKeywords.all,
            summary,
            crimePattern,
            similarExamples: similarExamples.length > 0 ? similarExamples : undefined,
            sentiment
        };

        this.cache.set(cacheKey, result);
        return result;
    }

    private findSimilarMessages(message: string): Array<{
        message: string;
        toxicity_label: string;
        crime_type: string;
        similarity: number;
    }> {
        console.log('MessageAnalyzer: Starting findSimilarMessages...');
        if (!MessageAnalyzer.datasetLoaded || MessageAnalyzer.dataset.length === 0) {
            return [];
        }

        const messageLower = message.toLowerCase();
        const messageWords = new Set(messageLower.split(/\s+/));

        const similarities = MessageAnalyzer.dataset.map(row => {
            const text = row.message_text || '';
            const rowWords = new Set(text.toLowerCase().split(/\s+/));
            const intersection = new Set([...messageWords].filter(x => rowWords.has(x)));
            const union = new Set([...messageWords, ...rowWords]);
            const similarity = intersection.size / union.size; // Jaccard similarity

            return {
                message: text,
                toxicity_label: row.toxicity_label,
                crime_type: row.crime_type || 'None',
                similarity: similarity * 100
            };
        });

        // Sort by similarity and return top matches
        return similarities
            .filter(s => s.similarity > 10) // At least 10% similarity
            .sort((a, b) => b.similarity - a.similarity)
            .slice(0, 5);
    }

    /**
     * Enhanced toxicity scoring using dataset examples
     */
    private calculateEnhancedToxicityScore(
        message: string,
        keywords: { threats: string[], harassment: string[], fraud: string[] },
        sentiment: any,
        similarExamples: any[]
    ): number {
        let score = 0;

        // Base score from keywords
        score += keywords.threats.length * 30;
        score += keywords.harassment.length * 15;
        score += keywords.fraud.length * 20;

        // Adjust based on sentiment
        if (sentiment.score < 0) {
            score += Math.abs(sentiment.score) * 2;
        }

        // Boost score if similar high-risk examples found in dataset
        if (similarExamples.length > 0) {
            const avgSimilarity = similarExamples.reduce((sum, ex) => sum + ex.similarity, 0) / similarExamples.length;
            const highRiskCount = similarExamples.filter(ex =>
                ex.toxicity_label.includes('High-Risk') ||
                ex.toxicity_label.includes('Threat')
            ).length;

            if (highRiskCount > 0) {
                score += avgSimilarity * 0.5; // Add up to 50 points based on similarity
            }
        }

        // Cap at 100
        return Math.min(100, Math.max(0, score));
    }

    /**
     * Detect crime pattern using dataset information
     */
    private detectCrimePatternFromDataset(
        keywords: { threats: string[], harassment: string[], fraud: string[] },
        similarExamples: any[]
    ): CrimePattern | undefined {
        // Use dataset examples to determine crime type
        if (similarExamples.length > 0 && similarExamples[0].crime_type !== 'None') {
            const topExample = similarExamples[0];
            let severity: 'low' | 'medium' | 'high' | 'critical' = 'medium';

            if (topExample.toxicity_label.includes('High-Risk') || topExample.toxicity_label.includes('Critical')) {
                severity = 'critical';
            } else if (topExample.toxicity_label.includes('Harassment')) {
                severity = 'high';
            } else if (topExample.toxicity_label.includes('Mild')) {
                severity = 'low';
            }

            return {
                type: topExample.crime_type,
                description: `Message matches patterns similar to ${topExample.crime_type} cases in our database.`,
                severity,
                confidence: Math.round(topExample.similarity)
            };
        }

        // Fallback to keyword-based detection
        if (keywords.threats.length > 0) {
            return {
                type: 'Criminal Threat',
                description: 'Message contains keywords associated with physical threats or severe bullying.',
                severity: 'high',
                confidence: 85
            };
        }
        if (keywords.fraud.length > 0) {
            return {
                type: 'Financial Fraud',
                description: 'Message contains keywords associated with financial scams or fraud.',
                severity: 'high',
                confidence: 80
            };
        }
        if (keywords.harassment.length > 0) {
            return {
                type: 'Online Harassment',
                description: 'Message contains harassing language.',
                severity: 'medium',
                confidence: 75
            };
        }
        return undefined;
    }

    private getCacheKey(message: string): string {
        return Buffer.from(message).toString('base64');
    }

    private createEmptyResult(): AnalysisResult {
        return {
            category: 'safe',
            toxicityScore: 0,
            confidenceScore: 0,
            matchedKeywords: [],
            summary: 'Message is empty.',
        };
    }

    private detectKeywords(message: string) {
        const lowerMsg = message.toLowerCase();
        const matchedThreats = this.threats.filter(w => lowerMsg.includes(w));
        const matchedHarassment = this.harassment.filter(w => lowerMsg.includes(w));
        const matchedFraud = this.fraud.filter(w => lowerMsg.includes(w));

        return {
            threats: matchedThreats,
            harassment: matchedHarassment,
            fraud: matchedFraud,
            all: [...matchedThreats, ...matchedHarassment, ...matchedFraud]
        };
    }

    private simpleSentimentAnalysis(message: string) {
        const tokens = message.toLowerCase().split(/\s+/);
        const positive = tokens.filter(t => this.positiveWords.includes(t));
        const negative = tokens.filter(t => this.negativeWords.includes(t));
        const score = positive.length - negative.length;
        return {
            score,
            comparative: score / tokens.length,
            tokens,
            words: [...positive, ...negative],
            positive,
            negative
        };
    }

    private determineCategory(score: number, keywords: { threats: string[], harassment: string[], fraud: string[] }): 'safe' | 'mild' | 'harassment' | 'high-risk' {
        if (keywords.threats.length > 0) return 'high-risk';
        if (keywords.fraud.length > 0) return 'high-risk';
        if (score > 60) return 'high-risk';
        if (score > 30) return 'harassment';
        if (score > 10) return 'mild';
        return 'safe';
    }

    private calculateConfidence(message: string, keywords: { all: string[] }, similarExamples: any[]): number {
        let confidence = 70; // Base confidence

        if (keywords.all.length > 0) confidence += 10;
        if (message.length > 20) confidence += 10;
        if (message.length < 5) confidence -= 20;

        // Boost confidence if we found similar examples in dataset
        if (similarExamples.length > 0) {
            confidence += Math.min(15, similarExamples[0].similarity / 5);
        }

        return Math.min(100, Math.max(0, confidence));
    }

    private generateSummary(category: string, keywords: string[], sentimentScore: number, similarExamples: any[]): string {
        const sentimentDesc = sentimentScore < 0 ? 'negative' : (sentimentScore > 0 ? 'positive' : 'neutral');

        if (category === 'safe') {
            return `The message appears safe with ${sentimentDesc} sentiment.`;
        }

        let summary = `Detected ${category} content. Found keywords: ${keywords.join(', ') || 'None'}. Sentiment is ${sentimentDesc}.`;

        if (similarExamples.length > 0) {
            summary += ` This message is ${Math.round(similarExamples[0].similarity)}% similar to known ${similarExamples[0].toxicity_label} cases in our database.`;
        }

        return summary;
    }
}
