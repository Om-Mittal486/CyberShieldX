(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Piyush/src/components/ui/AnimatedText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function AnimatedText({ text, className = '', delay = 0, speed = 50 }) {
    _s();
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedText.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "AnimatedText.useEffect": ([entry])=>{
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                    }
                }
            }["AnimatedText.useEffect"], {
                threshold: 0.1
            });
            if (elementRef.current) {
                observer.observe(elementRef.current);
            }
            return ({
                "AnimatedText.useEffect": ()=>observer.disconnect()
            })["AnimatedText.useEffect"];
        }
    }["AnimatedText.useEffect"], [
        isVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedText.useEffect": ()=>{
            if (!isVisible) return;
            const timeout = setTimeout({
                "AnimatedText.useEffect.timeout": ()=>{
                    let currentIndex = 0;
                    const interval = setInterval({
                        "AnimatedText.useEffect.timeout.interval": ()=>{
                            if (currentIndex <= text.length) {
                                setDisplayedText(text.slice(0, currentIndex));
                                currentIndex++;
                            } else {
                                clearInterval(interval);
                            }
                        }
                    }["AnimatedText.useEffect.timeout.interval"], speed);
                    return ({
                        "AnimatedText.useEffect.timeout": ()=>clearInterval(interval)
                    })["AnimatedText.useEffect.timeout"];
                }
            }["AnimatedText.useEffect.timeout"], delay);
            return ({
                "AnimatedText.useEffect": ()=>clearTimeout(timeout)
            })["AnimatedText.useEffect"];
        }
    }["AnimatedText.useEffect"], [
        isVisible,
        text,
        delay,
        speed
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: elementRef,
        className: className,
        children: [
            displayedText,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "animate-pulse",
                children: "|"
            }, void 0, false, {
                fileName: "[project]/Piyush/src/components/ui/AnimatedText.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Piyush/src/components/ui/AnimatedText.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, this);
}
_s(AnimatedText, "hn+gUg/O2+sX9ORP9YIRl0mlv8s=");
_c = AnimatedText;
var _c;
__turbopack_context__.k.register(_c, "AnimatedText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Piyush/src/components/ui/ScrollReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ScrollReveal({ children, className = '', delay = 0 }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollReveal.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "ScrollReveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setTimeout({
                            "ScrollReveal.useEffect": ()=>setIsVisible(true)
                        }["ScrollReveal.useEffect"], delay);
                    }
                }
            }["ScrollReveal.useEffect"], {
                threshold: 0.1
            });
            if (elementRef.current) {
                observer.observe(elementRef.current);
            }
            return ({
                "ScrollReveal.useEffect": ()=>observer.disconnect()
            })["ScrollReveal.useEffect"];
        }
    }["ScrollReveal.useEffect"], [
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: elementRef,
        className: `transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/Piyush/src/components/ui/ScrollReveal.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_s(ScrollReveal, "ars/gJ7qRrRI4qdM8DRo1FWAkKE=");
_c = ScrollReveal;
var _c;
__turbopack_context__.k.register(_c, "ScrollReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Piyush/src/lib/analyzer/MessageAnalyzer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageAnalyzer",
    ()=>MessageAnalyzer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Piyush/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
;
class MessageAnalyzer {
    cache;
    dataset = [];
    datasetLoaded = false;
    // Keyword dictionaries (enhanced from dataset)
    threats = [
        'kill',
        'murder',
        'hurt',
        'attack',
        'bomb',
        'shoot',
        'stab',
        'die',
        'burn',
        'destroy',
        'threat',
        'coming for you',
        'regret'
    ];
    harassment = [
        'stupid',
        'idiot',
        'ugly',
        'fat',
        'hate',
        'trash',
        'failure',
        'useless',
        'disgusting',
        'creepy',
        'worthless',
        'pathetic'
    ];
    fraud = [
        'bank',
        'account',
        'password',
        'credit card',
        'transfer',
        'money',
        'urgent',
        'winner',
        'lottery',
        'otp',
        'verify',
        'kyc',
        'upi'
    ];
    // Basic sentiment dictionaries
    positiveWords = [
        'good',
        'great',
        'awesome',
        'nice',
        'happy',
        'love',
        'excellent',
        'best',
        'wonderful',
        'safe'
    ];
    negativeWords = [
        'bad',
        'terrible',
        'awful',
        'sad',
        'hate',
        'worst',
        'horrible',
        'dangerous',
        'fail',
        'poor'
    ];
    constructor(){
        this.cache = new Map();
        this.loadDataset();
    }
    /**
     * Load dataset from CSV file
     */ async loadDataset() {
        if (this.datasetLoaded) return;
        try {
            const response = await fetch('/data/cybershieldx_dataset.csv');
            const csvText = await response.text();
            __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: (results)=>{
                    this.dataset = results.data;
                    this.datasetLoaded = true;
                    console.log(`✅ Dataset loaded: ${this.dataset.length} examples`);
                },
                error: (error)=>{
                    console.error('❌ Error loading dataset:', error);
                }
            });
        } catch (error) {
            console.error('❌ Failed to fetch dataset:', error);
        }
    }
    /**
     * Main entry point for message analysis
     */ async analyze(message) {
        if (!message || message.trim().length === 0) {
            return this.createEmptyResult();
        }
        const cacheKey = this.getCacheKey(message);
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }
        // Wait for dataset to load if not already loaded
        if (!this.datasetLoaded) {
            await this.waitForDataset();
        }
        // Find similar examples from dataset
        const similarExamples = this.findSimilarMessages(message);
        const sentimentResult = this.simpleSentimentAnalysis(message);
        const keywords = this.detectKeywords(message);
        // Enhanced scoring using dataset
        const toxicityScore = this.calculateEnhancedToxicityScore(message, keywords, sentimentResult, similarExamples);
        const category = this.determineCategory(toxicityScore, keywords);
        const result = {
            category,
            toxicityScore,
            confidenceScore: this.calculateConfidence(message, keywords, similarExamples),
            matchedKeywords: keywords.all,
            summary: this.generateSummary(category, keywords.all, sentimentResult.score, similarExamples),
            similarExamples: similarExamples.slice(0, 3),
            sentiment: {
                score: sentimentResult.score,
                comparative: sentimentResult.comparative,
                tokens: sentimentResult.tokens,
                words: sentimentResult.words,
                positive: sentimentResult.positive,
                negative: sentimentResult.negative
            }
        };
        // Enhanced crime pattern detection using dataset
        if (category === 'high-risk' || category === 'harassment') {
            result.crimePattern = this.detectCrimePatternFromDataset(keywords, similarExamples);
        }
        this.cache.set(cacheKey, result);
        return result;
    }
    /**
     * Wait for dataset to load
     */ async waitForDataset(maxWait = 3000) {
        const startTime = Date.now();
        while(!this.datasetLoaded && Date.now() - startTime < maxWait){
            await new Promise((resolve)=>setTimeout(resolve, 100));
        }
    }
    /**
     * Find similar messages in dataset using keyword matching and text similarity
     */ findSimilarMessages(message) {
        if (!this.datasetLoaded || this.dataset.length === 0) {
            return [];
        }
        const messageLower = message.toLowerCase();
        const messageWords = new Set(messageLower.split(/\s+/));
        const similarities = this.dataset.map((row)=>{
            const rowWords = new Set(row.message_text.toLowerCase().split(/\s+/));
            const intersection = new Set([
                ...messageWords
            ].filter((x)=>rowWords.has(x)));
            const union = new Set([
                ...messageWords,
                ...rowWords
            ]);
            const similarity = intersection.size / union.size; // Jaccard similarity
            return {
                message: row.message_text,
                toxicity_label: row.toxicity_label,
                crime_type: row.crime_type || 'None',
                similarity: similarity * 100
            };
        });
        // Sort by similarity and return top matches
        return similarities.filter((s)=>s.similarity > 10) // At least 10% similarity
        .sort((a, b)=>b.similarity - a.similarity).slice(0, 5);
    }
    /**
     * Enhanced toxicity scoring using dataset examples
     */ calculateEnhancedToxicityScore(message, keywords, sentiment, similarExamples) {
        let score = 0;
        // Base score from keywords
        score += keywords.threats.length * 30;
        score += keywords.harassment.length * 15;
        score += keywords.fraud.length * 20;
        // Adjust based on sentiment
        if (sentiment.score < 0) {
            score += Math.abs(sentiment.score) * 2;
        }
        // Boost score if similar high-risk examples found in dataset
        if (similarExamples.length > 0) {
            const avgSimilarity = similarExamples.reduce((sum, ex)=>sum + ex.similarity, 0) / similarExamples.length;
            const highRiskCount = similarExamples.filter((ex)=>ex.toxicity_label.includes('High-Risk') || ex.toxicity_label.includes('Threat')).length;
            if (highRiskCount > 0) {
                score += avgSimilarity * 0.5; // Add up to 50 points based on similarity
            }
        }
        // Cap at 100
        return Math.min(100, Math.max(0, score));
    }
    /**
     * Detect crime pattern using dataset information
     */ detectCrimePatternFromDataset(keywords, similarExamples) {
        // Use dataset examples to determine crime type
        if (similarExamples.length > 0 && similarExamples[0].crime_type !== 'None') {
            const topExample = similarExamples[0];
            let severity = 'medium';
            if (topExample.toxicity_label.includes('High-Risk') || topExample.toxicity_label.includes('Critical')) {
                severity = 'critical';
            } else if (topExample.toxicity_label.includes('Harassment')) {
                severity = 'high';
            } else if (topExample.toxicity_label.includes('Mild')) {
                severity = 'low';
            }
            return {
                type: topExample.crime_type,
                description: `Message matches patterns similar to ${topExample.crime_type} cases in our database.`,
                severity,
                confidence: Math.round(topExample.similarity)
            };
        }
        // Fallback to keyword-based detection
        if (keywords.threats.length > 0) {
            return {
                type: 'Criminal Threat',
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
                type: 'Online Harassment',
                description: 'Message contains harassing language.',
                severity: 'medium',
                confidence: 75
            };
        }
        return undefined;
    }
    getCacheKey(message) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(message).toString('base64');
    }
    createEmptyResult() {
        return {
            category: 'safe',
            toxicityScore: 0,
            confidenceScore: 0,
            matchedKeywords: [],
            summary: 'Message is empty.'
        };
    }
    detectKeywords(message) {
        const lowerMsg = message.toLowerCase();
        const matchedThreats = this.threats.filter((w)=>lowerMsg.includes(w));
        const matchedHarassment = this.harassment.filter((w)=>lowerMsg.includes(w));
        const matchedFraud = this.fraud.filter((w)=>lowerMsg.includes(w));
        return {
            threats: matchedThreats,
            harassment: matchedHarassment,
            fraud: matchedFraud,
            all: [
                ...matchedThreats,
                ...matchedHarassment,
                ...matchedFraud
            ]
        };
    }
    simpleSentimentAnalysis(message) {
        const tokens = message.toLowerCase().split(/\s+/);
        const positive = tokens.filter((t)=>this.positiveWords.includes(t));
        const negative = tokens.filter((t)=>this.negativeWords.includes(t));
        const score = positive.length - negative.length;
        return {
            score,
            comparative: score / tokens.length,
            tokens,
            words: [
                ...positive,
                ...negative
            ],
            positive,
            negative
        };
    }
    determineCategory(score, keywords) {
        if (keywords.threats.length > 0) return 'high-risk';
        if (keywords.fraud.length > 0) return 'high-risk';
        if (score > 60) return 'high-risk';
        if (score > 30) return 'harassment';
        if (score > 10) return 'mild';
        return 'safe';
    }
    calculateConfidence(message, keywords, similarExamples) {
        let confidence = 70; // Base confidence
        if (keywords.all.length > 0) confidence += 10;
        if (message.length > 20) confidence += 10;
        if (message.length < 5) confidence -= 20;
        // Boost confidence if we found similar examples in dataset
        if (similarExamples.length > 0) {
            confidence += Math.min(15, similarExamples[0].similarity / 5);
        }
        return Math.min(100, Math.max(0, confidence));
    }
    generateSummary(category, keywords, sentimentScore, similarExamples) {
        const sentimentDesc = sentimentScore < 0 ? 'negative' : sentimentScore > 0 ? 'positive' : 'neutral';
        if (category === 'safe') {
            return `The message appears safe with ${sentimentDesc} sentiment.`;
        }
        let summary = `Detected ${category} content. Found keywords: ${keywords.join(', ') || 'None'}. Sentiment is ${sentimentDesc}.`;
        if (similarExamples.length > 0) {
            summary += ` This message is ${Math.round(similarExamples[0].similarity)}% similar to known ${similarExamples[0].toxicity_label} cases in our database.`;
        }
        return summary;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Piyush/src/lib/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Piyush/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://placeholder.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "placeholder-anon-key-for-development");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OCRAnalyzer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/react-dropzone/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$tesseract$2e$js$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/node_modules/tesseract.js/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$analyzer$2f$MessageAnalyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/src/lib/analyzer/MessageAnalyzer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/src/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function OCRAnalyzer({ onAnalysisComplete }) {
    _s();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ocrResult, setOcrResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [analysis, setAnalysis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saveStatus, setSaveStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const onDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OCRAnalyzer.useCallback[onDrop]": (acceptedFiles)=>{
            const selectedFile = acceptedFiles[0];
            if (selectedFile) {
                setFile(selectedFile);
                setPreview(URL.createObjectURL(selectedFile));
                setOcrResult(null);
                setAnalysis(null);
                setSaveStatus('idle');
                processImage(selectedFile);
            }
        }
    }["OCRAnalyzer.useCallback[onDrop]"], []);
    const { getRootProps, getInputProps, isDragActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"])({
        onDrop,
        accept: {
            'image/*': [
                '.png',
                '.jpg',
                '.jpeg',
                '.bmp'
            ]
        },
        maxFiles: 1
    });
    const processImage = async (imageFile)=>{
        setIsProcessing(true);
        setOcrResult(null);
        setAnalysis(null);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$tesseract$2e$js$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].recognize(imageFile, 'eng', {
                logger: (m)=>{
                    if (m.status === 'recognizing text') {
                        setOcrResult((prev)=>({
                                text: prev?.text || '',
                                confidence: prev?.confidence || 0,
                                progress: m.progress,
                                status: m.status
                            }));
                    }
                }
            });
            const text = result.data.text;
            const confidence = result.data.confidence;
            setOcrResult({
                text,
                confidence,
                progress: 1,
                status: 'completed'
            });
            // Analyze extracted text
            const analyzer = new __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$analyzer$2f$MessageAnalyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageAnalyzer"]();
            const analysisResult = await analyzer.analyze(text);
            setAnalysis(analysisResult);
            if (onAnalysisComplete) {
                // Create a temporary evidence item for the parent to display/use
                const tempEvidence = {
                    id: `temp-${Date.now()}`,
                    type: 'image',
                    url: URL.createObjectURL(imageFile),
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
                onAnalysisComplete(text, [
                    tempEvidence
                ]);
            }
        } catch (error) {
            console.error('OCR Error:', error);
            setOcrResult({
                text: 'Error processing image',
                confidence: 0,
                progress: 0,
                status: 'error'
            });
        } finally{
            setIsProcessing(false);
        }
    };
    const handleClear = ()=>{
        setFile(null);
        setPreview(null);
        setOcrResult(null);
        setAnalysis(null);
        setSaveStatus('idle');
    };
    const handleSave = async ()=>{
        if (!file || !ocrResult || !analysis) return;
        setIsSaving(true);
        try {
            // 1. Upload image to Storage
            const fileName = `${Date.now()}_${file.name}`;
            const { data: uploadData, error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('evidence').upload(fileName, file);
            if (uploadError) throw uploadError;
            // 2. Get Public URL
            const { data: { publicUrl } } = __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('evidence').getPublicUrl(fileName);
            // 3. Save Evidence Record
            const evidenceData = {
                type: 'image',
                url: publicUrl,
                filename: fileName,
                fileSize: file.size,
                mimeType: file.type,
                metadata: {
                    width: 0,
                    height: 0,
                    extractedText: ocrResult.text,
                    ocrConfidence: ocrResult.confidence
                },
                analysis: analysis,
                createdAt: new Date().toISOString()
            };
            const { error: dbError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('evidence').insert([
                evidenceData
            ]);
            if (dbError) throw dbError;
            setSaveStatus('success');
            setTimeout(()=>setSaveStatus('idle'), 3000);
        } catch (error) {
            console.error('Save Error:', error);
            setSaveStatus('error');
        } finally{
            setIsSaving(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto p-6 space-y-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-b border-gray-100 bg-gray-50/50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold flex items-center gap-2 text-gray-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                    className: "w-6 h-6 text-blue-600"
                                }, void 0, false, {
                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                    lineNumber: 179,
                                    columnNumber: 25
                                }, this),
                                "Evidence Analyzer"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                            lineNumber: 178,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 mt-1",
                            children: "Extract text from screenshots and analyze for toxic content using client-side OCR."
                        }, void 0, false, {
                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                            lineNumber: 182,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                    lineNumber: 177,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-8",
                    children: [
                        !file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ...getRootProps(),
                            className: `border-2 border-dashed rounded-xl p-12 flex flex-col items-center justify-center cursor-pointer transition-all duration-200
                ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ...getInputProps()
                                }, void 0, false, {
                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                    lineNumber: 195,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "w-8 h-8 text-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                        lineNumber: 197,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                    lineNumber: 196,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-medium text-gray-700",
                                    children: "Drop your screenshot here"
                                }, void 0, false, {
                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                    lineNumber: 199,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400 mt-2",
                                    children: "Supports JPG, PNG, BMP"
                                }, void 0, false, {
                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                    lineNumber: 200,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                            lineNumber: 190,
                            columnNumber: 25
                        }, this),
                        file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-gray-700",
                                                    children: "Evidence Preview"
                                                }, void 0, false, {
                                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleClear,
                                                    className: "text-sm text-red-500 hover:text-red-600 flex items-center gap-1 px-2 py-1 rounded hover:bg-red-50 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 41
                                                        }, this),
                                                        " Clear"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                            lineNumber: 209,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative rounded-lg overflow-hidden border border-gray-200 bg-gray-900 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: preview,
                                                    alt: "Evidence",
                                                    className: "w-full h-auto object-contain max-h-[500px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 37
                                                }, this),
                                                isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white backdrop-blur-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "w-8 h-8 animate-spin mb-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: "Extracting Text..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 45
                                                        }, this),
                                                        ocrResult?.progress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-48 h-2 bg-gray-700 rounded-full mt-4 overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-full bg-blue-500 transition-all duration-300",
                                                                style: {
                                                                    width: `${Math.round(ocrResult.progress * 100)}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 53
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                            lineNumber: 219,
                                            columnNumber: 33
                                        }, this),
                                        ocrResult?.status === 'completed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between text-sm text-gray-500 bg-gray-50 p-2 rounded-lg border border-gray-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 45
                                                        }, this),
                                                        file.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Confidence: ",
                                                        Math.round(ocrResult.confidence),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                            lineNumber: 240,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                    lineNumber: 208,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-gray-700 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "w-4 h-4 text-blue-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 41
                                                        }, this),
                                                        "Extracted Content"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 rounded-lg p-4 h-48 overflow-y-auto text-sm border border-gray-100",
                                                    children: ocrResult?.text ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "whitespace-pre-wrap text-gray-700",
                                                        children: ocrResult.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 45
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-400 italic",
                                                        children: "No text extracted yet..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                            lineNumber: 255,
                                            columnNumber: 33
                                        }, this),
                                        analysis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 animate-in fade-in duration-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-gray-700 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                            className: "w-4 h-4 text-orange-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 45
                                                        }, this),
                                                        "Risk Analysis"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-4 rounded-xl border ${analysis.category === 'safe' ? 'bg-green-50 border-green-100' : analysis.category === 'mild' ? 'bg-yellow-50 border-yellow-100' : 'bg-red-50 border-red-100'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-start mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize
                            ${analysis.category === 'safe' ? 'bg-green-100 text-green-700' : analysis.category === 'mild' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`,
                                                                    children: analysis.category
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                                    lineNumber: 282,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-mono text-gray-500",
                                                                    children: [
                                                                        "Score: ",
                                                                        analysis.toxicityScore,
                                                                        "/100"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                                    lineNumber: 288,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                            lineNumber: 281,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-700 font-medium",
                                                            children: analysis.summary
                                                        }, void 0, false, {
                                                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 41
                                                }, this),
                                                analysis.matchedKeywords && analysis.matchedKeywords.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                            children: "Detected Keywords"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2 flex-wrap mt-2",
                                                            children: analysis.matchedKeywords.map((keyword, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-2 py-1 bg-red-50 text-red-600 text-xs rounded border border-red-100",
                                                                    children: keyword
                                                                }, i, false, {
                                                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                                    lineNumber: 302,
                                                                    columnNumber: 57
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                            lineNumber: 271,
                                            columnNumber: 37
                                        }, this),
                                        analysis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSave,
                                            disabled: isSaving || saveStatus === 'success',
                                            className: `w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all
                      ${saveStatus === 'success' ? 'bg-green-500 text-white' : 'bg-gray-900 text-white hover:bg-black active:scale-[0.98]'} disabled:opacity-70 disabled:cursor-not-allowed`,
                                            children: isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-5 h-5 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                lineNumber: 324,
                                                columnNumber: 45
                                            }, this) : saveStatus === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 49
                                                    }, this),
                                                    " Saved to Vault"
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 49
                                                    }, this),
                                                    " Save Evidence"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                            lineNumber: 314,
                                            columnNumber: 37
                                        }, this),
                                        saveStatus === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-red-500 text-center",
                                            children: "Failed to save evidence. Check your connection or API keys."
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                            lineNumber: 338,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                                    lineNumber: 253,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                            lineNumber: 206,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
                    lineNumber: 187,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
            lineNumber: 176,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx",
        lineNumber: 175,
        columnNumber: 9
    }, this);
}
_s(OCRAnalyzer, "63Fxh3k/I6eyEPn0ZwtdFQ55kJU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"]
    ];
});
_c = OCRAnalyzer;
var _c;
__turbopack_context__.k.register(_c, "OCRAnalyzer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Piyush/src/lib/crime/PatternDetector.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CrimeCategory",
    ()=>CrimeCategory,
    "PatternDetector",
    ()=>PatternDetector,
    "Severity",
    ()=>Severity
]);
var Severity = /*#__PURE__*/ function(Severity) {
    Severity["LOW"] = "Low";
    Severity["MEDIUM"] = "Medium";
    Severity["HIGH"] = "High";
    Severity["CRITICAL"] = "Critical";
    return Severity;
}({});
var CrimeCategory = /*#__PURE__*/ function(CrimeCategory) {
    CrimeCategory["UNAUTHORIZED_ACCESS"] = "Account Hacking / Unauthorized Access";
    CrimeCategory["EXTORTION"] = "Extortion / Blackmail";
    CrimeCategory["HARASSMENT"] = "Online Harassment";
    CrimeCategory["THREATS"] = "Threats and Violence";
    CrimeCategory["FRAUD"] = "Financial Fraud";
    CrimeCategory["IDENTITY_THEFT"] = "Identity Theft";
    CrimeCategory["CHILD_EXPLOITATION"] = "Child Exploitation";
    return CrimeCategory;
}({});
class PatternDetector {
    rules = [
        {
            id: 'unauthorized_access',
            name: "Account Hacking / Unauthorized Access",
            severity: "High",
            keywords: [
                'hacked',
                'password stolen',
                'unauthorized login',
                'account compromise',
                'suspicious activity',
                'login alert',
                'brute force',
                'breach'
            ],
            regex: [
                /password\s*stolen/i,
                /un-?authorized\s*access/i,
                /account\s*hack(ed|ing)/i
            ],
            legalReferences: [
                {
                    code: 'IT Act, 2000',
                    section: 'Section 66',
                    description: 'Computer Related Offences - Hacking'
                },
                {
                    code: 'IT Act, 2000',
                    section: 'Section 43',
                    description: 'Penalty and compensation for damage to computer, computer system, etc.'
                }
            ],
            investigationSteps: [
                {
                    id: 'ua-1',
                    action: 'Secure Account',
                    description: 'Immediately change passwords and enable 2FA if matched.'
                },
                {
                    id: 'ua-2',
                    action: 'Check Login Logs',
                    description: 'Review account activity logs for IP addresses and device info.'
                },
                {
                    id: 'ua-3',
                    action: 'Email Header Analysis',
                    description: 'If phishing was involved, analyze email headers.'
                }
            ]
        },
        {
            id: 'extortion',
            name: "Extortion / Blackmail",
            severity: "High",
            keywords: [
                'blackmail',
                'ransom',
                'pay me',
                'expose you',
                'leak',
                'threaten',
                'sextortion'
            ],
            regex: [
                /pay\s*me/i,
                /leak\s*(your\s*)?(photos|videos|chats)/i,
                /expose\s*(you|ur)/i,
                /distribute\s*(nudes|pics)/i
            ],
            legalReferences: [
                {
                    code: 'IPC',
                    section: 'Section 383',
                    description: 'Extortion'
                },
                {
                    code: 'IPC',
                    section: 'Section 503',
                    description: 'Criminal Intimidation'
                },
                {
                    code: 'IT Act, 2000',
                    section: 'Section 66E',
                    description: 'Violation of privacy'
                }
            ],
            investigationSteps: [
                {
                    id: 'ex-1',
                    action: 'Preserve Evidence',
                    description: 'Take screenshots of all threats and demands. Do not delete messages.'
                },
                {
                    id: 'ex-2',
                    action: 'Profile Attacker',
                    description: 'Gather social media profile URLs or phone numbers used for threats.'
                },
                {
                    id: 'ex-3',
                    action: 'Financial Trace',
                    description: 'If payment demanded via crypto/bank, note down wallet/account details.'
                }
            ]
        },
        {
            id: 'harassment',
            name: "Online Harassment",
            severity: "Medium",
            keywords: [
                'harass',
                'stalking',
                'troll',
                'abuse',
                'hate speech',
                'offensive',
                'bullying',
                'stupid',
                'ugly',
                'idiot',
                'die'
            ],
            regex: [
                /stop\s*posting/i,
                /you\s*are\s*(ugly|stupid|idiot)/i,
                /kill\s*yourself/i
            ],
            legalReferences: [
                {
                    code: 'IPC',
                    section: 'Section 354D',
                    description: 'Stalking'
                },
                {
                    code: 'IT Act, 2000',
                    section: 'Section 67',
                    description: 'Publishing incidental material in electronic form'
                }
            ],
            investigationSteps: [
                {
                    id: 'hr-1',
                    action: 'Block and Report',
                    description: 'Use platform reporting tools to block the user.'
                },
                {
                    id: 'hr-2',
                    action: 'Timeline Documentation',
                    description: 'Create a timeline of harassment incidents.'
                },
                {
                    id: 'hr-3',
                    action: 'Identify Platform',
                    description: 'Determine platform policies and relevant contact forms.'
                }
            ]
        },
        {
            id: 'threats',
            name: "Threats and Violence",
            severity: "Critical",
            keywords: [
                'kill you',
                'hurt you',
                'bomb',
                'attack',
                'murder',
                'violence',
                'beat you',
                'physical harm'
            ],
            regex: [
                /kill\s*(you|ur|him|her)/i,
                /break\s*(bones|legs)/i
            ],
            legalReferences: [
                {
                    code: 'IPC',
                    section: 'Section 506',
                    description: 'Punishment for criminal intimidation'
                }
            ],
            investigationSteps: [
                {
                    id: 'th-1',
                    action: 'Immediate Safety',
                    description: 'Ensure physical safety. Contact local law enforcement immediately.'
                },
                {
                    id: 'th-2',
                    action: 'Preserve Communications',
                    description: 'Save all threatening messages as evidence.'
                }
            ]
        },
        {
            id: 'financial_fraud',
            name: "Financial Fraud",
            severity: "High",
            keywords: [
                'scam',
                'fraud',
                'bank transfer',
                'up front payment',
                'fake website',
                'credit card',
                'money lost',
                'phishing',
                'otp'
            ],
            regex: [
                /send\s*money/i,
                /bank\s*details/i,
                /credit\s*card\s*number/i
            ],
            legalReferences: [
                {
                    code: 'IPC',
                    section: 'Section 420',
                    description: 'Cheating and dishonestly inducing delivery of property'
                },
                {
                    code: 'IT Act, 2000',
                    section: 'Section 66D',
                    description: 'Punishment for cheating by personation by using computer resource'
                }
            ],
            investigationSteps: [
                {
                    id: 'ff-1',
                    action: 'Contact Bank',
                    description: 'Call bank helpline to freeze accounts/cards immediately.'
                },
                {
                    id: 'ff-2',
                    action: 'Cyber Cell Report',
                    description: 'File a complaint at cybercrime.gov.in.'
                },
                {
                    id: 'ff-3',
                    action: 'Transaction Details',
                    description: 'Collect transaction IDs, screenshots, and bank statements.'
                }
            ]
        },
        {
            id: 'identity_theft',
            name: "Identity Theft",
            severity: "High",
            keywords: [
                'impersonation',
                'fake profile',
                'using my photos',
                'pretending to be me',
                'identity theft',
                'fake account'
            ],
            regex: [
                /fake\s*id/i,
                /my\s*photos/i
            ],
            legalReferences: [
                {
                    code: 'IT Act, 2000',
                    section: 'Section 66C',
                    description: 'Punishment for identity theft'
                },
                {
                    code: 'IPC',
                    section: 'Section 419',
                    description: 'Punishment for cheating by personation'
                }
            ],
            investigationSteps: [
                {
                    id: 'it-1',
                    action: 'Report Impersonation',
                    description: 'Report the fake profile to the platform provider.'
                },
                {
                    id: 'it-2',
                    action: 'Public Notice',
                    description: 'Inform contacts not to engage with the fake profile.'
                },
                {
                    id: 'it-3',
                    action: 'Monitor Accounts',
                    description: 'Check for unauthorized financial or social activity.'
                }
            ]
        },
        {
            id: 'child_exploitation',
            name: "Child Exploitation",
            severity: "Critical",
            keywords: [
                'csa',
                'minor',
                'child pornography',
                'grooming',
                'underage',
                'csam',
                'sexual abuse of child'
            ],
            regex: [
                /child\s*porn/i,
                /underage\s*sex/i
            ],
            legalReferences: [
                {
                    code: 'POCSO Act',
                    section: 'Section 11',
                    description: 'Sexual Harassment'
                },
                {
                    code: 'IT Act, 2000',
                    section: 'Section 67B',
                    description: 'Punishment for publishing or transmitting material depicting children in sexually explicit act'
                }
            ],
            investigationSteps: [
                {
                    id: 'ce-1',
                    action: 'Emergency Escalation',
                    description: 'IMMEDIATE REPORT REQUESTED. Contact NCMEC or local authorities.'
                },
                {
                    id: 'ce-2',
                    action: 'Do Not Share',
                    description: 'Do not distribute or share the material even for evidence. Report original link only.'
                }
            ]
        }
    ];
    detect(text) {
        const normalizeText = text.toLowerCase();
        const matches = [];
        for (const rule of this.rules){
            let matchedKeywords = [];
            let isMatch = false;
            // Check keywords
            matchedKeywords = rule.keywords.filter((keyword)=>normalizeText.includes(keyword));
            if (matchedKeywords.length > 0) isMatch = true;
            // Check Regex
            if (rule.regex) {
                for (const regex of rule.regex){
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
                if (rule.regex && rule.regex.some((r)=>r.test(text))) confidence = Math.max(confidence, 0.9);
                matches.push({
                    category: rule.name,
                    confidence,
                    severity: rule.severity,
                    matchedKeywords,
                    legalReferences: rule.legalReferences,
                    investigationSteps: rule.investigationSteps,
                    requiresImmediateEscalation: rule.severity === "Critical"
                });
            }
        }
        // Sort by confidence, then severity
        return matches.sort((a, b)=>{
            if (b.confidence !== a.confidence) return b.confidence - a.confidence;
            // Map severity to weight
            const severityWeight = {
                ["Critical"]: 4,
                ["High"]: 3,
                ["Medium"]: 2,
                ["Low"]: 1
            };
            return severityWeight[b.severity] - severityWeight[a.severity];
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Piyush/src/lib/data/datasetLoader.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractKeywordsFromDataset",
    ()=>extractKeywordsFromDataset,
    "findSimilarMessages",
    ()=>findSimilarMessages,
    "getCategoriesFromDataset",
    ()=>getCategoriesFromDataset,
    "loadDataset",
    ()=>loadDataset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/node_modules/papaparse/papaparse.min.js [app-client] (ecmascript)");
;
let cachedDataset = null;
async function loadDataset() {
    // Return cached dataset if already loaded
    if (cachedDataset) {
        return cachedDataset;
    }
    try {
        const response = await fetch('/data/dataset.csv');
        if (!response.ok) {
            console.warn('Dataset not found, using empty dataset');
            return [];
        }
        const csvText = await response.text();
        return new Promise((resolve)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$papaparse$2f$papaparse$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: (results)=>{
                    cachedDataset = results.data;
                    resolve(cachedDataset);
                },
                error: ()=>{
                    console.error('Failed to parse dataset');
                    resolve([]);
                }
            });
        });
    } catch (error) {
        console.error('Error loading dataset:', error);
        return [];
    }
}
function findSimilarMessages(inputText, dataset) {
    const input = inputText.toLowerCase().trim();
    const matches = [];
    dataset.forEach((entry)=>{
        // Get the message text from various possible column names
        const messageText = (entry.message || entry.text || entry.content || '').toLowerCase();
        if (!messageText) return;
        // Calculate similarity score
        let score = 0;
        // Exact match
        if (messageText === input) {
            score = 100;
        } else if (messageText.includes(input) || input.includes(messageText)) {
            score = 80;
        } else {
            const inputWords = input.split(/\s+/);
            const messageWords = messageText.split(/\s+/);
            const commonWords = inputWords.filter((word)=>word.length > 3 && messageWords.includes(word));
            score = commonWords.length / Math.max(inputWords.length, messageWords.length) * 60;
        }
        if (score > 20) {
            matches.push({
                entry,
                score
            });
        }
    });
    // Sort by score and return top 5
    return matches.sort((a, b)=>b.score - a.score).slice(0, 5).map((m)=>m.entry);
}
function extractKeywordsFromDataset(dataset) {
    const keywords = new Set();
    dataset.forEach((entry)=>{
        // Extract from keywords column if exists
        if (entry.keywords) {
            const kws = entry.keywords.split(/[,;|]/).map((k)=>k.trim().toLowerCase());
            kws.forEach((k)=>k && keywords.add(k));
        }
        // Extract from message text
        const messageText = entry.message || entry.text || entry.content || '';
        const words = messageText.toLowerCase().match(/\b\w{4,}\b/g) || [];
        // Add significant words (length > 3)
        words.forEach((word)=>{
            if (word.length > 3 && ![
                'this',
                'that',
                'with',
                'from',
                'have'
            ].includes(word)) {
                keywords.add(word);
            }
        });
    });
    return Array.from(keywords);
}
function getCategoriesFromDataset(dataset) {
    const categories = new Map();
    dataset.forEach((entry)=>{
        const category = entry.category || entry.label || 'unknown';
        categories.set(category, (categories.get(category) || 0) + 1);
    });
    return categories;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Piyush/src/components/evidence/TextAnalyzer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TextAnalyzer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$analyzer$2f$MessageAnalyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/src/lib/analyzer/MessageAnalyzer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$crime$2f$PatternDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/src/lib/crime/PatternDetector.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$data$2f$datasetLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/src/lib/data/datasetLoader.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function TextAnalyzer({ onAnalysisComplete }) {
    _s();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isAnalyzing, setIsAnalyzing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [analysisResult, setAnalysisResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dataset, setDataset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [datasetMatches, setDatasetMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Load dataset on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextAnalyzer.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$data$2f$datasetLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDataset"])().then(setDataset);
        }
    }["TextAnalyzer.useEffect"], []);
    const handleAnalyze = async ()=>{
        if (!text.trim()) return;
        setIsAnalyzing(true);
        setAnalysisResult(null);
        try {
            // Analyze the text
            const analyzer = new __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$analyzer$2f$MessageAnalyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageAnalyzer"]();
            const detector = new __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$crime$2f$PatternDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PatternDetector"]();
            const analysis = await analyzer.analyze(text);
            const patterns = detector.detect(text);
            // Find similar messages in dataset
            const matches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$data$2f$datasetLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSimilarMessages"])(text, dataset);
            setDatasetMatches(matches);
            setAnalysisResult({
                analysis,
                patterns,
                datasetMatches: matches
            });
            // Create evidence item
            if (onAnalysisComplete) {
                const evidence = {
                    id: `text-${Date.now()}`,
                    type: 'text',
                    url: '',
                    filename: 'Direct Text Input',
                    fileSize: text.length,
                    mimeType: 'text/plain',
                    metadata: {},
                    analysis,
                    createdAt: new Date().toISOString()
                };
                onAnalysisComplete(text, [
                    evidence
                ]);
            }
        } catch (error) {
            console.error('Analysis error:', error);
        } finally{
            setIsAnalyzing(false);
        }
    };
    const getSeverityColor = (category)=>{
        switch(category){
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-zinc-900 border border-white/10 rounded-xl p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "w-5 h-5 text-[#00ff41]"
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                lineNumber: 89,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-white",
                                children: "Direct Text Analysis"
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                        lineNumber: 88,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: text,
                        onChange: (e)=>setText(e.target.value),
                        placeholder: "Paste the message or text content you want to analyze here...  Example: Threatening messages, suspicious emails, social media posts, etc.",
                        className: "w-full h-48 bg-black/50 border border-white/10 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00ff41]/50 resize-none font-mono text-sm",
                        disabled: isAnalyzing
                    }, void 0, false, {
                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-[var(--text-secondary)] font-mono",
                                children: [
                                    text.length,
                                    " characters"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                lineNumber: 102,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAnalyze,
                                disabled: !text.trim() || isAnalyzing,
                                className: "px-8 py-3 border-2 border-[var(--accent)] text-[var(--accent)] font-bold tracking-wider hover:bg-[var(--accent)] hover:text-black transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed text-sm flex items-center gap-2",
                                children: isAnalyzing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                            lineNumber: 113,
                                            columnNumber: 33
                                        }, this),
                                        "ANALYZING..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                            lineNumber: 118,
                                            columnNumber: 33
                                        }, this),
                                        "[ ANALYZE TEXT ]"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                lineNumber: 106,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                        lineNumber: 101,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                lineNumber: 87,
                columnNumber: 13
            }, this),
            analysisResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-zinc-900 border border-white/10 rounded-xl p-6 space-y-4 animate-in fade-in slide-in-from-bottom-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-5 h-5 text-[#00ff41]"
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                lineNumber: 130,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-white",
                                children: "Analysis Results"
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                lineNumber: 131,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                        lineNumber: 129,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-400",
                                children: "Category:"
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                lineNumber: 136,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(analysisResult.analysis.category)}`,
                                children: analysisResult.analysis.category.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                lineNumber: 137,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                        lineNumber: 135,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black/50 rounded-lg p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-400 mb-1",
                                        children: "Toxicity Score"
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                        lineNumber: 145,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-white",
                                        children: [
                                            analysisResult.analysis.toxicityScore,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                        lineNumber: 146,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                lineNumber: 144,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black/50 rounded-lg p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-400 mb-1",
                                        children: "Confidence"
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                        lineNumber: 151,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold text-white",
                                        children: [
                                            analysisResult.analysis.confidenceScore,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                        lineNumber: 152,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                lineNumber: 150,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                        lineNumber: 143,
                        columnNumber: 21
                    }, this),
                    analysisResult.analysis.matchedKeywords.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-400 mb-2",
                                children: "Detected Keywords:"
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                lineNumber: 161,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: analysisResult.analysis.matchedKeywords.map((keyword, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-1 bg-red-500/10 text-red-400 border border-red-500/30 rounded text-xs font-mono",
                                        children: keyword
                                    }, idx, false, {
                                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                        lineNumber: 164,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                lineNumber: 162,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                        lineNumber: 160,
                        columnNumber: 25
                    }, this),
                    analysisResult.patterns.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-400 mb-2",
                                children: "Crime Patterns Detected:"
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                lineNumber: 178,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: analysisResult.patterns.map((pattern, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-black/50 border border-orange-500/30 rounded-lg p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-medium text-orange-400",
                                                children: pattern.category
                                            }, void 0, false, {
                                                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                                lineNumber: 185,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-400 mt-1",
                                                children: [
                                                    "Confidence: ",
                                                    (pattern.confidence * 100).toFixed(0),
                                                    "% | Severity: ",
                                                    pattern.severity
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                                lineNumber: 186,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                        lineNumber: 181,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                lineNumber: 179,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                        lineNumber: 177,
                        columnNumber: 25
                    }, this),
                    datasetMatches.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                        className: "w-4 h-4 text-[var(--accent)]"
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                        lineNumber: 199,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-400",
                                        children: "Similar Messages from Dataset:"
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                        lineNumber: 200,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                lineNumber: 198,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: datasetMatches.map((match, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-black/50 border border-[var(--accent)]/30 rounded-lg p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-white mb-1",
                                                children: [
                                                    '"',
                                                    (match.message_text || match.message || match.text || '').substring(0, 100),
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                                lineNumber: 208,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 text-xs",
                                                children: [
                                                    match.toxicity_label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--accent)]",
                                                        children: match.toxicity_label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 49
                                                    }, this),
                                                    match.crime_type && match.crime_type !== 'None' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-orange-400",
                                                        children: match.crime_type
                                                    }, void 0, false, {
                                                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 49
                                                    }, this),
                                                    match.severity_level && match.severity_level !== 'None' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-400",
                                                        children: [
                                                            "Severity: ",
                                                            match.severity_level
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                                lineNumber: 211,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                        lineNumber: 204,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                lineNumber: 202,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                        lineNumber: 197,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-blue-500/10 border border-blue-500/30 rounded-lg p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "w-5 h-5 text-blue-400 mt-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                    lineNumber: 237,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-medium text-blue-400 mb-1",
                                            children: "Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                            lineNumber: 239,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-300",
                                            children: analysisResult.analysis.summary
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                            lineNumber: 240,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                                    lineNumber: 238,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                            lineNumber: 236,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                        lineNumber: 235,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-gray-500 text-center pt-2",
                        children: 'Results have been sent to the Investigation Assistant. Switch to the "Active Investigation" tab to view detailed recommendations.'
                    }, void 0, false, {
                        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                        lineNumber: 245,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
                lineNumber: 128,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Piyush/src/components/evidence/TextAnalyzer.tsx",
        lineNumber: 85,
        columnNumber: 9
    }, this);
}
_s(TextAnalyzer, "podDfxGfejw3pO05PmJFxKZJgCg=");
_c = TextAnalyzer;
var _c;
__turbopack_context__.k.register(_c, "TextAnalyzer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Piyush/src/components/investigation/Assistant.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvestigationAssistant",
    ()=>InvestigationAssistant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$crime$2f$PatternDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/src/lib/crime/PatternDetector.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/ban.js [app-client] (ecmascript) <export default as Ban>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function InvestigationAssistant({ crimeAnalysis }) {
    _s();
    const { severity, categories, investigationSteps, legalProvisions } = crimeAnalysis;
    const [completedSteps, setCompletedSteps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [safetyChecklist, setSafetyChecklist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        passwords: false,
        twoFactor: false,
        evidence: false,
        blocking: false
    });
    const [isLegalExpanded, setIsLegalExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleStep = (id)=>{
        setCompletedSteps((prev)=>prev.includes(id) ? prev.filter((stepId)=>stepId !== id) : [
                ...prev,
                id
            ]);
    };
    const toggleSafetyItem = (key)=>{
        setSafetyChecklist((prev)=>({
                ...prev,
                [key]: !prev[key]
            }));
    };
    const getSeverityColor = (sev)=>{
        switch(sev){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$crime$2f$PatternDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Severity"].CRITICAL:
                return 'bg-red-500 text-white';
            case __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$crime$2f$PatternDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Severity"].HIGH:
                return 'bg-orange-500 text-white';
            case __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$crime$2f$PatternDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Severity"].MEDIUM:
                return 'bg-yellow-500 text-white';
            case __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$crime$2f$PatternDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Severity"].LOW:
                return 'bg-blue-500 text-white';
            default:
                return 'bg-gray-500 text-white';
        }
    };
    const getSeverityBadgeColor = (sev)=>{
        switch(sev){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$crime$2f$PatternDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Severity"].CRITICAL:
                return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800';
            case __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$crime$2f$PatternDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Severity"].HIGH:
                return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800';
            case __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$crime$2f$PatternDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Severity"].MEDIUM:
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800';
            case __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$crime$2f$PatternDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Severity"].LOW:
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 border-gray-200 dark:border-gray-800';
        }
    };
    const calculateProgress = ()=>{
        const totalSafety = Object.keys(safetyChecklist).length;
        const completeSafety = Object.values(safetyChecklist).filter(Boolean).length;
        const totalInvest = investigationSteps.length;
        const completeInvest = completedSteps.length;
        if (totalSafety + totalInvest === 0) return 0;
        return Math.round((completeSafety + completeInvest) / (totalSafety + totalInvest) * 100);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-zinc-900 dark:text-zinc-50",
                                            children: "Investigation Assistant"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                            lineNumber: 105,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `px-3 py-1 rounded-full text-sm font-medium border ${getSeverityBadgeColor(severity)}`,
                                            children: [
                                                severity,
                                                " Severity"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                            lineNumber: 106,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                    lineNumber: 104,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-zinc-600 dark:text-zinc-400",
                                    children: [
                                        "Detected: ",
                                        categories.map((c)=>c).join(', ') || 'Processing...'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                    lineNumber: 110,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                            lineNumber: 103,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 bg-zinc-50 dark:bg-zinc-950 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-zinc-500 dark:text-zinc-400 font-medium",
                                            children: "Progress"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                            lineNumber: 116,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-bold text-zinc-900 dark:text-zinc-50",
                                            children: [
                                                calculateProgress(),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                            lineNumber: 117,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                    lineNumber: 115,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 relative flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-full h-full transform -rotate-90",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                className: "text-zinc-200 dark:text-zinc-800",
                                                strokeWidth: "6",
                                                stroke: "currentColor",
                                                fill: "transparent",
                                                r: "28",
                                                cx: "32",
                                                cy: "32"
                                            }, void 0, false, {
                                                fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                                lineNumber: 121,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                className: "text-blue-600 dark:text-blue-500 transition-all duration-1000 ease-out",
                                                strokeWidth: "6",
                                                strokeDasharray: 175.93,
                                                strokeDashoffset: 175.93 - calculateProgress() / 100 * 175.93,
                                                strokeLinecap: "round",
                                                stroke: "currentColor",
                                                fill: "transparent",
                                                r: "28",
                                                cx: "32",
                                                cy: "32"
                                            }, void 0, false, {
                                                fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                                lineNumber: 130,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                        lineNumber: 120,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                    lineNumber: 119,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                            lineNumber: 114,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                    lineNumber: 102,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                            lineNumber: 153,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                        lineNumber: 152,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-zinc-900 dark:text-zinc-50",
                                        children: "Immediate Safety Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                        lineNumber: 155,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                lineNumber: 151,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SafetyItem, {
                                        label: "Change Passwords",
                                        sublabel: "Update passwords for all compromised accounts.",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                            lineNumber: 162,
                                            columnNumber: 35
                                        }, void 0),
                                        checked: safetyChecklist.passwords,
                                        onChange: ()=>toggleSafetyItem('passwords')
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                        lineNumber: 159,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SafetyItem, {
                                        label: "Enable 2FA",
                                        sublabel: "Turn on Two-Factor Authentication immediately.",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                            lineNumber: 169,
                                            columnNumber: 35
                                        }, void 0),
                                        checked: safetyChecklist.twoFactor,
                                        onChange: ()=>toggleSafetyItem('twoFactor')
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                        lineNumber: 166,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SafetyItem, {
                                        label: "Preserve Evidence",
                                        sublabel: "Do not delete messages. Take screenshots.",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                            lineNumber: 176,
                                            columnNumber: 35
                                        }, void 0),
                                        checked: safetyChecklist.evidence,
                                        onChange: ()=>toggleSafetyItem('evidence')
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                        lineNumber: 173,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SafetyItem, {
                                        label: "Block Contacts",
                                        sublabel: "Block and report the perpetrator.",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                            lineNumber: 183,
                                            columnNumber: 35
                                        }, void 0),
                                        checked: safetyChecklist.blocking,
                                        onChange: ()=>toggleSafetyItem('blocking')
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                        lineNumber: 180,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                lineNumber: 158,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                        lineNumber: 150,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                            lineNumber: 194,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                        lineNumber: 193,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-zinc-900 dark:text-zinc-50",
                                        children: "Legal Guidance"
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                        lineNumber: 196,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                lineNumber: 192,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto pr-2 custom-scrollbar",
                                children: legalProvisions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: legalProvisions.map((provision, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-zinc-900 dark:text-zinc-50 text-sm",
                                                            children: provision.act
                                                        }, void 0, false, {
                                                            fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-mono bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded text-zinc-600 dark:text-zinc-400",
                                                            children: provision.section
                                                        }, void 0, false, {
                                                            fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed",
                                                    children: provision.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                            lineNumber: 203,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                    lineNumber: 201,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center justify-center h-full text-zinc-500 text-sm text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "w-8 h-8 mb-2 opacity-50"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                            lineNumber: 216,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "No specific legal provisions detected yet."
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                            lineNumber: 217,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                    lineNumber: 215,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                lineNumber: 199,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                        lineNumber: 191,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                lineNumber: 148,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                    lineNumber: 228,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                lineNumber: 227,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-zinc-900 dark:text-zinc-50",
                                children: "Recommended Actions"
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                lineNumber: 230,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                        lineNumber: 226,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: investigationSteps.length > 0 ? investigationSteps.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>toggleStep(step.id),
                                className: `
                                    group flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer
                                    ${completedSteps.includes(step.id) ? 'bg-green-50/50 dark:bg-green-900/10 border-green-200 dark:border-green-800/50' : 'bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 border-zinc-200 dark:border-zinc-800'}
                                `,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `mt-1 transition-colors ${completedSteps.includes(step.id) ? 'text-green-600 dark:text-green-500' : 'text-zinc-300 dark:text-zinc-700 group-hover:text-zinc-400'}`,
                                        children: completedSteps.includes(step.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                            lineNumber: 249,
                                            columnNumber: 41
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                            lineNumber: 251,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                        lineNumber: 247,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: `font-medium ${completedSteps.includes(step.id) ? 'text-green-900 dark:text-green-100 line-through opacity-70' : 'text-zinc-900 dark:text-zinc-50'}`,
                                                        children: step.action
                                                    }, void 0, false, {
                                                        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 41
                                                    }, this),
                                                    step.priority === __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$crime$2f$PatternDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Severity"].CRITICAL && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-700 px-2 py-0.5 rounded-full dark:bg-red-900/50 dark:text-red-300",
                                                        children: "Critical"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                                lineNumber: 255,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-sm ${completedSteps.includes(step.id) ? 'text-green-700/70 dark:text-green-200/50' : 'text-zinc-500 dark:text-zinc-400'}`,
                                                children: step.description
                                            }, void 0, false, {
                                                fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                                lineNumber: 265,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                        lineNumber: 254,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, step.id, true, {
                                fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                lineNumber: 236,
                                columnNumber: 29
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-zinc-500 italic text-center py-8",
                            children: "Action items will appear here based on the analysis."
                        }, void 0, false, {
                            fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                            lineNumber: 272,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                        lineNumber: 233,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                lineNumber: 225,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
        lineNumber: 99,
        columnNumber: 9
    }, this);
}
_s(InvestigationAssistant, "WZuQjK9CwFJEXxrfF6FtndKMY0A=");
_c = InvestigationAssistant;
function SafetyItem({ label, sublabel, icon, checked, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onChange,
        className: `
                flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all
                ${checked ? 'bg-blue-50/50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800/50' : 'bg-zinc-50 dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-900 border-transparent'}
            `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `p-2 rounded-lg ${checked ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-white dark:bg-zinc-900 text-zinc-400 dark:text-zinc-600 shadow-sm'}`,
                children: icon
            }, void 0, false, {
                fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                lineNumber: 298,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `font-medium text-sm ${checked ? 'text-blue-900 dark:text-blue-100' : 'text-zinc-900 dark:text-zinc-50'}`,
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                lineNumber: 303,
                                columnNumber: 21
                            }, this),
                            checked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-4 h-4 text-blue-600 dark:text-blue-400"
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                                lineNumber: 304,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                        lineNumber: 302,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-xs ${checked ? 'text-blue-700/70 dark:text-blue-300/70' : 'text-zinc-500 dark:text-zinc-500'}`,
                        children: sublabel
                    }, void 0, false, {
                        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                        lineNumber: 306,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
                lineNumber: 301,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Piyush/src/components/investigation/Assistant.tsx",
        lineNumber: 288,
        columnNumber: 9
    }, this);
}
_c1 = SafetyItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "InvestigationAssistant");
__turbopack_context__.k.register(_c1, "SafetyItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Piyush/src/lib/pdf/ReportGenerator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReportGenerator",
    ()=>ReportGenerator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
;
class ReportGenerator {
    doc;
    currentY;
    margin;
    pageWidth;
    constructor(){
        this.doc = new __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsPDF"]();
        this.currentY = 20;
        this.margin = 20;
        this.pageWidth = this.doc.internal.pageSize.width;
    }
    async generate(data) {
        await this.buildDocument(data);
        const filename = `CyberShieldX_Report_${data.id}_${new Date().toISOString().split('T')[0]}.pdf`;
        this.doc.save(filename);
    }
    async generateBuffer(data) {
        await this.buildDocument(data);
        return this.doc.output('arraybuffer');
    }
    async buildDocument(data) {
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
    addHeader(data) {
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
    addMessageContent(data) {
        this.checkPageBreak(40);
        this.doc.setFontSize(12);
        this.doc.setTextColor(50);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text('1. Analyzed Content', this.margin, this.currentY);
        this.currentY += 8;
        this.doc.setFont('helvetica', 'normal');
        this.doc.setFontSize(10);
        this.doc.setTextColor(0);
        // Message Box
        this.doc.setFillColor(245, 247, 250);
        this.doc.rect(this.margin, this.currentY, this.pageWidth - this.margin * 2, 30, 'F');
        const splitText = this.doc.splitTextToSize(data.message.content, this.pageWidth - this.margin * 2 - 10);
        this.doc.text(splitText, this.margin + 5, this.currentY + 7);
        this.currentY += 35;
        if (data.message.source) {
            this.doc.setFontSize(9);
            this.doc.setTextColor(100);
            this.doc.text(`Source: ${data.message.source} | Sender: ${data.message.senderId || 'Unknown'}`, this.margin, this.currentY);
            this.currentY += 10;
        }
    }
    addAIAnalysis(data) {
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
        const barColor = score > 70 ? [
            220,
            38,
            38
        ] : score > 30 ? [
            245,
            158,
            11
        ] : [
            16,
            185,
            129
        ];
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
    addCrimePattern(data) {
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
        data.crimePatterns.forEach((pattern)=>{
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
                pattern.legalReferences.forEach((ref)=>{
                    this.currentY += 5;
                    this.doc.setTextColor(200, 0, 0);
                    this.doc.text(`• ${ref.code} ${ref.section}: ${ref.description}`, this.margin + 10, this.currentY);
                });
            }
            this.doc.setTextColor(0, 0, 0);
            this.currentY += 10;
        });
    }
    addInvestigationSteps(data) {
        this.checkPageBreak(60);
        this.doc.setFontSize(12);
        this.doc.setTextColor(50);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text('4. Recommended Investigation Steps', this.margin, this.currentY);
        this.currentY += 10;
        this.doc.setFont('helvetica', 'normal');
        this.doc.setFontSize(10);
        this.doc.setTextColor(0, 0, 0);
        data.investigation.steps.forEach((step, index)=>{
            this.checkPageBreak(10);
            const stepText = `${index + 1}. ${step}`;
            const splitStep = this.doc.splitTextToSize(stepText, this.pageWidth - this.margin * 2);
            this.doc.text(splitStep, this.margin, this.currentY);
            this.currentY += splitStep.length * 5 + 3;
        });
        this.currentY += 5;
    }
    async addEvidenceLog(data) {
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
        for (const item of data.evidence){
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
                this.doc.textWithLink('Open Evidence', this.margin + 10, this.currentY, {
                    url: item.url
                });
                this.doc.setTextColor(0, 0, 0);
                this.currentY += 5;
            }
            this.currentY += 5;
        }
    }
    addFooter(data) {
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
        this.doc.text('CONFIDENTIAL', 40, 150, {
            angle: 45
        });
        this.doc.restoreGraphicsState();
    }
    checkPageBreak(requiredSpace) {
        if (this.currentY + requiredSpace > this.doc.internal.pageSize.height - this.margin) {
            this.doc.addPage();
            this.currentY = this.margin;
        }
    }
    getSeverityColor(severity) {
        switch(severity.toLowerCase()){
            case 'critical':
                return [
                    220,
                    38,
                    38
                ]; // Red
            case 'high':
                return [
                    249,
                    115,
                    22
                ]; // Orange
            case 'medium':
                return [
                    234,
                    179,
                    8
                ]; // Yellow
            case 'low':
                return [
                    34,
                    197,
                    94
                ]; // Green
            default:
                return [
                    100,
                    116,
                    139
                ]; // Gray
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Piyush/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/file-search.js [app-client] (ecmascript) <export default as FileSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$components$2f$ui$2f$AnimatedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/src/components/ui/AnimatedText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/src/components/ui/ScrollReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$components$2f$evidence$2f$OCRAnalyzer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/src/components/evidence/OCRAnalyzer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$components$2f$evidence$2f$TextAnalyzer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/src/components/evidence/TextAnalyzer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$components$2f$investigation$2f$Assistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/src/components/investigation/Assistant.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$analyzer$2f$MessageAnalyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/src/lib/analyzer/MessageAnalyzer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$crime$2f$PatternDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/src/lib/crime/PatternDetector.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$pdf$2f$ReportGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Piyush/src/lib/pdf/ReportGenerator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/Piyush/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [evidenceMode, setEvidenceMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('text');
    // Investigation state
    const [currentAnalysis, setCurrentAnalysis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentPatterns, setCurrentPatterns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentEvidence, setCurrentEvidence] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [analyzedText, setAnalyzedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [caseSeverity, setCaseSeverity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$crime$2f$PatternDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Severity"].LOW);
    const [analyzer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Home.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$analyzer$2f$MessageAnalyzer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageAnalyzer"]()
    }["Home.useState"]);
    const [detector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Home.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$crime$2f$PatternDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PatternDetector"]()
    }["Home.useState"]);
    const [reportGenerator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Home.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$lib$2f$pdf$2f$ReportGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReportGenerator"]()
    }["Home.useState"]);
    const handleEvidenceProcessed = async (text, evidenceItems)=>{
        setAnalyzedText(text);
        setCurrentEvidence((prev)=>[
                ...prev,
                ...evidenceItems
            ]);
        const analysis = await analyzer.analyze(text);
        setCurrentAnalysis(analysis);
        const patterns = detector.detect(text);
        setCurrentPatterns(patterns);
        const maxSeverity = patterns.length > 0 ? patterns[0].severity : analysis.toxicityScore > 80 ? 'High' : 'Low';
        setCaseSeverity(maxSeverity);
        // Smooth scroll to investigation
        document.getElementById('investigation')?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    const handleGenerateReport = async ()=>{
        if (!currentAnalysis) return;
        const reportData = {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
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
                steps: currentPatterns.flatMap((p)=>p.investigationSteps.map((s)=>s.action)),
                evidenceCollected: currentEvidence.map((e)=>e.filename)
            },
            evidence: currentEvidence,
            agent: {
                name: 'Analyst User',
                id: 'user-1'
            }
        };
        await reportGenerator.generate(reportData);
    };
    const scrollToSection = (id)=>{
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth'
        });
        setMobileMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-[var(--accent)] font-bold text-xl tracking-wider",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "CYBERSHIELD"
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Piyush/src/app/page.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollToSection('hero'),
                                        className: "text-sm font-medium hover:text-[var(--accent)] transition-colors tracking-wide",
                                        children: "HOME"
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollToSection('evidence'),
                                        className: "text-sm font-medium hover:text-[var(--accent)] transition-colors tracking-wide",
                                        children: "EVIDENCE LAB"
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollToSection('investigation'),
                                        className: "text-sm font-medium hover:text-[var(--accent)] transition-colors tracking-wide",
                                        children: "INVESTIGATION"
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollToSection('technology'),
                                        className: "text-sm font-medium hover:text-[var(--accent)] transition-colors tracking-wide",
                                        children: "TECHNOLOGY"
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/dataset",
                                        className: "text-sm font-medium hover:text-[var(--accent)] transition-colors tracking-wide",
                                        children: "DATASET"
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Piyush/src/app/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                className: "md:hidden p-2 hover:bg-white/5 rounded",
                                children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/Piyush/src/app/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 31
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/Piyush/src/app/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 59
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/app/page.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Piyush/src/app/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden bg-black border-t border-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 py-4 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection('hero'),
                                    className: "block w-full text-left text-sm font-medium hover:text-[var(--accent)] transition-colors tracking-wide",
                                    children: "HOME"
                                }, void 0, false, {
                                    fileName: "[project]/Piyush/src/app/page.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection('evidence'),
                                    className: "block w-full text-left text-sm font-medium hover:text-[var(--accent)] transition-colors tracking-wide",
                                    children: "EVIDENCE LAB"
                                }, void 0, false, {
                                    fileName: "[project]/Piyush/src/app/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection('investigation'),
                                    className: "block w-full text-left text-sm font-medium hover:text-[var(--accent)] transition-colors tracking-wide",
                                    children: "INVESTIGATION"
                                }, void 0, false, {
                                    fileName: "[project]/Piyush/src/app/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection('technology'),
                                    className: "block w-full text-left text-sm font-medium hover:text-[var(--accent)] transition-colors tracking-wide",
                                    children: "TECHNOLOGY"
                                }, void 0, false, {
                                    fileName: "[project]/Piyush/src/app/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Piyush/src/app/page.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Piyush/src/app/page.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Piyush/src/app/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "hero",
                className: "min-h-screen flex items-center justify-center px-6 pt-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$components$2f$ui$2f$AnimatedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            text: "AI-POWERED THREAT DETECTION",
                            className: "text-5xl md:text-7xl font-bold mb-6 tracking-tight",
                            speed: 30
                        }, void 0, false, {
                            fileName: "[project]/Piyush/src/app/page.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            delay: 1500,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl md:text-2xl text-[var(--text-secondary)] mb-12 max-w-3xl mx-auto leading-relaxed",
                                children: "Advanced cyberbullying detection and cybercrime investigation platform powered by artificial intelligence"
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/app/page.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Piyush/src/app/page.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            delay: 2000,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollToSection('evidence'),
                                className: "px-8 py-4 border-2 border-[var(--accent)] text-[var(--accent)] font-bold tracking-wider hover:bg-[var(--accent)] hover:text-black transition-all duration-300 text-sm",
                                children: "[ START ANALYSIS ]"
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/app/page.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Piyush/src/app/page.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Piyush/src/app/page.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Piyush/src/app/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "evidence",
                className: "min-h-screen py-20 px-6 bg-[var(--bg-secondary)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-bold mb-4 tracking-tight",
                                    children: "EVIDENCE LAB"
                                }, void 0, false, {
                                    fileName: "[project]/Piyush/src/app/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-[var(--text-secondary)] mb-12",
                                    children: "Analyze text and images for potential threats"
                                }, void 0, false, {
                                    fileName: "[project]/Piyush/src/app/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Piyush/src/app/page.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            delay: 200,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 bg-black border border-white/10 rounded-lg p-1 w-fit mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setEvidenceMode('text'),
                                        className: `px-6 py-3 rounded-md text-sm font-bold transition-all tracking-wide ${evidenceMode === 'text' ? 'bg-[var(--accent)] text-black' : 'text-[var(--text-secondary)] hover:text-white'}`,
                                        children: "TEXT INPUT"
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setEvidenceMode('ocr'),
                                        className: `px-6 py-3 rounded-md text-sm font-bold transition-all tracking-wide ${evidenceMode === 'ocr' ? 'bg-[var(--accent)] text-black' : 'text-[var(--text-secondary)] hover:text-white'}`,
                                        children: "IMAGE OCR"
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Piyush/src/app/page.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Piyush/src/app/page.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            delay: 400,
                            children: evidenceMode === 'text' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$components$2f$evidence$2f$TextAnalyzer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onAnalysisComplete: handleEvidenceProcessed
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/app/page.tsx",
                                lineNumber: 204,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$components$2f$evidence$2f$OCRAnalyzer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onAnalysisComplete: handleEvidenceProcessed
                            }, void 0, false, {
                                fileName: "[project]/Piyush/src/app/page.tsx",
                                lineNumber: 206,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Piyush/src/app/page.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Piyush/src/app/page.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Piyush/src/app/page.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "investigation",
                className: "min-h-screen py-20 px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-4xl md:text-5xl font-bold mb-4 tracking-tight",
                                                children: "ACTIVE INVESTIGATION"
                                            }, void 0, false, {
                                                fileName: "[project]/Piyush/src/app/page.tsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xl text-[var(--text-secondary)]",
                                                children: "AI-powered case analysis and recommendations"
                                            }, void 0, false, {
                                                fileName: "[project]/Piyush/src/app/page.tsx",
                                                lineNumber: 219,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this),
                                    currentAnalysis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleGenerateReport,
                                        className: "px-6 py-3 border-2 border-[var(--accent)] text-[var(--accent)] font-bold tracking-wider hover:bg-[var(--accent)] hover:text-black transition-all duration-300 text-sm flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Piyush/src/app/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 19
                                            }, this),
                                            "[ GENERATE REPORT ]"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Piyush/src/app/page.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Piyush/src/app/page.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            delay: 200,
                            children: !currentAnalysis ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center h-96 border border-dashed border-white/10 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__["FileSearch"], {
                                        className: "w-16 h-16 mb-4 opacity-20"
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                        lineNumber: 238,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-[var(--text-secondary)] mb-2",
                                        children: "NO ACTIVE CASE"
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[var(--text-tertiary)]",
                                        children: [
                                            "Upload evidence in the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>scrollToSection('evidence'),
                                                className: "text-[var(--accent)] hover:underline",
                                                children: "Evidence Lab"
                                            }, void 0, false, {
                                                fileName: "[project]/Piyush/src/app/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 42
                                            }, this),
                                            " to start"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Piyush/src/app/page.tsx",
                                lineNumber: 237,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[var(--bg-card)] border border-white/10 rounded-lg p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-[var(--accent)] font-mono text-sm mb-6 tracking-wider",
                                                children: "CASE_SUMMARY_V1"
                                            }, void 0, false, {
                                                fileName: "[project]/Piyush/src/app/page.tsx",
                                                lineNumber: 248,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-[var(--text-tertiary)] uppercase tracking-wider",
                                                                children: "Analysis Confidence"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Piyush/src/app/page.tsx",
                                                                lineNumber: 251,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-4xl font-bold text-white mt-2",
                                                                children: [
                                                                    currentAnalysis.confidenceScore,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Piyush/src/app/page.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-[var(--text-tertiary)] uppercase tracking-wider",
                                                                children: "Detected Patterns"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Piyush/src/app/page.tsx",
                                                                lineNumber: 255,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-4xl font-bold text-white mt-2",
                                                                children: currentPatterns.length
                                                            }, void 0, false, {
                                                                fileName: "[project]/Piyush/src/app/page.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-[var(--text-tertiary)] uppercase tracking-wider",
                                                                children: "Main Category"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Piyush/src/app/page.tsx",
                                                                lineNumber: 259,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-4xl font-bold text-white mt-2",
                                                                children: currentPatterns[0]?.category || currentAnalysis.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/Piyush/src/app/page.tsx",
                                                                lineNumber: 260,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Piyush/src/app/page.tsx",
                                                lineNumber: 249,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                        lineNumber: 247,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$components$2f$investigation$2f$Assistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvestigationAssistant"], {
                                        crimeAnalysis: {
                                            detected: currentPatterns.length > 0 || currentAnalysis.toxicityScore > 50,
                                            categories: currentPatterns.map((p)=>p.category),
                                            severity: caseSeverity,
                                            legalProvisions: currentPatterns.flatMap((p)=>p.legalReferences.map((r)=>({
                                                        act: r.code,
                                                        section: r.section,
                                                        description: r.description
                                                    }))),
                                            investigationSteps: currentPatterns.flatMap((p)=>p.investigationSteps.map((s)=>({
                                                        id: s.id,
                                                        action: s.action,
                                                        description: s.description,
                                                        priority: caseSeverity
                                                    }))),
                                            matchedKeywords: currentAnalysis.matchedKeywords
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Piyush/src/app/page.tsx",
                                lineNumber: 245,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Piyush/src/app/page.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Piyush/src/app/page.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Piyush/src/app/page.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "technology",
                className: "min-h-screen py-20 px-6 bg-[var(--bg-secondary)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-bold mb-4 tracking-tight",
                                    children: "HOW IT WORKS"
                                }, void 0, false, {
                                    fileName: "[project]/Piyush/src/app/page.tsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-[var(--text-secondary)] mb-16",
                                    children: "Three-phase AI-powered analysis system"
                                }, void 0, false, {
                                    fileName: "[project]/Piyush/src/app/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Piyush/src/app/page.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    delay: 200,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-6xl font-bold text-[var(--accent)] opacity-20",
                                                    children: "01"
                                                }, void 0, false, {
                                                    fileName: "[project]/Piyush/src/app/page.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-2xl font-bold mb-4",
                                                            children: "ANALYZE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Piyush/src/app/page.tsx",
                                                            lineNumber: 303,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[var(--text-secondary)] leading-relaxed",
                                                            children: "Advanced NLP algorithms scan text for toxicity, threats, harassment patterns, and fraud indicators. Our AI analyzes sentiment, context, and linguistic patterns to detect potential cybercrime."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Piyush/src/app/page.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Piyush/src/app/page.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Piyush/src/app/page.tsx",
                                            lineNumber: 300,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px bg-white/10 my-8"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/app/page.tsx",
                                            lineNumber: 309,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Piyush/src/app/page.tsx",
                                    lineNumber: 299,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    delay: 400,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-6xl font-bold text-[var(--accent)] opacity-20",
                                                    children: "02"
                                                }, void 0, false, {
                                                    fileName: "[project]/Piyush/src/app/page.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-2xl font-bold mb-4",
                                                            children: "DETECT"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Piyush/src/app/page.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[var(--text-secondary)] leading-relaxed",
                                                            children: "Pattern detection engine matches content against known crime categories including extortion, harassment, threats, fraud, identity theft, and child exploitation. Maps violations to legal frameworks (IT Act, IPC)."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Piyush/src/app/page.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Piyush/src/app/page.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Piyush/src/app/page.tsx",
                                            lineNumber: 314,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px bg-white/10 my-8"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/app/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Piyush/src/app/page.tsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    delay: 600,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-6xl font-bold text-[var(--accent)] opacity-20",
                                                children: "03"
                                            }, void 0, false, {
                                                fileName: "[project]/Piyush/src/app/page.tsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-bold mb-4",
                                                        children: "REPORT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[var(--text-secondary)] leading-relaxed",
                                                        children: "Generates comprehensive investigation reports with legal references, recommended actions, evidence logs, and safety measures. Exports professional PDF documentation for law enforcement and legal proceedings."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Piyush/src/app/page.tsx",
                                                lineNumber: 330,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Piyush/src/app/page.tsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Piyush/src/app/page.tsx",
                                    lineNumber: 327,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Piyush/src/app/page.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Piyush/src/app/page.tsx",
                    lineNumber: 289,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Piyush/src/app/page.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "py-12 px-6 border-t border-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row items-center justify-between gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-[var(--accent)] font-bold text-lg tracking-wider",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/app/page.tsx",
                                            lineNumber: 347,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "CYBERSHIELD"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/app/page.tsx",
                                            lineNumber: 348,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Piyush/src/app/page.tsx",
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-8 text-sm text-[var(--text-tertiary)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scrollToSection('hero'),
                                            className: "hover:text-white transition-colors",
                                            children: "HOME"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/app/page.tsx",
                                            lineNumber: 351,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scrollToSection('evidence'),
                                            className: "hover:text-white transition-colors",
                                            children: "EVIDENCE LAB"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/app/page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scrollToSection('investigation'),
                                            className: "hover:text-white transition-colors",
                                            children: "INVESTIGATION"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/app/page.tsx",
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scrollToSection('technology'),
                                            className: "hover:text-white transition-colors",
                                            children: "TECHNOLOGY"
                                        }, void 0, false, {
                                            fileName: "[project]/Piyush/src/app/page.tsx",
                                            lineNumber: 354,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Piyush/src/app/page.tsx",
                                    lineNumber: 350,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Piyush/src/app/page.tsx",
                            lineNumber: 345,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Piyush$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-8 text-sm text-[var(--text-tertiary)]",
                            children: "© 2026 CyberShield. AI-Powered Threat Detection Platform."
                        }, void 0, false, {
                            fileName: "[project]/Piyush/src/app/page.tsx",
                            lineNumber: 357,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Piyush/src/app/page.tsx",
                    lineNumber: 344,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Piyush/src/app/page.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Piyush/src/app/page.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(Home, "g2nFnV8UNaSpnYNYJ4VrvG/HEuM=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Piyush_src_5b8e77fc._.js.map