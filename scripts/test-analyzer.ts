import { MessageAnalyzer } from '../src/lib/analyzer/MessageAnalyzer';

const analyzer = new MessageAnalyzer();

const messages = [
    "Hello, how are you?",
    "I will kill you and your family.",
    "You are a stupid idiot.",
    "Send me your credit card details immediately.",
    "I hate you but have a nice day",
    ""
];

async function runTests() {
    console.log("Running Message Analyzer Tests...\n");
    for (const msg of messages) {
        console.log(`Analyzing: "${msg}"`);
        try {
            const result = await analyzer.analyze(msg);
            console.log("Category:", result.category);
            console.log("Toxicity Score:", result.toxicityScore);
            console.log("Keywords:", result.matchedKeywords);
            if (result.crimePattern) {
                console.log("Crime Pattern:", result.crimePattern.type);
            }
        } catch (error) {
            console.error("Error analyzing message:", error);
        }
        console.log("-".repeat(40));
    }
}

runTests();
