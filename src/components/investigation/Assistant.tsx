"use client";

import React, { useState } from 'react';
import { Severity } from '@/lib/crime/PatternDetector';
import {
    ShieldAlert,
    ShieldCheck,
    AlertTriangle,
    FileText,
    CheckCircle2,
    Circle,
    ChevronDown,
    ChevronUp,
    Lock,
    Smartphone,
    EyeOff,
    Ban
} from 'lucide-react';

export interface LegalProvision {
    act: string;
    section: string;
    description: string;
}

export interface InvestigationStep {
    id: string;
    action: string;
    description: string;
    priority: Severity;
}

export interface CrimeAnalysisResult {
    detected: boolean;
    categories: string[];
    severity: Severity;
    legalProvisions: LegalProvision[];
    investigationSteps: InvestigationStep[];
    matchedKeywords: string[];
}

interface AssistantProps {
    crimeAnalysis: CrimeAnalysisResult;
}

export function InvestigationAssistant({ crimeAnalysis }: AssistantProps) {
    const { severity, categories, investigationSteps, legalProvisions } = crimeAnalysis;
    const [completedSteps, setCompletedSteps] = useState<string[]>([]);
    const [safetyChecklist, setSafetyChecklist] = useState({
        passwords: false,
        twoFactor: false,
        evidence: false,
        blocking: false
    });
    const [isLegalExpanded, setIsLegalExpanded] = useState(false);

    const toggleStep = (id: string) => {
        setCompletedSteps(prev =>
            prev.includes(id) ? prev.filter(stepId => stepId !== id) : [...prev, id]
        );
    };

    const toggleSafetyItem = (key: keyof typeof safetyChecklist) => {
        setSafetyChecklist(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const getSeverityColor = (sev: Severity) => {
        switch (sev) {
            case Severity.CRITICAL: return 'bg-red-500 text-white';
            case Severity.HIGH: return 'bg-orange-500 text-white';
            case Severity.MEDIUM: return 'bg-yellow-500 text-white';
            case Severity.LOW: return 'bg-blue-500 text-white';
            default: return 'bg-gray-500 text-white';
        }
    };

    const getSeverityBadgeColor = (sev: Severity) => {
        switch (sev) {
            case Severity.CRITICAL: return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800';
            case Severity.HIGH: return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800';
            case Severity.MEDIUM: return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800';
            case Severity.LOW: return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 border-gray-200 dark:border-gray-800';
        }
    };

    const calculateProgress = () => {
        const totalSafety = Object.keys(safetyChecklist).length;
        const completeSafety = Object.values(safetyChecklist).filter(Boolean).length;

        const totalInvest = investigationSteps.length;
        const completeInvest = completedSteps.length;

        if (totalSafety + totalInvest === 0) return 0;
        return Math.round(((completeSafety + completeInvest) / (totalSafety + totalInvest)) * 100);
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header Area */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Investigation Assistant</h2>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityBadgeColor(severity)}`}>
                                {severity} Severity
                            </span>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            Detected: {categories.map(c => c).join(', ') || 'Processing...'}
                        </p>
                    </div>
                    <div className="flex items-center gap-4 bg-zinc-50 dark:bg-zinc-950 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800">
                        <div className="flex flex-col">
                            <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Progress</span>
                            <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{calculateProgress()}%</span>
                        </div>
                        <div className="w-16 h-16 relative flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle
                                    className="text-zinc-200 dark:text-zinc-800"
                                    strokeWidth="6"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="28"
                                    cx="32"
                                    cy="32"
                                />
                                <circle
                                    className="text-blue-600 dark:text-blue-500 transition-all duration-1000 ease-out"
                                    strokeWidth="6"
                                    strokeDasharray={175.93}
                                    strokeDashoffset={175.93 - (calculateProgress() / 100) * 175.93}
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="28"
                                    cx="32"
                                    cy="32"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Immediate Safety Checklist */}
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400">
                            <ShieldAlert className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Immediate Safety Actions</h3>
                    </div>

                    <div className="space-y-3">
                        <SafetyItem
                            label="Change Passwords"
                            sublabel="Update passwords for all compromised accounts."
                            icon={<Lock className="w-4 h-4" />}
                            checked={safetyChecklist.passwords}
                            onChange={() => toggleSafetyItem('passwords')}
                        />
                        <SafetyItem
                            label="Enable 2FA"
                            sublabel="Turn on Two-Factor Authentication immediately."
                            icon={<Smartphone className="w-4 h-4" />}
                            checked={safetyChecklist.twoFactor}
                            onChange={() => toggleSafetyItem('twoFactor')}
                        />
                        <SafetyItem
                            label="Preserve Evidence"
                            sublabel="Do not delete messages. Take screenshots."
                            icon={<EyeOff className="w-4 h-4" />}
                            checked={safetyChecklist.evidence}
                            onChange={() => toggleSafetyItem('evidence')}
                        />
                        <SafetyItem
                            label="Block Contacts"
                            sublabel="Block and report the perpetrator."
                            icon={<Ban className="w-4 h-4" />}
                            checked={safetyChecklist.blocking}
                            onChange={() => toggleSafetyItem('blocking')}
                        />
                    </div>
                </div>

                {/* Legal Guidance */}
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                            <FileText className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Legal Guidance</h3>
                    </div>

                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        {legalProvisions.length > 0 ? (
                            <div className="space-y-4">
                                {legalProvisions.map((provision, idx) => (
                                    <div key={idx} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="font-bold text-zinc-900 dark:text-zinc-50 text-sm">{provision.act}</span>
                                            <span className="text-xs font-mono bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded text-zinc-600 dark:text-zinc-400">{provision.section}</span>
                                        </div>
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            {provision.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-zinc-500 text-sm text-center">
                                <FileText className="w-8 h-8 mb-2 opacity-50" />
                                <p>No specific legal provisions detected yet.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Investigation Steps */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                        <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Recommended Actions</h3>
                </div>

                <div className="space-y-3">
                    {investigationSteps.length > 0 ? (
                        investigationSteps.map((step) => (
                            <div
                                key={step.id}
                                onClick={() => toggleStep(step.id)}
                                className={`
                                    group flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer
                                    ${completedSteps.includes(step.id)
                                        ? 'bg-green-50/50 dark:bg-green-900/10 border-green-200 dark:border-green-800/50'
                                        : 'bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 border-zinc-200 dark:border-zinc-800'
                                    }
                                `}
                            >
                                <div className={`mt-1 transition-colors ${completedSteps.includes(step.id) ? 'text-green-600 dark:text-green-500' : 'text-zinc-300 dark:text-zinc-700 group-hover:text-zinc-400'}`}>
                                    {completedSteps.includes(step.id) ? (
                                        <CheckCircle2 className="w-5 h-5" />
                                    ) : (
                                        <Circle className="w-5 h-5" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className={`font-medium ${completedSteps.includes(step.id) ? 'text-green-900 dark:text-green-100 line-through opacity-70' : 'text-zinc-900 dark:text-zinc-50'}`}>
                                            {step.action}
                                        </h4>
                                        {step.priority === Severity.CRITICAL && (
                                            <span className="text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-700 px-2 py-0.5 rounded-full dark:bg-red-900/50 dark:text-red-300">
                                                Critical
                                            </span>
                                        )}
                                    </div>
                                    <p className={`text-sm ${completedSteps.includes(step.id) ? 'text-green-700/70 dark:text-green-200/50' : 'text-zinc-500 dark:text-zinc-400'}`}>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-zinc-500 italic text-center py-8">Action items will appear here based on the analysis.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

function SafetyItem({ label, sublabel, icon, checked, onChange }: {
    label: string,
    sublabel: string,
    icon: React.ReactNode,
    checked: boolean,
    onChange: () => void
}) {
    return (
        <div
            onClick={onChange}
            className={`
                flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all
                ${checked
                    ? 'bg-blue-50/50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800/50'
                    : 'bg-zinc-50 dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-900 border-transparent'
                }
            `}
        >
            <div className={`p-2 rounded-lg ${checked ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-white dark:bg-zinc-900 text-zinc-400 dark:text-zinc-600 shadow-sm'}`}>
                {icon}
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <p className={`font-medium text-sm ${checked ? 'text-blue-900 dark:text-blue-100' : 'text-zinc-900 dark:text-zinc-50'}`}>{label}</p>
                    {checked && <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                </div>
                <p className={`text-xs ${checked ? 'text-blue-700/70 dark:text-blue-300/70' : 'text-zinc-500 dark:text-zinc-500'}`}>{sublabel}</p>
            </div>
        </div>
    );
}
