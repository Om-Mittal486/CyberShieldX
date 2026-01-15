// sentiment library removed due to installation issues
// import Sentiment from 'sentiment';

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
    sentiment?: {
        score: number;
        comparative: number;
        tokens: string[];
        words: string[];
        positive: string[];
        negative: string[];
    };
}

export class MessageAnalyzer {
    // private sentiment: Sentiment;
    private cache: Map<string, AnalysisResult>;

    // Keyword dictionaries
    private threats = ['kill', 'murder', 'hurt', 'attack', 'bomb', 'shoot', 'stab', 'die', 'burn', 'destroy'];
    private harassment = ['stupid', 'idiot', 'ugly', 'fat', 'hate', 'trash', 'failure', 'useless', 'disgusting', 'creepy'];
    private fraud = ['bank', 'account', 'password', 'credit card', 'transfer', 'money', 'urgent', 'winner', 'lottery', 'ssn'];

    // Basic sentiment dictionaries
    private positiveWords = ['good', 'great', 'awesome', 'nice', 'happy', 'love', 'excellent', 'best', 'wonderful', 'safe'];
    private negativeWords = ['bad', 'terrible', 'awful', 'sad', 'hate', 'worst', 'horrible', 'dangerous', 'fail', 'poor'];

    constructor() {
        // this.sentiment = new Sentiment();
        this.cache = new Map();
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

        const sentimentResult = this.simpleSentimentAnalysis(message);
        const keywords = this.detectKeywords(message);
        const toxicityScore = this.calculateToxicityScore(keywords, sentimentResult);
        const category = this.determineCategory(toxicityScore, keywords);

        const result: AnalysisResult = {
            category,
            toxicityScore,
            confidenceScore: this.calculateConfidence(message, keywords),
            matchedKeywords: keywords.all,
            summary: this.generateSummary(category, keywords.all, sentimentResult.score),
            sentiment: {
                score: sentimentResult.score,
                comparative: sentimentResult.comparative,
                tokens: sentimentResult.tokens,
                words: sentimentResult.words,
                positive: sentimentResult.positive,
                negative: sentimentResult.negative
            }
        };

        // Simple crime pattern detection (placeholder for more advanced integration)
        if (category === 'high-risk' || category === 'harassment') {
            result.crimePattern = this.detectCrimePattern(keywords);
        }

        this.cache.set(cacheKey, result);
        return result;
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

    private calculateToxicityScore(keywords: { threats: string[], harassment: string[], fraud: string[] }, sentiment: any): number {
        let score = 0;

        // Base score from keywords
        score += keywords.threats.length * 30;
        score += keywords.harassment.length * 15;
        score += keywords.fraud.length * 20;

        // Adjust based on sentiment
        if (sentiment.score < 0) {
            score += Math.abs(sentiment.score) * 2;
        }

        // Cap at 100
        return Math.min(100, Math.max(0, score));
    }

    private determineCategory(score: number, keywords: { threats: string[], harassment: string[], fraud: string[] }): 'safe' | 'mild' | 'harassment' | 'high-risk' {
        if (keywords.threats.length > 0) return 'high-risk';
        if (keywords.fraud.length > 0) return 'high-risk';
        if (score > 60) return 'high-risk';
        if (score > 30) return 'harassment';
        if (score > 10) return 'mild';
        return 'safe';
    }

    private calculateConfidence(message: string, keywords: { all: string[] }): number {
        // Basic heuristics for confidence
        let confidence = 70; // Base confidence

        if (keywords.all.length > 0) confidence += 10;
        if (message.length > 20) confidence += 10; // More context is better
        if (message.length < 5) confidence -= 20; // Too short to be sure

        return Math.min(100, Math.max(0, confidence));
    }

    private generateSummary(category: string, keywords: string[], sentimentScore: number): string {
        const sentimentDesc = sentimentScore < 0 ? 'negative' : (sentimentScore > 0 ? 'positive' : 'neutral');
        if (category === 'safe') {
            return `The message appears safe with ${sentimentDesc} sentiment.`;
        }
        return `Detected ${category} content. Found keywords: ${keywords.join(', ') || 'None'}. Sentiment is ${sentimentDesc}.`;
    }

    private detectCrimePattern(keywords: { threats: string[], harassment: string[], fraud: string[] }): CrimePattern | undefined {
        if (keywords.threats.length > 0) {
            return {
                type: 'Cyberbullying / Threat',
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
                type: 'Harassment',
                description: 'Message contains harassing language.',
                severity: 'medium',
                confidence: 75
            };
        }
        return undefined;
    }
}
