'use client';

import React, { useState } from 'react';
import { FileSearch, ShieldAlert, FileText, Menu, X } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';
import ScrollReveal from '@/components/ui/ScrollReveal';
import OCRAnalyzer from '@/components/evidence/OCRAnalyzer';
import TextAnalyzer from '@/components/evidence/TextAnalyzer';
import { InvestigationAssistant } from '@/components/investigation/Assistant';
import { MessageAnalyzer } from '@/lib/analyzer/MessageAnalyzer';
import { PatternDetector, CrimeMatch, Severity } from '@/lib/crime/PatternDetector';
import { ReportGenerator } from '@/lib/pdf/ReportGenerator';
import { AnalysisResult } from '@/lib/analyzer/MessageAnalyzer';
import { ReportData, CaseSeverity, Evidence } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [evidenceMode, setEvidenceMode] = useState<'ocr' | 'text'>('text');

  // Investigation state
  const [currentAnalysis, setCurrentAnalysis] = useState<AnalysisResult | null>(null);
  const [currentPatterns, setCurrentPatterns] = useState<CrimeMatch[]>([]);
  const [currentEvidence, setCurrentEvidence] = useState<Evidence[]>([]);
  const [analyzedText, setAnalyzedText] = useState<string>('');
  const [caseSeverity, setCaseSeverity] = useState<CaseSeverity>(Severity.LOW);

  const [analyzer] = useState(() => new MessageAnalyzer());
  const [detector] = useState(() => new PatternDetector());
  const [reportGenerator] = useState(() => new ReportGenerator());

  const handleEvidenceProcessed = async (text: string, evidenceItems: Evidence[]) => {
    setAnalyzedText(text);
    setCurrentEvidence(prev => [...prev, ...evidenceItems]);

    const analysis = await analyzer.analyze(text);
    setCurrentAnalysis(analysis);

    const patterns = detector.detect(text);
    setCurrentPatterns(patterns);

    const maxSeverity = patterns.length > 0
      ? patterns[0].severity
      : (analysis.toxicityScore > 80 ? 'High' : 'Low');

    setCaseSeverity(maxSeverity as CaseSeverity);

    // Smooth scroll to investigation
    document.getElementById('investigation')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGenerateReport = async () => {
    if (!currentAnalysis) return;

    const reportData: ReportData = {
      id: uuidv4(),
      timestamp: new Date().toISOString(),
      severity: caseSeverity,
      message: {
        content: analyzedText,
        source: 'Evidence Analysis',
        senderId: 'Unknown'
      },
      analysis: currentAnalysis,
      crimePatterns: currentPatterns,
      investigation: {
        steps: currentPatterns.flatMap(p => p.investigationSteps.map(s => s.action)),
        evidenceCollected: currentEvidence.map(e => e.filename)
      },
      evidence: currentEvidence,
      agent: {
        name: 'Analyst User',
        id: 'user-1'
      }
    };

    await reportGenerator.generate(reportData);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 text-[var(--accent)] font-bold text-xl tracking-wider">
            <ShieldAlert className="w-6 h-6" />
            <span>CYBERSHIELD</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-[var(--accent)] transition-colors tracking-wide">
              HOME
            </button>
            <button onClick={() => scrollToSection('evidence')} className="text-sm font-medium hover:text-[var(--accent)] transition-colors tracking-wide">
              EVIDENCE LAB
            </button>
            <button onClick={() => scrollToSection('investigation')} className="text-sm font-medium hover:text-[var(--accent)] transition-colors tracking-wide">
              INVESTIGATION
            </button>
            <button onClick={() => scrollToSection('technology')} className="text-sm font-medium hover:text-[var(--accent)] transition-colors tracking-wide">
              TECHNOLOGY
            </button>
            <a href="/dataset" className="text-sm font-medium hover:text-[var(--accent)] transition-colors tracking-wide">
              DATASET
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/5 rounded"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-sm font-medium hover:text-[var(--accent)] transition-colors tracking-wide">
                HOME
              </button>
              <button onClick={() => scrollToSection('evidence')} className="block w-full text-left text-sm font-medium hover:text-[var(--accent)] transition-colors tracking-wide">
                EVIDENCE LAB
              </button>
              <button onClick={() => scrollToSection('investigation')} className="block w-full text-left text-sm font-medium hover:text-[var(--accent)] transition-colors tracking-wide">
                INVESTIGATION
              </button>
              <button onClick={() => scrollToSection('technology')} className="block w-full text-left text-sm font-medium hover:text-[var(--accent)] transition-colors tracking-wide">
                TECHNOLOGY
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedText
            text="AI-POWERED THREAT DETECTION"
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            speed={30}
          />
          <ScrollReveal delay={1500}>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-12 max-w-3xl mx-auto leading-relaxed">
              Advanced cyberbullying detection and cybercrime investigation platform powered by artificial intelligence
            </p>
          </ScrollReveal>
          <ScrollReveal delay={2000}>
            <button
              onClick={() => scrollToSection('evidence')}
              className="px-8 py-4 border-2 border-[var(--accent)] text-[var(--accent)] font-bold tracking-wider hover:bg-[var(--accent)] hover:text-black transition-all duration-300 text-sm"
            >
              [ START ANALYSIS ]
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Evidence Lab Section */}
      <section id="evidence" className="min-h-screen py-20 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">EVIDENCE LAB</h2>
            <p className="text-xl text-[var(--text-secondary)] mb-12">
              Analyze text and images for potential threats
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex items-center gap-2 bg-black border border-white/10 rounded-lg p-1 w-fit mb-8">
              <button
                onClick={() => setEvidenceMode('text')}
                className={`px-6 py-3 rounded-md text-sm font-bold transition-all tracking-wide ${evidenceMode === 'text'
                  ? 'bg-[var(--accent)] text-black'
                  : 'text-[var(--text-secondary)] hover:text-white'
                  }`}
              >
                TEXT INPUT
              </button>
              <button
                onClick={() => setEvidenceMode('ocr')}
                className={`px-6 py-3 rounded-md text-sm font-bold transition-all tracking-wide ${evidenceMode === 'ocr'
                  ? 'bg-[var(--accent)] text-black'
                  : 'text-[var(--text-secondary)] hover:text-white'
                  }`}
              >
                IMAGE OCR
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            {evidenceMode === 'text' ? (
              <TextAnalyzer onAnalysisComplete={handleEvidenceProcessed} />
            ) : (
              <OCRAnalyzer onAnalysisComplete={handleEvidenceProcessed} />
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Investigation Section */}
      <section id="investigation" className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">ACTIVE INVESTIGATION</h2>
                <p className="text-xl text-[var(--text-secondary)]">
                  AI-powered case analysis and recommendations
                </p>
              </div>
              {currentAnalysis && (
                <button
                  onClick={handleGenerateReport}
                  className="px-6 py-3 border-2 border-[var(--accent)] text-[var(--accent)] font-bold tracking-wider hover:bg-[var(--accent)] hover:text-black transition-all duration-300 text-sm flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  [ GENERATE REPORT ]
                </button>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            {!currentAnalysis ? (
              <div className="flex flex-col items-center justify-center h-96 border border-dashed border-white/10 rounded-lg">
                <FileSearch className="w-16 h-16 mb-4 opacity-20" />
                <h3 className="text-2xl font-bold text-[var(--text-secondary)] mb-2">NO ACTIVE CASE</h3>
                <p className="text-[var(--text-tertiary)]">
                  Upload evidence in the <button onClick={() => scrollToSection('evidence')} className="text-[var(--accent)] hover:underline">Evidence Lab</button> to start
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Case Summary */}
                <div className="bg-[var(--bg-card)] border border-white/10 rounded-lg p-8">
                  <h3 className="text-[var(--accent)] font-mono text-sm mb-6 tracking-wider">CASE_SUMMARY_V1</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <span className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider">Analysis Confidence</span>
                      <div className="text-4xl font-bold text-white mt-2">{currentAnalysis.confidenceScore}%</div>
                    </div>
                    <div>
                      <span className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider">Detected Patterns</span>
                      <div className="text-4xl font-bold text-white mt-2">{currentPatterns.length}</div>
                    </div>
                    <div>
                      <span className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider">Main Category</span>
                      <div className="text-4xl font-bold text-white mt-2">{currentPatterns[0]?.category || currentAnalysis.category}</div>
                    </div>
                  </div>
                </div>

                {/* Investigation Assistant */}
                <InvestigationAssistant
                  crimeAnalysis={{
                    detected: currentPatterns.length > 0 || currentAnalysis.toxicityScore > 50,
                    categories: currentPatterns.map(p => p.category),
                    severity: caseSeverity as unknown as Severity,
                    legalProvisions: currentPatterns.flatMap(p => p.legalReferences.map(r => ({ act: r.code, section: r.section, description: r.description }))),
                    investigationSteps: currentPatterns.flatMap(p => p.investigationSteps.map(s => ({
                      id: s.id,
                      action: s.action,
                      description: s.description,
                      priority: caseSeverity as unknown as Severity
                    }))),
                    matchedKeywords: currentAnalysis.matchedKeywords
                  }}
                />
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="min-h-screen py-20 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">HOW IT WORKS</h2>
            <p className="text-xl text-[var(--text-secondary)] mb-16">
              Three-phase AI-powered analysis system
            </p>
          </ScrollReveal>

          <div className="space-y-16">
            {/* Phase 1 */}
            <ScrollReveal delay={200}>
              <div className="flex items-start gap-8">
                <div className="text-6xl font-bold text-[var(--accent)] opacity-20">01</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">ANALYZE</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Advanced NLP algorithms scan text for toxicity, threats, harassment patterns, and fraud indicators. Our AI analyzes sentiment, context, and linguistic patterns to detect potential cybercrime.
                  </p>
                </div>
              </div>
              <div className="h-px bg-white/10 my-8"></div>
            </ScrollReveal>

            {/* Phase 2 */}
            <ScrollReveal delay={400}>
              <div className="flex items-start gap-8">
                <div className="text-6xl font-bold text-[var(--accent)] opacity-20">02</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">DETECT</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Pattern detection engine matches content against known crime categories including extortion, harassment, threats, fraud, identity theft, and child exploitation. Maps violations to legal frameworks (IT Act, IPC).
                  </p>
                </div>
              </div>
              <div className="h-px bg-white/10 my-8"></div>
            </ScrollReveal>

            {/* Phase 3 */}
            <ScrollReveal delay={600}>
              <div className="flex items-start gap-8">
                <div className="text-6xl font-bold text-[var(--accent)] opacity-20">03</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">REPORT</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Generates comprehensive investigation reports with legal references, recommended actions, evidence logs, and safety measures. Exports professional PDF documentation for law enforcement and legal proceedings.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-[var(--accent)] font-bold text-lg tracking-wider">
              <ShieldAlert className="w-5 h-5" />
              <span>CYBERSHIELD</span>
            </div>
            <div className="flex items-center gap-8 text-sm text-[var(--text-tertiary)]">
              <button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors">HOME</button>
              <button onClick={() => scrollToSection('evidence')} className="hover:text-white transition-colors">EVIDENCE LAB</button>
              <button onClick={() => scrollToSection('investigation')} className="hover:text-white transition-colors">INVESTIGATION</button>
              <button onClick={() => scrollToSection('technology')} className="hover:text-white transition-colors">TECHNOLOGY</button>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-[var(--text-tertiary)]">
            © 2026 CyberShield. AI-Powered Threat Detection Platform.
          </div>
        </div>
      </footer>
    </div>
  );
}
