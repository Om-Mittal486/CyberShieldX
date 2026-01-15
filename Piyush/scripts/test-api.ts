import fetch from 'node-fetch'; // Standard fetch in Node 18+ but using import for script

const BASE_URL = 'http://localhost:3000/api';

async function testApi() {
    console.log('--- Starting API Verification ---');

    try {
        // 1. Test Analyze
        console.log('\n1. Testing POST /api/analyze...');
        const analyzeRes = await fetch(`${BASE_URL}/analyze`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: 'You are stupid and I hate you' })
        });
        const analyzeData = await analyzeRes.json();
        console.log('Status:', analyzeRes.status);
        console.log('Result:', analyzeData.success ? 'SUCCESS' : 'FAILED');
        if (analyzeData.success) {
            console.log('Toxicity:', analyzeData.data.toxicityScore);
        } else {
            console.log('Error:', analyzeData.error);
        }

        // 2. Test Analyze Image (Mock Base64)
        console.log('\n2. Testing POST /api/analyze-image...');
        // Tiny 1x1 png base64
        const mockImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
        const imgRes = await fetch(`${BASE_URL}/analyze-image`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image: mockImage })
        });
        const imgData = await imgRes.json();
        console.log('Status:', imgRes.status);
        // This relies on Tesseract so might return "No text found" for a blank pixel, which is correct behavior (400)
        console.log('Result:', imgData.success ? 'SUCCESS' : 'FAILED (Expected if no text)');

        // 3. Test Generate Report
        console.log('\n3. Testing POST /api/generate-report...');
        const reportRes = await fetch(`${BASE_URL}/generate-report`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                reportData: {
                    id: 'test-123',
                    message: { content: 'Test message' },
                    severity: 'high'
                }
            })
        });
        const reportData = await reportRes.json();
        console.log('Status:', reportRes.status);
        console.log('Result:', reportData.success ? 'SUCCESS' : 'FAILED');

        // 4. Test Save Evidence
        console.log('\n4. Testing POST /api/save-evidence...');
        const saveRes = await fetch(`${BASE_URL}/save-evidence`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                file: mockImage,
                fileName: 'test.png',
                metadata: { source: 'test' }
            })
        });
        const saveData = await saveRes.json();
        console.log('Status:', saveRes.status);
        console.log('Result:', saveData.success ? 'SUCCESS' : 'FAILED');

        // 5. Test History
        console.log('\n5. Testing GET /api/history...');
        const historyRes = await fetch(`${BASE_URL}/history?limit=5`);
        const historyData = await historyRes.json();
        console.log('Status:', historyRes.status);
        console.log('Result:', historyData.success ? 'SUCCESS' : 'FAILED');

    } catch (e) {
        console.error('Test Failed:', e);
    }
}

testApi();
