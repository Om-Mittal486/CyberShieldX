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


// Levenshtein distance for fuzzy matching
function levenshtein(a: string, b: string): number {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    // increment along the first column of each row
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    // increment each column in the first row
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    Math.min(
                        matrix[i][j - 1] + 1, // insertion
                        matrix[i - 1][j] + 1 // deletion
                    )
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

export function findSimilarMessages(inputText: string, dataset: DatasetEntry[]): DatasetEntry[] {
    const input = inputText.toLowerCase().trim();
    const matches: Array<{ entry: DatasetEntry; score: number }> = [];

    // Common stopwords to ignore even if > 2 chars (mostly English for now)
    const stopwords = new Set(['the', 'and', 'for', 'that', 'this', 'with', 'from']);

    dataset.forEach(entry => {
        // Get the message text from various possible column names
        const messageText = String(
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
        // Word overlap with Fuzzy Matching
        else {
            const inputWords = input.split(/\s+/).filter(w => w.length > 2 && !stopwords.has(w));
            const messageWords = messageText.split(/\s+/);

            let matchCount = 0;

            inputWords.forEach(inWord => {
                // Check for exact match or fuzzy match
                const found = messageWords.some(msgWord => {
                    if (msgWord.length <= 2) return false;

                    // Exact match
                    if (msgWord === inWord) return true;

                    // Fuzzy match for words >= 4 chars (allow 1 error per 4 chars approx)
                    // For short words (3-4 chars), allow 1 edit distance
                    // For longer words (>4 chars), allow 2 edit distance
                    if (Math.abs(msgWord.length - inWord.length) > 2) return false;

                    const dist = levenshtein(inWord, msgWord);
                    const maxLen = Math.max(inWord.length, msgWord.length);

                    if (maxLen <= 4) return dist <= 1;
                    return dist <= 2;
                });

                if (found) matchCount++;
            });

            if (inputWords.length > 0) {
                // Weighted score: (matches / total input words) * 70
                // We compare against input words to see how much of the USER'S query exists in the dataset
                score = (matchCount / inputWords.length) * 70;
            }
        }

        if (score > 30) { // Increased threshold slightly to reduce noise from weak fuzzy matches
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
        words.forEach((word: string) => {
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
