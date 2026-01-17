'use client';

import React, { useState } from 'react';
import { Search, ShieldCheck, ShieldAlert, Globe, AlertTriangle, FileText } from 'lucide-react';
import { PhishingDetector, PhishingResult } from '@/lib/forensics/PhishingDetector';

export default function PhishingScanner() {
    const [url, setUrl] = useState('');
    const [result, setResult] = useState<PhishingResult | null>(null);
    const [analyzing, setAnalyzing] = useState(false);

    const handleAnalyze = () => {
        if (!url) return;
        setAnalyzing(true);

        // Simulate API delay for effect
        setTimeout(() => {
            const detector = new PhishingDetector();
            const analysis = detector.analyze(url);
            setResult(analysis);
            setAnalyzing(false);
        }, 1200);
    };

    const generateComplaint = async () => {
        if (!result) return;

        const { jsPDF } = await import('jspdf');
        const doc = new jsPDF();

        const riskLevel = result.score >= 80 ? 'Critical' : result.score >= 50 ? 'High' : result.score >= 30 ? 'Medium' : 'Low';
        const crimeType = result.isSuspicious ? 'Phishing / Online Fraud Attempt' : 'Suspicious Activity';
        const reportId = `CSXP-${Date.now()}`;

        let currentY = 20;
        const margin = 20;
        const pageWidth = doc.internal.pageSize.width;

        // Header
        doc.setFontSize(20);
        doc.setTextColor(220, 38, 38);
        doc.text('CYBER CRIME COMPLAINT', pageWidth / 2, currentY, { align: 'center' });

        currentY += 10;
        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text(`Report ID: ${reportId}`, pageWidth / 2, currentY, { align: 'center' });

        currentY += 5;
        doc.text(`Date: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`, pageWidth / 2, currentY, { align: 'center' });

        currentY += 10;
        doc.setDrawColor(200);
        doc.line(margin, currentY, pageWidth - margin, currentY);
        currentY += 10;

        // Subject
        doc.setFontSize(12);
        doc.setTextColor(0);
        doc.setFont('helvetica', 'bold');
        doc.text('Subject:', margin, currentY);
        doc.setFont('helvetica', 'normal');
        doc.text('Online Cybercrime Complaint - Phishing URL Detection', margin + 20, currentY);
        currentY += 10;

        // Complaint Details Section
        doc.setFont('helvetica', 'bold');
        doc.text('COMPLAINT DETAILS:', margin, currentY);
        currentY += 7;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        const complaintText = doc.splitTextToSize('I encountered the following suspicious URL that appears to be a phishing attempt:', pageWidth - (margin * 2));
        doc.text(complaintText, margin, currentY);
        currentY += 7;

        // URL Box
        doc.setFillColor(245, 245, 245);
        doc.rect(margin, currentY, pageWidth - (margin * 2), 15, 'F');
        doc.setTextColor(0, 0, 255);
        const urlText = doc.splitTextToSize(url, pageWidth - (margin * 2) - 4);
        doc.text(urlText, margin + 2, currentY + 5);
        doc.setTextColor(0);
        currentY += 20;

        // Analysis Section
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.text('CYBERSHIELDX AI ANALYSIS:', margin, currentY);
        currentY += 7;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.text(`Risk Level: ${riskLevel} (${result.score}/100)`, margin, currentY);
        currentY += 5;
        doc.text(`Threat Status: ${result.isSuspicious ? 'CONFIRMED THREAT' : 'SUSPICIOUS ACTIVITY'}`, margin, currentY);
        currentY += 5;
        doc.text(`Crime Classification: ${crimeType}`, margin, currentY);
        currentY += 10;

        // Detected Issues
        doc.setFont('helvetica', 'bold');
        doc.text('Detected Security Issues:', margin, currentY);
        currentY += 5;

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(200, 0, 0);
        result.reasons.forEach((reason, idx) => {
            const reasonText = doc.splitTextToSize(`${idx + 1}. ${reason}`, pageWidth - (margin * 2));
            doc.text(reasonText, margin, currentY);
            currentY += reasonText.length * 5;
        });
        doc.setTextColor(0);
        currentY += 5;

        // Legal Framework
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.text('LEGAL FRAMEWORK:', margin, currentY);
        currentY += 7;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        const laws = [
            'IT Act Section 66D - Cheating by Personation using Computer Resource',
            'IPC Section 420 - Cheating and Dishonestly Inducing Delivery of Property',
            'IT Act Section 66C - Identity Theft',
            'IT Act Section 43 - Penalty for Damage to Computer System'
        ];

        laws.forEach(law => {
            const lawText = doc.splitTextToSize(`• ${law}`, pageWidth - (margin * 2));
            doc.text(lawText, margin, currentY);
            currentY += lawText.length * 5;
        });
        currentY += 5;

        // Check page break
        if (currentY > 250) {
            doc.addPage();
            currentY = 20;
        }

        // Request Section
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.text('REQUEST:', margin, currentY);
        currentY += 7;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        const requests = [
            'Investigate the reported URL and its hosting infrastructure',
            'Take necessary legal action against the perpetrators',
            'Block/takedown the malicious URL to prevent further victims',
            'Provide guidance on additional protective measures'
        ];

        doc.text('I request the Cyber Crime Cell to:', margin, currentY);
        currentY += 5;
        requests.forEach((req, idx) => {
            const reqText = doc.splitTextToSize(`${idx + 1}. ${req}`, pageWidth - (margin * 2) - 5);
            doc.text(reqText, margin + 5, currentY);
            currentY += reqText.length * 5;
        });
        currentY += 10;

        // Victim Information Section
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.text('VICTIM INFORMATION:', margin, currentY);
        currentY += 10;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.text('Name: ________________________________', margin, currentY);
        currentY += 10;
        doc.text('Contact: ________________________________', margin, currentY);
        currentY += 10;
        doc.text('Email: ________________________________', margin, currentY);
        currentY += 10;
        doc.text('Address: ________________________________', margin, currentY);
        currentY += 15;

        // Declaration
        const declaration = doc.splitTextToSize('I hereby declare that the information provided above is true to the best of my knowledge.', pageWidth - (margin * 2));
        doc.text(declaration, margin, currentY);
        currentY += 15;

        doc.text('Signature: _______________', margin, currentY);
        doc.text(`Date: ${new Date().toLocaleDateString('en-IN')}`, pageWidth - margin - 50, currentY);

        // Footer
        const bottomY = doc.internal.pageSize.height - 20;
        doc.setDrawColor(200);
        doc.line(margin, bottomY - 5, pageWidth - margin, bottomY - 5);
        doc.setFontSize(8);
        doc.setTextColor(150);
        doc.text('Generated by CyberShieldX - AI-Powered Cybercrime Detection Platform', pageWidth / 2, bottomY, { align: 'center' });

        // Save PDF
        doc.save(`CyberCell_Complaint_${reportId}.pdf`);
    };

    return (
        <div className="w-full bg-[var(--bg-card)] border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[var(--accent)]">
                <Globe className="w-5 h-5" />
                PHISHING SCANNER
            </h3>

            <div className="flex gap-2 mb-6">
                <div className="relative flex-1">
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter URL to analyze (e.g., http://suspicious-login.com)"
                        className="w-full bg-black/50 border border-white/10 rounded-md py-3 pl-10 pr-4 text-white focus:outline-none focus:border-[var(--accent)] transition-colors"
                        onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                    />
                    <Search className="absolute left-3 top-3.5 w-4 h-4 text-[var(--text-tertiary)]" />
                </div>
                <button
                    onClick={handleAnalyze}
                    disabled={!url || analyzing}
                    className="bg-[var(--accent)] text-black font-bold px-6 rounded-md hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {analyzing ? 'SCANNING...' : 'SCAN'}
                </button>
            </div>

            {result && !analyzing && (
                <div className={`animate-in fade-in slide-in-from-bottom-2 duration-300 rounded-lg p-6 border ${result.isSuspicious ? 'bg-red-500/10 border-red-500/50' : 'bg-green-500/10 border-green-500/50'
                    }`}>
                    <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full ${result.isSuspicious ? 'bg-red-500/20' : 'bg-green-500/20'}`}>
                            {result.isSuspicious ? <ShieldAlert className="w-8 h-8 text-red-500" /> : <ShieldCheck className="w-8 h-8 text-green-500" />}
                        </div>
                        <div className="flex-1">
                            <h4 className={`text-xl font-bold mb-2 ${result.isSuspicious ? 'text-red-400' : 'text-green-400'}`}>
                                {result.isSuspicious ? 'THREAT DETECTED' : 'SAFE DOMAIN'}
                            </h4>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex-1 bg-black/30 h-2 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full ${result.isSuspicious ? 'bg-red-500' : 'bg-green-500'}`}
                                        style={{ width: `${result.score}%` }}
                                    ></div>
                                </div>
                                <span className="font-mono text-sm">{result.score}/100 Risk</span>
                            </div>

                            <div className="space-y-2">
                                {result.reasons.map((reason, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                                        <AlertTriangle className="w-3 h-3 text-[var(--accent)] opacity-50" />
                                        <span>{reason}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Generate Complaint Button - Only for suspicious URLs */}
                            {result.isSuspicious && (
                                <div className="mt-6 pt-4 border-t border-white/10">
                                    <button
                                        onClick={generateComplaint}
                                        className="w-full px-6 py-3 border-2 border-[var(--accent)] text-[var(--accent)] font-bold tracking-wider hover:bg-[var(--accent)] hover:text-black transition-all duration-300 text-sm flex items-center justify-center gap-2"
                                    >
                                        <FileText className="w-4 h-4" />
                                        [ GENERATE CYBER CELL COMPLAINT ]
                                    </button>
                                    <p className="text-xs text-[var(--text-tertiary)] text-center mt-2">
                                        Download PDF complaint for law enforcement
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
