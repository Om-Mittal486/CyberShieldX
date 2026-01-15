'use client';

import React, { useState, useEffect } from 'react';
import { FileText, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { MessageAnalyzer } from '@/lib/analyzer/MessageAnalyzer';
import { PatternDetector } from '@/lib/crime/PatternDetector';
import { Evidence } from '@/types';
import { loadDataset, findSimilarMessages, DatasetEntry } from '@/lib/data/datasetLoader';

interface TextAnalyzerProps {
    onAnalysisComplete?: (text: string, evidenceItems: Evidence[]) => void;
}

export default function TextAnalyzer({ onAnalysisComplete }: TextAnalyzerProps) {
    const [text, setText] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisResult, setAnalysisResult] = useState<any>(null);
    const [dataset, setDataset] = useState<DatasetEntry[]>([]);
    const [datasetMatches, setDatasetMatches] = useState<DatasetEntry[]>([]);

    // Load dataset on mount
    useEffect(() => {
        loadDataset().then(setDataset);
    }, []);

    const handleAnalyze = async () => {
        if (!text.trim()) return;

        setIsAnalyzing(true);
        setAnalysisResult(null);

        try {
            // Analyze the text
            const analyzer = new MessageAnalyzer();
            const detector = new PatternDetector();

            const analysis = await analyzer.analyze(text);
            const patterns = detector.detect(text);

            // Find similar messages in dataset
            const matches = findSimilarMessages(text, dataset);
            setDatasetMatches(matches);

            setAnalysisResult({ analysis, patterns, datasetMatches: matches });

            // Create evidence item
            if (onAnalysisComplete) {
                const evidence: Evidence = {
                    id: `text-${Date.now()}`,
                    type: 'text',
                    url: '', // No URL for direct text
                    filename: 'Direct Text Input',
                    fileSize: text.length,
                    mimeType: 'text/plain',
                    metadata: {},
                    analysis,
                    createdAt: new Date().toISOString()
                };

                onAnalysisComplete(text, [evidence]);
            }
        } catch (error) {
            console.error('Analysis error:', error);
        } finally {
            setIsAnalyzing(false);
        }
    };

    const getSeverityColor = (category: string) => {
        switch (category) {
            case 'high-risk':
                return 'text-red-500 bg-red-500/10 border-red-500/30';
            case 'harassment':
                return 'text-orange-500 bg-orange-500/10 border-orange-500/30';
            case 'mild':
                return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30';
            case 'safe':
                return 'text-green-500 bg-green-500/10 border-green-500/30';
            default:
                return 'text-gray-500 bg-gray-500/10 border-gray-500/30';
        }
    };

    return (
        <div className="space-y-6">
            {/* Input Section */}
            <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-[#00ff41]" />
                    <h3 className="text-lg font-semibold text-white">Direct Text Analysis</h3>
                </div>

                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Paste the message or text content you want to analyze here...&#10;&#10;Example: Threatening messages, suspicious emails, social media posts, etc."
                    className="w-full h-48 bg-black/50 border border-white/10 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ff41]/50 resize-none font-mono text-sm"
                    disabled={isAnalyzing}
                />

                <div className="flex items-center justify-between mt-6">
                    <span className="text-sm text-[var(--text-secondary)] font-mono">
                        {text.length} characters
                    </span>

                    <button
                        onClick={handleAnalyze}
                        disabled={!text.trim() || isAnalyzing}
                        className="px-8 py-3 border-2 border-[var(--accent)] text-[var(--accent)] font-bold tracking-wider hover:bg-[var(--accent)] hover:text-black transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed text-sm flex items-center gap-2"
                    >
                        {isAnalyzing ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                ANALYZING...
                            </>
                        ) : (
                            <>
                                <FileText className="w-4 h-4" />
                                [ ANALYZE TEXT ]
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Results Section */}
            {analysisResult && (
                <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 space-y-4 animate-in fade-in slide-in-from-bottom-4">
                    <div className="flex items-center gap-2 mb-4">
                        <CheckCircle2 className="w-5 h-5 text-[#00ff41]" />
                        <h3 className="text-lg font-semibold text-white">Analysis Results</h3>
                    </div>

                    {/* Category Badge */}
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-400">Category:</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(analysisResult.analysis.category)}`}>
                            {analysisResult.analysis.category.toUpperCase()}
                        </span>
                    </div>

                    {/* Scores */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black/50 rounded-lg p-4">
                            <div className="text-xs text-gray-400 mb-1">Toxicity Score</div>
                            <div className="text-2xl font-bold text-white">
                                {analysisResult.analysis.toxicityScore}%
                            </div>
                        </div>
                        <div className="bg-black/50 rounded-lg p-4">
                            <div className="text-xs text-gray-400 mb-1">Confidence</div>
                            <div className="text-2xl font-bold text-white">
                                {analysisResult.analysis.confidenceScore}%
                            </div>
                        </div>
                    </div>

                    {/* Matched Keywords */}
                    {analysisResult.analysis.matchedKeywords.length > 0 && (
                        <div>
                            <div className="text-sm text-gray-400 mb-2">Detected Keywords:</div>
                            <div className="flex flex-wrap gap-2">
                                {analysisResult.analysis.matchedKeywords.map((keyword: string, idx: number) => (
                                    <span
                                        key={idx}
                                        className="px-2 py-1 bg-red-500/10 text-red-400 border border-red-500/30 rounded text-xs font-mono"
                                    >
                                        {keyword}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Crime Patterns */}
                    {analysisResult.patterns.length > 0 && (
                        <div>
                            <div className="text-sm text-gray-400 mb-2">Crime Patterns Detected:</div>
                            <div className="space-y-2">
                                {analysisResult.patterns.map((pattern: any, idx: number) => (
                                    <div
                                        key={idx}
                                        className="bg-black/50 border border-orange-500/30 rounded-lg p-3"
                                    >
                                        <div className="font-medium text-orange-400">{pattern.category}</div>
                                        <div className="text-xs text-gray-400 mt-1">
                                            Confidence: {(pattern.confidence * 100).toFixed(0)}% | Severity: {pattern.severity}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}



                    {/* Summary */}
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                            <AlertCircle className="w-5 h-5 text-blue-400 mt-0.5" />
                            <div className="flex-1">
                                <div className="text-sm font-medium text-blue-400 mb-1">Summary</div>
                                <div className="text-sm text-gray-300">{analysisResult.analysis.summary}</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-xs text-gray-500 text-center pt-2">
                        Results have been sent to the Investigation Assistant. Switch to the "Active Investigation" tab to view detailed recommendations.
                    </div>
                </div>
            )}
        </div>
    );
}
