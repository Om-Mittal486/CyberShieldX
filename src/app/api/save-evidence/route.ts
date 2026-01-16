import { NextRequest } from 'next/server';
import { apiSuccess, apiError, handleApiError } from '@/lib/api-utils';
import rateLimit from '@/lib/rate-limit';
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// Ideally use Service Role Key for writes if RLS is strict, but stick to ANON for now if policies allow
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: NextRequest) {
    try {
        // 1. Rate Check
        const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
        if (!rateLimit.check(ip).success) return apiError('Rate limit exceeded', 429);

        // 2. Parse Body
        // Expecting: file content (base64) OR just metadata if client uploaded directly.
        // The requirement says "Upload to Supabase Storage", so we assume API handles upload.
        const body = await request.json();
        const { file, fileName, metadata } = body;

        // Validation
        if (!file || !fileName) {
            return apiError('File (base64) and fileName are required', 400);
        }

        const evidenceId = uuidv4();
        // Sanitize filename or just use UUID
        const storagePath = `${evidenceId}-${fileName}`;

        // 3. Upload to Storage
        const base64Data = file.replace(/^data:.*,/, ""); // strip prefix
        const buffer = Buffer.from(base64Data, 'base64');

        const { error: uploadError } = await supabase
            .storage
            .from('evidence')
            .upload(storagePath, buffer, {
                contentType: 'application/octet-stream', // or detect mime type
                upsert: false
            });

        if (uploadError) {
            // console.error('Upload Error', uploadError);
            return apiError('Failed to upload file', 500, uploadError);
        }

        // 4. Save Metadata to DB
        const { error: dbError } = await supabase
            .from('evidence')
            .insert({
                id: evidenceId,
                file_path: storagePath,
                metadata: metadata || {},
                created_at: new Date().toISOString()
            });

        if (dbError) {
            return apiError('Failed to save metadata', 500, dbError);
        }

        return apiSuccess({ evidenceId, path: storagePath });

    } catch (error) {
        return handleApiError(error);
    }
}
