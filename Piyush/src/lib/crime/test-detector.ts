import { PatternDetector } from './PatternDetector';

const detector = new PatternDetector();

const testCases = [
    {
        text: "I will kill you and hurt your family if you don't pay me 5000",
        expectedCategories: ['Threats and Violence', 'Extortion / Blackmail'],
        description: "Threat + Extortion"
    },
    {
        text: "Your account has been hacked, click here to reset password or we will leak your photos",
        expectedCategories: ['Account Hacking / Unauthorized Access', 'Extortion / Blackmail'],
        description: "Hacking + Extortion"
    },
    {
        text: "You are ugly and stupid, stop posting",
        expectedCategories: ['Online Harassment'],
        description: "Harassment"
    },
    {
        text: "I have child pornography videos",
        expectedCategories: ['Child Exploitation'],
        description: "Child Exploitation (Critical)"
    },
    {
        text: "Hello how are you today",
        expectedCategories: [],
        description: "Safe text"
    }
];

console.log("Running Pattern Detector Tests...\n");

testCases.forEach((test, index) => {
    console.log(`Test ${index + 1}: ${test.description}`);
    console.log(`Input: "${test.text}"`);
    const result = detector.detect(test.text);

    const detectedCategories = result.map(m => m.category);
    console.log("Detected:", detectedCategories);

    const missing = test.expectedCategories.filter(c => !detectedCategories.includes(c));
    const unexpected = detectedCategories.filter(c => !test.expectedCategories.includes(c));

    if (missing.length === 0 && unexpected.length === 0) {
        console.log("✅ PASS");
    } else {
        console.log("❌ FAIL");
        if (missing.length > 0) console.log("   Missing:", missing);
        if (unexpected.length > 0) console.log("   Unexpected:", unexpected);
    }

    if (result.length > 0) {
        console.log("   Severity:", result[0].severity);
        if (result[0].investigationSteps.length > 0) {
            console.log("   Steps generated:", result[0].investigationSteps.length);
        }
    }
    console.log("-".repeat(40));
});
