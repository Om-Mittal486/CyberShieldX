import { jsPDF } from 'jspdf';
import { PhishingResult } from '@/lib/forensics/PhishingDetector';

export interface PhishingReportData {
    url: string;
    result: PhishingResult;
    timestamp: string;
    reportId: string;
}

export class PhishingReportGenerator {
    private doc: jsPDF;
    private currentY: number;
    private margin: number;
    private pageWidth: number;

    constructor() {
        this.doc = new jsPDF();
        this.currentY = 20;
        this.margin = 20;
        this.pageWidth = this.doc.internal.pageSize.width;
    }

    public async generate(data: PhishingReportData): Promise<void> {
        await this.buildDocument(data);
        const filename = `PhishingReport_${data.reportId}_${new Date().toISOString().split('T')[0]}.pdf`;
        this.doc.save(filename);
    }

    private async buildDocument(data: PhishingReportData): Promise<void> {
        // 1. Header
        this.addHeader(data);

        // 2. URL Analysis
        this.addURLAnalysis(data);

        // 3. Risk Assessment
        this.addRiskAssessment(data);

        // 4. Detected Issues
        this.addDetectedIssues(data);

        // 5. Legal Framework
        this.addLegalFramework(data);

        // 6. Recommendations
        this.addRecommendations(data);

        // 7. Footer
        this.addFooter(data);
    }

    private addHeader(data: PhishingReportData) {
        // Branding
        this.doc.setFontSize(24);
        this.doc.setTextColor(0, 102, 204); // Cyber Blue
        this.doc.text('CyberShieldX', this.margin, this.currentY);

        // Subtitle
        this.doc.setFontSize(12);
        this.doc.setTextColor(100, 100, 100);
        this.doc.text('Phishing URL Analysis Report', this.margin, this.currentY + 8);

        // Report ID and Date
        this.doc.setFontSize(10);
        this.doc.text(`Report ID: ${data.reportId}`, this.pageWidth - this.margin - 60, this.currentY);
        this.doc.text(`Date: ${new Date(data.timestamp).toLocaleString()}`, this.pageWidth - this.margin - 60, this.currentY + 6);

        this.currentY += 20;

        // Line separator
        this.doc.setDrawColor(200, 200, 200);
        this.doc.line(this.margin, this.currentY, this.pageWidth - this.margin, this.currentY);
        this.currentY += 15;

        // Threat Status Badge
        const threatText = data.result.isSuspicious ? 'THREAT DETECTED' : 'SAFE DOMAIN';
        const threatColor = data.result.isSuspicious ? [220, 38, 38] : [34, 197, 94];

        this.doc.setFontSize(16);
        this.doc.setTextColor(0, 0, 0);
        this.doc.text('Threat Status:', this.margin, this.currentY);

        this.doc.setFillColor(threatColor[0], threatColor[1], threatColor[2]);
        this.doc.roundedRect(this.margin + 45, this.currentY - 6, 50, 10, 2, 2, 'F');

        this.doc.setFontSize(10);
        this.doc.setTextColor(255, 255, 255);
        this.doc.text(threatText, this.margin + 50, this.currentY + 1);

        this.currentY += 15;
    }

    private addURLAnalysis(data: PhishingReportData) {
        this.checkPageBreak(40);

        this.doc.setFontSize(12);
        this.doc.setTextColor(50);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text('1. Analyzed URL', this.margin, this.currentY);
        this.currentY += 8;

        this.doc.setFont('helvetica', 'normal');
        this.doc.setFontSize(10);
        this.doc.setTextColor(0);

        // URL Box
        this.doc.setFillColor(245, 247, 250);
        const urlBoxHeight = 20;
        this.doc.rect(this.margin, this.currentY, this.pageWidth - (this.margin * 2), urlBoxHeight, 'F');

        const splitUrl = this.doc.splitTextToSize(data.url, this.pageWidth - (this.margin * 2) - 10);
        this.doc.setTextColor(0, 0, 255);
        this.doc.text(splitUrl, this.margin + 5, this.currentY + 7);

        this.currentY += urlBoxHeight + 10;
    }

    private addRiskAssessment(data: PhishingReportData) {
        this.checkPageBreak(60);

        this.doc.setFontSize(12);
        this.doc.setTextColor(50);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text('2. Risk Assessment', this.margin, this.currentY);
        this.currentY += 10;

        // Risk Score Bar
        this.doc.setFontSize(10);
        this.doc.setTextColor(0);
        this.doc.setFont('helvetica', 'normal');
        this.doc.text('Risk Score:', this.margin, this.currentY);

        // Background bar
        this.doc.setFillColor(230, 230, 230);
        this.doc.rect(this.margin + 30, this.currentY - 4, 100, 5, 'F');

        // Foreground bar
        const score = data.result.score;
        const barColor = score >= 80 ? [220, 38, 38] : score >= 50 ? [249, 115, 22] : score >= 30 ? [234, 179, 8] : [34, 197, 94];
        this.doc.setFillColor(barColor[0], barColor[1], barColor[2]);
        this.doc.rect(this.margin + 30, this.currentY - 4, score, 5, 'F');

        this.doc.text(`${score}/100`, this.margin + 135, this.currentY);
        this.currentY += 10;

        // Risk Level
        const riskLevel = score >= 80 ? 'Critical' : score >= 50 ? 'High' : score >= 30 ? 'Medium' : 'Low';
        this.doc.text(`Risk Level: ${riskLevel}`, this.margin, this.currentY);
        this.currentY += 8;

        // Threat Classification
        const classification = data.result.isSuspicious ? 'Phishing / Online Fraud Attempt' : 'Legitimate Website';
        this.doc.text(`Classification: ${classification}`, this.margin, this.currentY);
        this.currentY += 8;

        // Confidence
        const confidence = 100 - score;
        this.doc.text(`Legitimacy Confidence: ${confidence}%`, this.margin, this.currentY);
        this.currentY += 15;
    }

    private addDetectedIssues(data: PhishingReportData) {
        this.checkPageBreak(50);

        this.doc.setFontSize(12);
        this.doc.setTextColor(50);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text('3. Detected Security Issues', this.margin, this.currentY);
        this.currentY += 10;

        if (data.result.reasons.length === 0) {
            this.doc.setFont('helvetica', 'normal');
            this.doc.setFontSize(10);
            this.doc.setTextColor(100, 100, 100);
            this.doc.text('No security issues detected.', this.margin, this.currentY);
            this.currentY += 10;
            return;
        }

        this.doc.setFont('helvetica', 'normal');
        this.doc.setFontSize(10);
        this.doc.setTextColor(0, 0, 0);

        data.result.reasons.forEach((reason, index) => {
            this.checkPageBreak(10);
            const reasonText = `${index + 1}. ${reason}`;
            const splitReason = this.doc.splitTextToSize(reasonText, this.pageWidth - (this.margin * 2));

            if (data.result.isSuspicious) {
                this.doc.setTextColor(220, 38, 38);
            }

            this.doc.text(splitReason, this.margin, this.currentY);
            this.currentY += (splitReason.length * 5) + 3;

            this.doc.setTextColor(0, 0, 0);
        });

        this.currentY += 5;
    }

    private addLegalFramework(data: PhishingReportData) {
        if (!data.result.isSuspicious) {
            return; // Skip legal section for safe domains
        }

        this.checkPageBreak(60);

        this.doc.setFontSize(12);
        this.doc.setTextColor(50);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text('4. Applicable Legal Framework', this.margin, this.currentY);
        this.currentY += 10;

        this.doc.setFont('helvetica', 'normal');
        this.doc.setFontSize(10);
        this.doc.setTextColor(0, 0, 0);

        const legalProvisions = [
            'IT Act Section 66D - Cheating by Personation using Computer Resource',
            'IPC Section 420 - Cheating and Dishonestly Inducing Delivery of Property',
            'IT Act Section 66C - Identity Theft',
            'IT Act Section 43 - Penalty for Damage to Computer System'
        ];

        legalProvisions.forEach((provision, index) => {
            this.checkPageBreak(8);
            this.doc.setTextColor(200, 0, 0);
            this.doc.text(`• ${provision}`, this.margin, this.currentY);
            this.currentY += 6;
        });

        this.doc.setTextColor(0, 0, 0);
        this.currentY += 10;
    }

    private addRecommendations(data: PhishingReportData) {
        this.checkPageBreak(80);

        this.doc.setFontSize(12);
        this.doc.setTextColor(50);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text('5. Recommended Actions', this.margin, this.currentY);
        this.currentY += 10;

        this.doc.setFont('helvetica', 'normal');
        this.doc.setFontSize(10);
        this.doc.setTextColor(0, 0, 0);

        const recommendations = data.result.isSuspicious ? [
            'DO NOT visit this URL or enter any personal information',
            'DO NOT download any files from this website',
            'Report this URL to the National Cyber Crime Reporting Portal (cybercrime.gov.in)',
            'If you have already interacted with this site, change your passwords immediately',
            'Monitor your bank accounts and credit cards for suspicious activity',
            'Report to your IT department if this was received via work email',
            'Block this domain in your browser and email filters',
            'Share this report with law enforcement if you are a victim'
        ] : [
            'This URL appears to be legitimate based on our analysis',
            'Always verify the URL matches the official domain',
            'Look for HTTPS and valid SSL certificates',
            'Be cautious of unexpected emails or messages with links',
            'When in doubt, navigate to websites directly rather than clicking links'
        ];

        recommendations.forEach((recommendation, index) => {
            this.checkPageBreak(10);
            const recText = `${index + 1}. ${recommendation}`;
            const splitRec = this.doc.splitTextToSize(recText, this.pageWidth - (this.margin * 2));
            this.doc.text(splitRec, this.margin, this.currentY);
            this.currentY += (splitRec.length * 5) + 3;
        });

        this.currentY += 10;
    }

    private addFooter(data: PhishingReportData) {
        // Position at bottom
        const bottomY = this.doc.internal.pageSize.height - 20;

        this.doc.setDrawColor(200);
        this.doc.line(this.margin, bottomY - 5, this.pageWidth - this.margin, bottomY - 5);

        this.doc.setFontSize(8);
        this.doc.setTextColor(150);
        this.doc.text('Generated by CyberShieldX | Phishing Detection Report', this.margin, bottomY);
        this.doc.text('This document is electronically generated and valid without signature.', this.margin, bottomY + 4);

        // Analysis method
        this.doc.text('Analysis Method: Multi-layer phishing detection algorithm', this.margin, bottomY + 8);

        // Watermark
        if (data.result.isSuspicious) {
            this.doc.saveGraphicsState();
            this.doc.setTextColor(250, 200, 200);
            this.doc.setFontSize(60);
            this.doc.text('THREAT', 50, 150, { angle: 45 });
            this.doc.restoreGraphicsState();
        }
    }

    private checkPageBreak(requiredSpace: number) {
        if (this.currentY + requiredSpace > this.doc.internal.pageSize.height - this.margin) {
            this.doc.addPage();
            this.currentY = this.margin;
        }
    }
}
