import { NextResponse } from 'next/server';

export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
    meta?: any;
}

export function apiSuccess<T>(data: T, meta?: any): NextResponse<ApiResponse<T>> {
    return NextResponse.json(
        {
            success: true,
            data,
            meta,
        },
        { status: 200 }
    );
}

export function apiError(
    message: string,
    statusCode: number = 400,
    details?: any
): NextResponse<ApiResponse> {
    return NextResponse.json(
        {
            success: false,
            error: message,
            meta: details,
        },
        { status: statusCode }
    );
}

export async function handleApiError(error: unknown): Promise<NextResponse<ApiResponse>> {
    console.error('API Error:', error);

    if (error instanceof Error) {
        return apiError(error.message, 500);
    }

    return apiError('An unexpected error occurred', 500);
}
