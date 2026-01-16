import { NextRequest } from 'next/server';
import { apiSuccess, apiError, handleApiError } from '@/lib/api-utils';
import rateLimit from '@/lib/rate-limit';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(request: NextRequest) {
    try {
        // 1. Rate Check
        const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
        if (!rateLimit.check(ip).success) return apiError('Rate limit exceeded', 429);

        // 2. Query Params
        const searchParams = request.nextUrl.searchParams;
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const severity = searchParams.get('severity'); // optional filter
        const offset = (page - 1) * limit;

        // 3. Build Query
        // Assuming 'analyses' table exists. 
        // We select * and count for pagination
        let query = supabase
            .from('analyses')
            .select('*', { count: 'exact' });

        if (severity) {
            query = query.eq('severity', severity);
        }

        // Order by newest first
        query = query
            .order('created_at', { ascending: false })
            .range(offset, offset + limit - 1);

        const { data, error, count } = await query;

        if (error) {
            throw error;
        }

        return apiSuccess(data, {
            pagination: {
                page,
                limit,
                total: count,
                totalPages: count ? Math.ceil(count / limit) : 0
            }
        });

    } catch (error) {
        return handleApiError(error);
    }
}
