import { jsPDF } from 'jspdf';
import { ReportData } from '@/types';

export class ReportGenerator {
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

    public async generate(data: ReportData): Promise<void> {
        await this.buildDocument(data);
        const filename = `CyberShieldX_Report_${data.id}_${new Date().toISOString().split('T')[0]}.pdf`;
        this.doc.save(filename);
    }

    public async generateBuffer(data: ReportData): Promise<ArrayBuffer> {
        await this.buildDocument(data);
        return this.doc.output('arraybuffer');
    }

    private async buildDocument(data: ReportData): Promise<void> {
        // 1. Header
        this.addHeader(data);

        // 2. Message Content
        this.addMessageContent(data);

        // 3. AI Analysis
        this.addAIAnalysis(data);

        // 4. Crime Pattern
        this.addCrimePattern(data);

        // 5. Investigation Steps
        this.addInvestigationSteps(data);

        // 6. Evidence Log
        await this.addEvidenceLog(data);

        // 7. Footer
        this.addFooter(data);
    }

    private addHeader(data: ReportData) {
        // Branding
        this.doc.setFontSize(24);
        this.doc.setTextColor(0, 102, 204); // Cyber Blue
        this.doc.text('CyberShieldX', this.margin, this.currentY);

        // Report ID and Date
        this.doc.setFontSize(10);
        this.doc.setTextColor(100, 100, 100);
        this.doc.text(`Report ID: ${data.id}`, this.pageWidth - this.margin - 60, this.currentY);
        this.doc.text(`Date: ${new Date(data.timestamp).toLocaleString()}`, this.pageWidth - this.margin - 60, this.currentY + 6);

        this.currentY += 15;

        // Line separator
        this.doc.setDrawColor(200, 200, 200);
        this.doc.line(this.margin, this.currentY, this.pageWidth - this.margin, this.currentY);
        this.currentY += 15;

        // Title & Severity
        this.doc.setFontSize(16);
        this.doc.setTextColor(0, 0, 0);
        this.doc.text('Investigation Report', this.margin, this.currentY);

        // Severity Badge (Simulated with colored rect and text)
        const severityColor = this.getSeverityColor(data.severity);
        this.doc.setFillColor(severityColor[0], severityColor[1], severityColor[2]);
        this.doc.roundedRect(this.pageWidth - this.margin - 40, this.currentY - 6, 40, 10, 2, 2, 'F');

        this.doc.setFontSize(10);
        this.doc.setTextColor(255);
        this.doc.text(data.severity.toUpperCase(), this.pageWidth - this.margin - 35, this.currentY + 1);

        this.currentY += 15;
    }


    private addMessageContent(data: ReportData) {
        this.checkPageBreak(40);

        this.doc.setFontSize(12);
        this.doc.setTextColor(50);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text('1. Analyzed Content', this.margin, this.currentY);
        this.currentY += 8;

        this.doc.setFont('helvetica', 'normal');
        this.doc.setFontSize(10);
        this.doc.setTextColor(0);

        // Split text first to calculate height
        const splitText = this.doc.splitTextToSize(data.message.content, this.pageWidth - (this.margin * 2) - 10);
        const textHeight = splitText.length * 5; // 5 units per line
        const boxHeight = Math.max(textHeight + 10, 20); // Minimum 20, add padding

        // Message Box with dynamic height
        this.doc.setFillColor(245, 247, 250);
        this.doc.rect(this.margin, this.currentY, this.pageWidth - (this.margin * 2), boxHeight, 'F');

        this.doc.text(splitText, this.margin + 5, this.currentY + 7);

        this.currentY += boxHeight + 5;

        if (data.message.source) {
            this.doc.setFontSize(9);
            this.doc.setTextColor(100);
            this.doc.text(`Source: ${data.message.source} | Sender: ${data.message.senderId || 'Unknown'}`, this.margin, this.currentY);
            this.currentY += 10;
        }
    }

    private addAIAnalysis(data: ReportData) {
        this.checkPageBreak(60);

        this.doc.setFontSize(12);
        this.doc.setTextColor(50);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text('2. AI Analysis', this.margin, this.currentY);
        this.currentY += 10;

        // Toxicity Score Bar
        this.doc.setFontSize(10);
        this.doc.setTextColor(0);
        this.doc.setFont('helvetica', 'normal');
        this.doc.text('Toxicity Score:', this.margin, this.currentY);

        // Background bar
        this.doc.setFillColor(230, 230, 230);
        this.doc.rect(this.margin + 30, this.currentY - 4, 100, 5, 'F');

        // Foreground bar
        const score = data.analysis.toxicityScore;
        const barColor = score > 70 ? [220, 38, 38] : score > 30 ? [245, 158, 11] : [16, 185, 129];
        this.doc.setFillColor(barColor[0], barColor[1], barColor[2]);
        this.doc.rect(this.margin + 30, this.currentY - 4, score, 5, 'F');

        this.doc.text(`${score.toFixed(1)}%`, this.margin + 135, this.currentY);
        this.currentY += 10;

        // Keywords
        this.doc.text('Detected Keywords:', this.margin, this.currentY);
        const keywords = data.analysis.matchedKeywords.join(', ') || 'None';
        this.doc.setTextColor(150, 0, 0);
        this.doc.text(keywords, this.margin + 35, this.currentY);
        this.currentY += 10;

        // Confidence
        this.doc.setTextColor(0, 0, 0);
        this.doc.text(`Confidence: ${data.analysis.confidenceScore}%`, this.margin, this.currentY);
        this.currentY += 15;
    }

    private addCrimePattern(data: ReportData) {
        this.checkPageBreak(50);

        this.doc.setFontSize(12);
        this.doc.setTextColor(50);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text('3. Crime Pattern Matches', this.margin, this.currentY);
        this.currentY += 10;

        if (data.crimePatterns.length === 0) {
            this.doc.setFont('helvetica', 'normal');
            this.doc.setFontSize(10);
            this.doc.setTextColor(100, 100, 100);
            this.doc.text('No specific crime patterns detected.', this.margin, this.currentY);
            this.currentY += 10;
            return;
        }

        data.crimePatterns.forEach(pattern => {
            this.doc.setFont('helvetica', 'bold');
            this.doc.setFontSize(11);
            this.doc.setTextColor(0);
            this.doc.text(pattern.category, this.margin, this.currentY);

            this.doc.setFont('helvetica', 'normal');
            this.doc.setFontSize(10);

            // Legal Sections
            if (pattern.legalReferences.length > 0) {
                this.currentY += 5;
                this.doc.text('Legal Violations:', this.margin + 5, this.currentY);
                pattern.legalReferences.forEach(ref => {
                    this.currentY += 5;
                    this.doc.setTextColor(200, 0, 0);
                    this.doc.text(`• ${ref.code} ${ref.section}: ${ref.description}`, this.margin + 10, this.currentY);
                });
            }
            this.doc.setTextColor(0, 0, 0);
            this.currentY += 10;
        });
    }

    private addInvestigationSteps(data: ReportData) {
        this.checkPageBreak(60);

        this.doc.setFontSize(12);
        this.doc.setTextColor(50);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text('4. Recommended Investigation Steps', this.margin, this.currentY);
        this.currentY += 10;

        this.doc.setFont('helvetica', 'normal');
        this.doc.setFontSize(10);
        this.doc.setTextColor(0, 0, 0);

        data.investigation.steps.forEach((step, index) => {
            this.checkPageBreak(10);
            const stepText = `${index + 1}. ${step}`;
            const splitStep = this.doc.splitTextToSize(stepText, this.pageWidth - (this.margin * 2));
            this.doc.text(splitStep, this.margin, this.currentY);
            this.currentY += (splitStep.length * 5) + 3;
        });

        this.currentY += 5;
    }

    private async addEvidenceLog(data: ReportData) {
        this.checkPageBreak(60);

        this.doc.setFontSize(12);
        this.doc.setTextColor(50);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text('5. Evidence Log', this.margin, this.currentY);
        this.currentY += 10;

        if (data.evidence.length === 0) {
            this.doc.setFont('helvetica', 'normal');
            this.doc.setFontSize(10);
            this.doc.text('No additional evidence attached.', this.margin, this.currentY);
            this.currentY += 15;
            return;
        }

        for (const item of data.evidence) {
            this.checkPageBreak(40);
            this.doc.setFont('helvetica', 'bold');
            this.doc.setFontSize(10);
            this.doc.text(`• ID: ${item.id} (${item.type})`, this.margin, this.currentY);
            this.currentY += 5;

            this.doc.setFont('helvetica', 'normal');
            this.doc.setFontSize(9);
            this.doc.text(`  Hash/Url: ${item.url.substring(0, 50)}...`, this.margin, this.currentY);
            this.currentY += 5;

            // If image, we could verify url and add it, but for now just logging validity
            if (item.type === 'image') {
                // Note: Adding images requires fetching the blob or base64. 
                // supporting remote URLs in jsPDF adds complexity (CORS).
                // For this version, we list the link text. 
                // Future improvement: fetch and addImage
                this.doc.setTextColor(0, 0, 255);
                this.doc.textWithLink('Open Evidence', this.margin + 10, this.currentY, { url: item.url });
                this.doc.setTextColor(0, 0, 0);
                this.currentY += 5;
            }

            this.currentY += 5;
        }
    }

    private addFooter(data: ReportData) {
        // Position at bottom
        const bottomY = this.doc.internal.pageSize.height - 20;

        this.doc.setDrawColor(200);
        this.doc.line(this.margin, bottomY - 5, this.pageWidth - this.margin, bottomY - 5);

        this.doc.setFontSize(8);
        this.doc.setTextColor(150);
        this.doc.text('Generated by CyberShieldX | Official Investigation Report', this.margin, bottomY);
        this.doc.text('This document is electronically generated and valid without signature.', this.margin, bottomY + 4);

        // Watermark
        this.doc.saveGraphicsState();
        this.doc.setTextColor(230, 230, 230);
        this.doc.setFontSize(60);
        this.doc.text('CONFIDENTIAL', 40, 150, { angle: 45 });
        this.doc.restoreGraphicsState();
    }

    private checkPageBreak(requiredSpace: number) {
        if (this.currentY + requiredSpace > this.doc.internal.pageSize.height - this.margin) {
            this.doc.addPage();
            this.currentY = this.margin;
        }
    }

    private getSeverityColor(severity: string): [number, number, number] {
        switch (severity.toLowerCase()) {
            case 'critical': return [220, 38, 38]; // Red
            case 'high': return [249, 115, 22]; // Orange
            case 'medium': return [234, 179, 8]; // Yellow
            case 'low': return [34, 197, 94]; // Green
            default: return [100, 116, 139]; // Gray
        }
    }
}
