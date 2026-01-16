export enum Severity {
    LOW = 'Low',
    MEDIUM = 'Medium',
    HIGH = 'High',
    CRITICAL = 'Critical'
}

export enum CrimeCategory {
    UNAUTHORIZED_ACCESS = 'Account Hacking / Unauthorized Access',
    EXTORTION = 'Extortion / Blackmail',
    HARASSMENT = 'Online Harassment',
    THREATS = 'Threats and Violence',
    FRAUD = 'Financial Fraud',
    IDENTITY_THEFT = 'Identity Theft',
    CHILD_EXPLOITATION = 'Child Exploitation'
}

export interface LegalReference {
    code: string;
    section: string;
    description: string;
}

// Alias for compatibility if needed, or separate interface
export interface LegalProvision {
    act: string;
    section: string;
    description: string;
}

export interface InvestigationStep {
    id: string; // e.g., 'step-1'
    action: string;
    description: string;
    requiredTools?: string[]; // e.g., 'IP Tracker', 'Email Header Analyzer'
    priority?: Severity; // Added to match Assistant usage
}

export interface CrimeAnalysisResult {
    detected: boolean;
    categories: CrimeCategory[]; // Changed to array to match component usage
    severity: Severity;
    legalProvisions: LegalProvision[];
    investigationSteps: InvestigationStep[];
    matchedKeywords: string[];
}

export interface CrimeMatch {
    category: string;
    confidence: number;
    severity: Severity;
    matchedKeywords: string[];
    legalReferences: LegalReference[];
    investigationSteps: InvestigationStep[];
    requiresImmediateEscalation: boolean;
}

interface PatternRule {
    id: string;
    name: string;
    keywords: string[];
    regex?: RegExp[];
    severity: Severity;
    legalReferences: LegalReference[];
    investigationSteps: InvestigationStep[];
}

// ... (Enums and Interfaces are already defined)

export class PatternDetector {
    private rules: PatternRule[] = [
        {
            id: 'unauthorized_access',
            name: CrimeCategory.UNAUTHORIZED_ACCESS,
            severity: Severity.HIGH,
            keywords: ['hacked', 'password stolen', 'unauthorized login', 'account compromise', 'suspicious activity', 'login alert', 'brute force', 'breach'],
            regex: [/password\s*stolen/i, /un-?authorized\s*access/i, /account\s*hack(ed|ing)/i],
            legalReferences: [
                { code: 'IT Act, 2000', section: 'Section 66', description: 'Computer Related Offences - Hacking' },
                { code: 'IT Act, 2000', section: 'Section 43', description: 'Penalty and compensation for damage to computer, computer system, etc.' }
            ],
            investigationSteps: [
                { id: 'ua-1', action: 'Secure Account', description: 'Immediately change passwords and enable 2FA if matched.' },
                { id: 'ua-2', action: 'Check Login Logs', description: 'Review account activity logs for IP addresses and device info.' },
                { id: 'ua-3', action: 'Email Header Analysis', description: 'If phishing was involved, analyze email headers.' }
            ]
        },
        {
            id: 'extortion',
            name: CrimeCategory.EXTORTION,
            severity: Severity.HIGH,
            keywords: ['blackmail', 'ransom', 'pay me', 'expose you', 'leak', 'threaten', 'sextortion'],
            regex: [/pay\s*me/i, /leak\s*(your\s*)?(photos|videos|chats)/i, /expose\s*(you|ur)/i, /distribute\s*(nudes|pics)/i],
            legalReferences: [
                { code: 'IPC', section: 'Section 383', description: 'Extortion' },
                { code: 'IPC', section: 'Section 503', description: 'Criminal Intimidation' },
                { code: 'IT Act, 2000', section: 'Section 66E', description: 'Violation of privacy' }
            ],
            investigationSteps: [
                { id: 'ex-1', action: 'Preserve Evidence', description: 'Take screenshots of all threats and demands. Do not delete messages.' },
                { id: 'ex-2', action: 'Profile Attacker', description: 'Gather social media profile URLs or phone numbers used for threats.' },
                { id: 'ex-3', action: 'Financial Trace', description: 'If payment demanded via crypto/bank, note down wallet/account details.' }
            ]
        },
        {
            id: 'harassment',
            name: CrimeCategory.HARASSMENT,
            severity: Severity.MEDIUM,
            keywords: ['harass', 'stalking', 'troll', 'abuse', 'hate speech', 'offensive', 'bullying', 'stupid', 'ugly', 'idiot', 'die'],
            regex: [/stop\s*posting/i, /you\s*are\s*(ugly|stupid|idiot)/i, /kill\s*yourself/i],
            legalReferences: [
                { code: 'IPC', section: 'Section 354D', description: 'Stalking' },
                { code: 'IT Act, 2000', section: 'Section 67', description: 'Publishing incidental material in electronic form' }
            ],
            investigationSteps: [
                { id: 'hr-1', action: 'Block and Report', description: 'Use platform reporting tools to block the user.' },
                { id: 'hr-2', action: 'Timeline Documentation', description: 'Create a timeline of harassment incidents.' },
                { id: 'hr-3', action: 'Identify Platform', description: 'Determine platform policies and relevant contact forms.' }
            ]
        },
        {
            id: 'threats',
            name: CrimeCategory.THREATS,
            severity: Severity.CRITICAL,
            keywords: ['kill you', 'hurt you', 'bomb', 'attack', 'murder', 'violence', 'beat you', 'physical harm'],
            regex: [/kill\s*(you|ur|him|her)/i, /break\s*(bones|legs)/i],
            legalReferences: [
                { code: 'IPC', section: 'Section 506', description: 'Punishment for criminal intimidation' }
            ],
            investigationSteps: [
                { id: 'th-1', action: 'Immediate Safety', description: 'Ensure physical safety. Contact local law enforcement immediately.' },
                { id: 'th-2', action: 'Preserve Communications', description: 'Save all threatening messages as evidence.' }
            ]
        },
        {
            id: 'financial_fraud',
            name: CrimeCategory.FRAUD,
            severity: Severity.HIGH,
            keywords: ['scam', 'fraud', 'bank transfer', 'up front payment', 'fake website', 'credit card', 'money lost', 'phishing', 'otp'],
            regex: [/send\s*money/i, /bank\s*details/i, /credit\s*card\s*number/i],
            legalReferences: [
                { code: 'IPC', section: 'Section 420', description: 'Cheating and dishonestly inducing delivery of property' },
                { code: 'IT Act, 2000', section: 'Section 66D', description: 'Punishment for cheating by personation by using computer resource' }
            ],
            investigationSteps: [
                { id: 'ff-1', action: 'Contact Bank', description: 'Call bank helpline to freeze accounts/cards immediately.' },
                { id: 'ff-2', action: 'Cyber Cell Report', description: 'File a complaint at cybercrime.gov.in.' },
                { id: 'ff-3', action: 'Transaction Details', description: 'Collect transaction IDs, screenshots, and bank statements.' }
            ]
        },
        {
            id: 'identity_theft',
            name: CrimeCategory.IDENTITY_THEFT,
            severity: Severity.HIGH,
            keywords: ['impersonation', 'fake profile', 'using my photos', 'pretending to be me', 'identity theft', 'fake account'],
            regex: [/fake\s*id/i, /my\s*photos/i],
            legalReferences: [
                { code: 'IT Act, 2000', section: 'Section 66C', description: 'Punishment for identity theft' },
                { code: 'IPC', section: 'Section 419', description: 'Punishment for cheating by personation' }
            ],
            investigationSteps: [
                { id: 'it-1', action: 'Report Impersonation', description: 'Report the fake profile to the platform provider.' },
                { id: 'it-2', action: 'Public Notice', description: 'Inform contacts not to engage with the fake profile.' },
                { id: 'it-3', action: 'Monitor Accounts', description: 'Check for unauthorized financial or social activity.' }
            ]
        },
        {
            id: 'child_exploitation',
            name: CrimeCategory.CHILD_EXPLOITATION,
            severity: Severity.CRITICAL,
            keywords: ['csa', 'minor', 'child pornography', 'grooming', 'underage', 'csam', 'sexual abuse of child'],
            regex: [/child\s*porn/i, /underage\s*sex/i],
            legalReferences: [
                { code: 'POCSO Act', section: 'Section 11', description: 'Sexual Harassment' },
                { code: 'IT Act, 2000', section: 'Section 67B', description: 'Punishment for publishing or transmitting material depicting children in sexually explicit act' }
            ],
            investigationSteps: [
                { id: 'ce-1', action: 'Emergency Escalation', description: 'IMMEDIATE REPORT REQUESTED. Contact NCMEC or local authorities.' },
                { id: 'ce-2', action: 'Do Not Share', description: 'Do not distribute or share the material even for evidence. Report original link only.' }
            ]
        }
    ];

    public detect(text: string): CrimeMatch[] {
        const normalizeText = text.toLowerCase();
        const matches: CrimeMatch[] = [];

        for (const rule of this.rules) {
            let matchedKeywords: string[] = [];
            let isMatch = false;

            // Check keywords
            matchedKeywords = rule.keywords.filter(keyword => normalizeText.includes(keyword));
            if (matchedKeywords.length > 0) isMatch = true;

            // Check Regex
            if (rule.regex) {
                for (const regex of rule.regex) {
                    if (regex.test(text)) {
                        isMatch = true;
                        // We can optionally add regex match indications here
                    }
                }
            }

            if (isMatch) {
                // Confidence logic
                let confidence = 0.5;
                if (matchedKeywords.length >= 2) confidence = 0.85;
                if (rule.regex && rule.regex.some(r => r.test(text))) confidence = Math.max(confidence, 0.9);

                matches.push({
                    category: rule.name,
                    confidence,
                    severity: rule.severity,
                    matchedKeywords,
                    legalReferences: rule.legalReferences,
                    investigationSteps: rule.investigationSteps,
                    requiresImmediateEscalation: rule.severity === Severity.CRITICAL
                });
            }
        }

        // Sort by confidence, then severity
        return matches.sort((a, b) => {
            if (b.confidence !== a.confidence) return b.confidence - a.confidence;
            // Map severity to weight
            const severityWeight: Record<Severity, number> = {
                [Severity.CRITICAL]: 4,
                [Severity.HIGH]: 3,
                [Severity.MEDIUM]: 2,
                [Severity.LOW]: 1
            };
            return severityWeight[b.severity] - severityWeight[a.severity];
        });
    }
}
