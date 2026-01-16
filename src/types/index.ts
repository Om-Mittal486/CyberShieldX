import { AnalysisResult } from '@/lib/analyzer/MessageAnalyzer';
import { CrimeMatch, Severity } from '@/lib/crime/PatternDetector';

export type CaseSeverity = Severity;

export interface ReportData {
    id: string;
    timestamp: string; // ISO string
    severity: CaseSeverity;
    message: {
        content: string;
        sanitized?: string;
        source?: string;
        senderId?: string;
        platform?: string;
    };
    analysis: AnalysisResult;
    crimePatterns: CrimeMatch[];
    investigation: {
        steps: string[]; // Descriptions of steps taken or recommended
        evidenceCollected: string[]; // Summaries of evidence
    };
    evidence: Evidence[]; // detailed evidence objects
    agent: {
        name: string;
        id: string;
    };
}

export interface Evidence {
    id: string;
    type: 'image' | 'text' | 'document';
    url: string;
    filename: string;
    fileSize: number;
    mimeType: string;
    metadata: {
        width?: number;
        height?: number;
        extractedText?: string;
        ocrConfidence?: number;
    };
    analysis?: AnalysisResult;
    createdAt: string;
    userId?: string;
}

export interface OCRResult {
    text: string;
    confidence: number;
    progress: number;
    status: string;
}
