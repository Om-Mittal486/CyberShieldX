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
    private dataset: DatasetRow[] = [];
    private datasetLoaded: boolean = false;

    // Keyword dictionaries (enhanced from dataset)
    private threats = ['kill', 'murder', 'hurt', 'attack', 'bomb', 'shoot', 'stab', 'die', 'burn', 'destroy', 'threat', 'coming for you', 'regret'];
    private harassment = ['stupid', 'idiot', 'ugly', 'fat', 'hate', 'trash', 'failure', 'useless', 'disgusting', 'creepy', 'worthless', 'pathetic'];
    private fraud = ['bank', 'account', 'password', 'credit card', 'transfer', 'money', 'urgent', 'winner', 'lottery', 'otp', 'verify', 'kyc', 'upi'];

    // Basic sentiment dictionaries
    private positiveWords = ['good', 'great', 'awesome', 'nice', 'happy', 'love', 'excellent', 'best', 'wonderful', 'safe'];
    private negativeWords = ['bad', 'terrible', 'awful', 'sad', 'hate', 'worst', 'horrible', 'dangerous', 'fail', 'poor'];

    constructor() {
        this.cache = new Map();
        this.loadDataset();
    }

    /**
     * Load dataset from CSV file
     */
    private async loadDataset() {
        if (this.datasetLoaded) return;

        try {
            const response = await fetch('/data/cybershieldx_dataset.csv');
            const csvText = await response.text();

            Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    this.dataset = results.data as DatasetRow[];
                    this.datasetLoaded = true;
                    console.log(`✅ Dataset loaded: ${this.dataset.length} examples`);
                },
                error: (error: Error) => {
                    console.error('❌ Error loading dataset:', error);
                }
            });
        } catch (error) {
            console.error('❌ Failed to fetch dataset:', error);
        }
    }

    /**
     * Main entry point for message analysis
     */
    public async analyze(message: string): Promise<AnalysisResult> {
        if (!message || message.trim().length === 0) {
            return this.createEmptyResult();
        }

        const cacheKey = this.getCacheKey(message);
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey)!;
        }

        // Wait for dataset to load if not already loaded
        if (!this.datasetLoaded) {
            await this.waitForDataset();
        }

        // Find similar examples from dataset
        const similarExamples = this.findSimilarMessages(message);

        const sentimentResult = this.simpleSentimentAnalysis(message);
        const keywords = this.detectKeywords(message);

        // Enhanced scoring using dataset
        const toxicityScore = this.calculateEnhancedToxicityScore(message, keywords, sentimentResult, similarExamples);
        const category = this.determineCategory(toxicityScore, keywords);

        const result: AnalysisResult = {
            category,
            toxicityScore,
            confidenceScore: this.calculateConfidence(message, keywords, similarExamples),
            matchedKeywords: keywords.all,
            summary: this.generateSummary(category, keywords.all, sentimentResult.score, similarExamples),
            similarExamples: similarExamples.slice(0, 3), // Top 3 similar examples
            sentiment: {
                score: sentimentResult.score,
                comparative: sentimentResult.comparative,
                tokens: sentimentResult.tokens,
                words: sentimentResult.words,
                positive: sentimentResult.positive,
                negative: sentimentResult.negative
            }
        };

        // Enhanced crime pattern detection using dataset
        if (category === 'high-risk' || category === 'harassment') {
            result.crimePattern = this.detectCrimePatternFromDataset(keywords, similarExamples);
        }

        this.cache.set(cacheKey, result);
        return result;
    }

    /**
     * Wait for dataset to load
     */
    private async waitForDataset(maxWait: number = 3000): Promise<void> {
        const startTime = Date.now();
        while (!this.datasetLoaded && (Date.now() - startTime) < maxWait) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }

    /**
     * Find similar messages in dataset using keyword matching and text similarity
     */
    private findSimilarMessages(message: string): Array<{
        message: string;
        toxicity_label: string;
        crime_type: string;
        similarity: number;
    }> {
        if (!this.datasetLoaded || this.dataset.length === 0) {
            return [];
        }

        const messageLower = message.toLowerCase();
        const messageWords = new Set(messageLower.split(/\s+/));

        const similarities = this.dataset.map(row => {
            const rowWords = new Set(row.message_text.toLowerCase().split(/\s+/));
            const intersection = new Set([...messageWords].filter(x => rowWords.has(x)));
            const union = new Set([...messageWords, ...rowWords]);
            const similarity = intersection.size / union.size; // Jaccard similarity

            return {
                message: row.message_text,
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
