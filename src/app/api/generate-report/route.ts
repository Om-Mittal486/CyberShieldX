import { NextRequest } from 'next/server';
import { apiSuccess, apiError, handleApiError } from '@/lib/api-utils';
import rateLimit from '@/lib/rate-limit';
import { createClient } from '@supabase/supabase-js';
import { ReportGenerator } from '@/lib/pdf/ReportGenerator';
import { ReportData } from '@/types';
import { v4 as uuidv4 } from 'uuid';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: NextRequest) {
    try {
        // 1. Rate Check
        const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
        if (!rateLimit.check(ip).success) return apiError('Rate limit exceeded', 429);

        // 2. Parse Body
        const body = await request.json();
        const { reportData } = body as { reportData: ReportData };

        if (!reportData) {
            return apiError('reportData is required', 400);
        }

        // 3. Generate PDF
        // Note: ReportGenerator needs to be slightly adapted for server-side if it relies on browser APIs.
        // Assuming ReportGenerator is pure jsPDF, we can use it. 
        // We need to modify ReportGenerator to return the buffer instead of saving.
        const generator = new ReportGenerator();
        // We will call a new method 'generateBuffer' or similar if we added it.
        // Since we haven't added it yet, let's assume we will add it in the next step.
        const pdfBuffer = await generator.generateBuffer(reportData);

        const buffer = Buffer.from(pdfBuffer);

        // 4. Upload to Supabase
        const reportId = reportData.id || uuidv4();
        const fileName = `reports/${reportId}_${Date.now()}.pdf`;

        const { error: uploadError } = await supabase
            .storage
            .from('reports')
            .upload(fileName, buffer, {
                contentType: 'application/pdf'
            });

        if (uploadError) {
            console.error('Upload error:', uploadError);
            return apiError('Failed to upload report', 500, uploadError);
        }

        // 5. Get Public URL
        const { data: publicUrlData } = supabase
            .storage
            .from('reports')
            .getPublicUrl(fileName);

        // 6. Log Generation
        await supabase.from('reports').insert({
            id: reportId,
            url: publicUrlData.publicUrl,
            created_at: new Date().toISOString(),
            metadata: reportData
        });

        return apiSuccess({
            reportId,
            url: publicUrlData.publicUrl,
            fileName
        });

    } catch (error) {
        return handleApiError(error);
    }
}
