import Papa from 'papaparse';

export interface DatasetEntry {
    message?: string;
    text?: string;
    content?: string;
    category?: string;
    severity?: string;
    keywords?: string;
    label?: string;
    [key: string]: any; // Allow flexible column names
}

let cachedDataset: DatasetEntry[] | null = null;

export async function loadDataset(): Promise<DatasetEntry[]> {
    // Return cached dataset if already loaded
    if (cachedDataset) {
        return cachedDataset;
    }

    try {
        const response = await fetch('/data/cybershieldx_dataset.csv');
        if (!response.ok) {
            console.warn('Dataset not found, using empty dataset');
            return [];
        }

        const csvText = await response.text();

        return new Promise((resolve) => {
            Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    cachedDataset = results.data as DatasetEntry[];
                    resolve(cachedDataset);
                },
                error: () => {
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

export function findSimilarMessages(inputText: string, dataset: DatasetEntry[]): DatasetEntry[] {
    const input = inputText.toLowerCase().trim();
    const matches: Array<{ entry: DatasetEntry; score: number }> = [];

    dataset.forEach(entry => {
        // Get the message text from various possible column names
        const messageText = (
            entry.message_text || // Added for cybershieldx_dataset.csv
            entry.message ||
            entry.text ||
            entry.content ||
            ''
        ).toLowerCase();

        if (!messageText) return;

        // Calculate similarity score
        let score = 0;

        // Exact match
        if (messageText === input) {
            score = 100;
        }
        // Contains match
        else if (messageText.includes(input) || input.includes(messageText)) {
            score = 80;
        }
        // Word overlap
        else {
            const inputWords = input.split(/\s+/);
            const messageWords = messageText.split(/\s+/);
            const commonWords = inputWords.filter(word =>
                word.length > 3 && messageWords.includes(word)
            );
            score = (commonWords.length / Math.max(inputWords.length, messageWords.length)) * 60;
        }

        if (score > 20) {
            matches.push({ entry, score });
        }
    });

    // Sort by score and return top 5
    return matches
        .sort((a, b) => b.score - a.score)
        .slice(0, 5)
        .map(m => m.entry);
}

export function extractKeywordsFromDataset(dataset: DatasetEntry[]): string[] {
    const keywords = new Set<string>();

    dataset.forEach(entry => {
        // Extract from keywords column if exists
        if (entry.keywords) {
            const kws = entry.keywords.split(/[,;|]/).map(k => k.trim().toLowerCase());
            kws.forEach(k => k && keywords.add(k));
        }

        // Extract from message text
        const messageText = entry.message_text || entry.message || entry.text || entry.content || '';
        const words = messageText.toLowerCase().match(/\b\w{4,}\b/g) || [];

        // Add significant words (length > 3)
        words.forEach(word => {
            if (word.length > 3 && !['this', 'that', 'with', 'from', 'have'].includes(word)) {
                keywords.add(word);
            }
        });
    });

    return Array.from(keywords);
}

export function getCategoriesFromDataset(dataset: DatasetEntry[]): Map<string, number> {
    const categories = new Map<string, number>();

    dataset.forEach(entry => {
        const category = entry.category || entry.label || 'unknown';
        categories.set(category, (categories.get(category) || 0) + 1);
    });

    return categories;
}
