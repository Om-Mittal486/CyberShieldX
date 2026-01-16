import { NextRequest } from 'next/server';
import { apiSuccess, apiError, handleApiError } from '@/lib/api-utils';
import rateLimit from '@/lib/rate-limit';
import { MessageAnalyzer } from '@/lib/analyzer/MessageAnalyzer';
// import { supabase } from '@/lib/supabase/client'; // Auth check if needed

const analyzer = new MessageAnalyzer();

export async function POST(request: NextRequest) {
    try {
        // 1. Rate Limiting
        const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
        const limitStatus = rateLimit.check(ip);

        if (!limitStatus.success) {
            return apiError('Rate limit exceeded', 429, {
                reset: limitStatus.reset
            });
        }

        // 2. Auth Check (Simplest: Check for Supabase Session Cookie or Header)
        // For now, we'll skip strict server-side auth validation to allow easier testing,
        // but in prod, we'd verify the JWT from 'authorization' header.
        // const authHeader = request.headers.get('authorization');
        // if (!authHeader) return apiError('Unauthorized', 401);

        // 3. Parse Body
        const body = await request.json();
        const { message } = body;

        if (!message || typeof message !== 'string') {
            return apiError('Message is required and must be a string', 400);
        }

        // 4. Analyze
        const result = await analyzer.analyze(message);

        // 5. Return Response
        return apiSuccess(result);

    } catch (error) {
        return handleApiError(error);
    }
}
