'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import Tesseract from 'tesseract.js';
import { Loader2, Upload, FileText, X, AlertTriangle, CheckCircle, Save, Smartphone } from 'lucide-react';
import { MessageAnalyzer, AnalysisResult } from '@/lib/analyzer/MessageAnalyzer';
import { OCRResult, Evidence } from '@/types';
import { supabase } from '@/lib/supabase/client';

interface OCRAnalyzerProps {
    onAnalysisComplete?: (text: string, evidenceItems: Evidence[]) => void;
}

export default function OCRAnalyzer({ onAnalysisComplete }: OCRAnalyzerProps) {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [ocrResult, setOcrResult] = useState<OCRResult | null>(null);
    const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const selectedFile = acceptedFiles[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
            setOcrResult(null);
            setAnalysis(null);
            setSaveStatus('idle');
            processImage(selectedFile);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.png', '.jpg', '.jpeg', '.bmp']
        },
        maxFiles: 1
    });

    const processImage = async (imageFile: File) => {
        setIsProcessing(true);
        setOcrResult(null);
        setAnalysis(null);

        try {
            const result = await Tesseract.recognize(
                imageFile,
                'eng',
                {
                    logger: m => {
                        if (m.status === 'recognizing text') {
                            setOcrResult(prev => ({
                                text: prev?.text || '',
                                confidence: prev?.confidence || 0,
                                progress: m.progress,
                                status: m.status
                            }));
                        }
                    }
                }
            );

            const text = result.data.text;
            const confidence = result.data.confidence;

            setOcrResult({
                text,
                confidence,
                progress: 1,
                status: 'completed'
            });

            // Analyze extracted text
            const analyzer = new MessageAnalyzer();
            const analysisResult = await analyzer.analyze(text);
            setAnalysis(analysisResult);

            if (onAnalysisComplete) {
                // Create a temporary evidence item for the parent to display/use
                const tempEvidence: Evidence = {
                    id: `temp-${Date.now()}`,
                    type: 'image',
                    url: URL.createObjectURL(imageFile), // Use local blob for preview
                    filename: imageFile.name,
                    fileSize: imageFile.size,
                    mimeType: imageFile.type,
                    metadata: {
                        extractedText: text,
                        ocrConfidence: confidence
                    },
                    analysis: analysisResult,
                    createdAt: new Date().toISOString()
                };
                onAnalysisComplete(text, [tempEvidence]);
            }

        } catch (error) {
            console.error('OCR Error:', error);
            setOcrResult({
                text: 'Error processing image',
                confidence: 0,
                progress: 0,
                status: 'error'
            });
        } finally {
            setIsProcessing(false);
        }
    };

    const handleClear = () => {
        setFile(null);
        setPreview(null);
        setOcrResult(null);
        setAnalysis(null);
        setSaveStatus('idle');
    };

    const handleSave = async () => {
        if (!file || !ocrResult || !analysis) return;

        setIsSaving(true);
        try {
            // 1. Upload image to Storage
            const fileName = `${Date.now()}_${file.name}`;
            const { data: uploadData, error: uploadError } = await supabase.storage
                .from('evidence')
                .upload(fileName, file);

            if (uploadError) throw uploadError;

            // 2. Get Public URL
            const { data: { publicUrl } } = supabase.storage
                .from('evidence')
                .getPublicUrl(fileName);

            // 3. Save Evidence Record
            const evidenceData: Partial<Evidence> = {
                type: 'image',
                url: publicUrl,
                filename: fileName,
                fileSize: file.size,
                mimeType: file.type,
                metadata: {
                    width: 0, // Would need Image object to get this
                    height: 0,
                    extractedText: ocrResult.text,
                    ocrConfidence: ocrResult.confidence
                },
                analysis: analysis,
                createdAt: new Date().toISOString()
            };

            const { error: dbError } = await supabase
                .from('evidence')
                .insert([evidenceData]);

            if (dbError) throw dbError;

            setSaveStatus('success');
            setTimeout(() => setSaveStatus('idle'), 3000);

        } catch (error) {
            console.error('Save Error:', error);
            setSaveStatus('error');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                    <h2 className="text-xl font-bold flex items-center gap-2 text-gray-800">
                        <Smartphone className="w-6 h-6 text-blue-600" />
                        Evidence Analyzer
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Extract text from screenshots and analyze for toxic content using client-side OCR.
                    </p>
                </div>

                <div className="p-6 space-y-8">
                    {/* Upload Area */}
                    {!file && (
                        <div
                            {...getRootProps()}
                            className={`border-2 border-dashed rounded-xl p-12 flex flex-col items-center justify-center cursor-pointer transition-all duration-200
                ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`}
                        >
                            <input {...getInputProps()} />
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <Upload className="w-8 h-8 text-blue-600" />
                            </div>
                            <p className="text-lg font-medium text-gray-700">Drop your screenshot here</p>
                            <p className="text-sm text-gray-400 mt-2">Supports JPG, PNG, BMP</p>
                        </div>
                    )}

                    {/* Preview & Results */}
                    {file && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Column: Image Preview */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-gray-700">Evidence Preview</h3>
                                    <button
                                        onClick={handleClear}
                                        className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1 px-2 py-1 rounded hover:bg-red-50 transition-colors"
                                    >
                                        <X className="w-4 h-4" /> Clear
                                    </button>
                                </div>

                                <div className="relative rounded-lg overflow-hidden border border-gray-200 bg-gray-900 group">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={preview!} alt="Evidence" className="w-full h-auto object-contain max-h-[500px]" />

                                    {isProcessing && (
                                        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white backdrop-blur-sm">
                                            <Loader2 className="w-8 h-8 animate-spin mb-2" />
                                            <span className="font-medium">Extracting Text...</span>
                                            {ocrResult?.progress && (
                                                <div className="w-48 h-2 bg-gray-700 rounded-full mt-4 overflow-hidden">
                                                    <div
                                                        className="h-full bg-blue-500 transition-all duration-300"
                                                        style={{ width: `${Math.round(ocrResult.progress * 100)}%` }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {ocrResult?.status === 'completed' && (
                                    <div className="flex items-center justify-between text-sm text-gray-500 bg-gray-50 p-2 rounded-lg border border-gray-100">
                                        <span className="flex items-center gap-1">
                                            <FileText className="w-4 h-4" />
                                            {file.name}
                                        </span>
                                        <span>
                                            Confidence: {Math.round(ocrResult.confidence)}%
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Right Column: Analysis Results */}
                            <div className="space-y-6">
                                {/* Extracted Text */}
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                                        <FileText className="w-4 h-4 text-blue-500" />
                                        Extracted Content
                                    </h3>
                                    <div className="bg-gray-50 rounded-lg p-4 h-48 overflow-y-auto text-sm border border-gray-100">
                                        {ocrResult?.text ? (
                                            <p className="whitespace-pre-wrap text-gray-700">{ocrResult.text}</p>
                                        ) : (
                                            <p className="text-gray-400 italic">No text extracted yet...</p>
                                        )}
                                    </div>
                                </div>

                                {/* Analysis Report */}
                                {analysis && (
                                    <div className="space-y-4 animate-in fade-in duration-500">
                                        <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                                            <AlertTriangle className="w-4 h-4 text-orange-500" />
                                            Risk Analysis
                                        </h3>

                                        <div className={`p-4 rounded-xl border ${analysis.category === 'safe' ? 'bg-green-50 border-green-100' :
                                            analysis.category === 'mild' ? 'bg-yellow-50 border-yellow-100' :
                                                'bg-red-50 border-red-100'
                                            }`}>
                                            <div className="flex justify-between items-start mb-2">
                                                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize
                            ${analysis.category === 'safe' ? 'bg-green-100 text-green-700' :
                                                        analysis.category === 'mild' ? 'bg-yellow-100 text-yellow-700' :
                                                            'bg-red-100 text-red-700'}`}>
                                                    {analysis.category}
                                                </span>
                                                <span className="text-xs font-mono text-gray-500">
                                                    Score: {analysis.toxicityScore}/100
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-700 font-medium">
                                                {analysis.summary}
                                            </p>
                                        </div>

                                        {analysis.matchedKeywords && analysis.matchedKeywords.length > 0 && (
                                            <div>
                                                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Detected Keywords</span>
                                                <div className="flex gap-2 flex-wrap mt-2">
                                                    {analysis.matchedKeywords.map((keyword, i) => (
                                                        <span key={i} className="px-2 py-1 bg-red-50 text-red-600 text-xs rounded border border-red-100">
                                                            {keyword}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Save Button */}
                                {analysis && (
                                    <button
                                        onClick={handleSave}
                                        disabled={isSaving || saveStatus === 'success'}
                                        className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all
                      ${saveStatus === 'success'
                                                ? 'bg-green-500 text-white'
                                                : 'bg-gray-900 text-white hover:bg-black active:scale-[0.98]'
                                            } disabled:opacity-70 disabled:cursor-not-allowed`}
                                    >
                                        {isSaving ? (
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        ) : saveStatus === 'success' ? (
                                            <>
                                                <CheckCircle className="w-5 h-5" /> Saved to Vault
                                            </>
                                        ) : (
                                            <>
                                                <Save className="w-5 h-5" /> Save Evidence
                                            </>
                                        )}
                                    </button>
                                )}

                                {saveStatus === 'error' && (
                                    <p className="text-xs text-red-500 text-center">
                                        Failed to save evidence. Check your connection or API keys.
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
