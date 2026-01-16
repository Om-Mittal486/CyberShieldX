import { NextRequest } from 'next/server';
import { apiSuccess, apiError, handleApiError } from '@/lib/api-utils';
import rateLimit from '@/lib/rate-limit';
import { MessageAnalyzer } from '@/lib/analyzer/MessageAnalyzer';
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';
import Tesseract from 'tesseract.js';

// Initialize Supabase Admin client for storage uploads (if needed) or just use standard client
// Depending on RLS, service role key might be needed for server-side uploads if user isn't authenticated contextually
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const analyzer = new MessageAnalyzer();

export async function POST(request: NextRequest) {
    try {
        // 1. Rate Limiting
        const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
        const limitStatus = rateLimit.check(ip);

        if (!limitStatus.success) {
            return apiError('Rate limit exceeded', 429, { reset: limitStatus.reset });
        }

        // 2. Parse request
        const body = await request.json();
        const { image } = body; // Expecting base64 string

        if (!image || typeof image !== 'string') {
            return apiError('Image (base64) is required', 400);
        }

        // 3. Process Image (OCR) with Tesseract.js
        // Convert base64 to buffer if needed, but Tesseract recognizes base64 uri
        const { data: { text } } = await Tesseract.recognize(image, 'eng');

        if (!text || !text.trim()) {
            return apiError('No text detected in image', 400);
        }

        // 4. Analyze Text
        const analysisResult = await analyzer.analyze(text);

        // 5. Store Evidence (Metadata + potentially the image itself)
        // Uploading image to Supabase Storage 'evidence' bucket
        const evidenceId = uuidv4();
        const fileName = `${evidenceId}.png`;

        // Convert base64 to Blob/Buffer for upload
        // base64 string usually comes as "data:image/png;base64,..."
        const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
        const buffer = Buffer.from(base64Data, 'base64');

        const { error: uploadError } = await supabase
            .storage
            .from('evidence')
            .upload(fileName, buffer, {
                contentType: 'image/png'
            });

        if (uploadError) {
            console.error('Evidence upload failed:', uploadError);
            // Continue anyway? Or fail? Let's return the analysis but warn.
        }

        // Insert record into evidence table
        const { error: dbError } = await supabase
            .from('evidence')
            .insert({
                id: evidenceId,
                file_path: fileName,
                extracted_text: text,
                analysis_summary: analysisResult, // storing JSON
                created_at: new Date().toISOString()
            });

        if (dbError) {
            console.error('Evidence DB insert failed:', dbError);
        }

        return apiSuccess({
            text,
            analysis: analysisResult,
            evidenceId,
            uploaded: !uploadError && !dbError
        });

    } catch (error) {
        return handleApiError(error);
    }
}
