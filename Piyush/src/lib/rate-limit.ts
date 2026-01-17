export interface RateLimitConfig {
    interval: number; // in milliseconds
    uniqueTokenPerInterval: number; // Max requests per interval
}

export interface RateLimitResult {
    success: boolean;
    limit: number;
    remaining: number;
    reset: number;
}

const LRU_CACHE_SIZE = 500;

export class RateLimiter {
    private tokenCache: Map<string, number[]>;
    private config: RateLimitConfig;

    constructor(config: RateLimitConfig) {
        this.config = config;
        this.tokenCache = new Map();
    }

    public check(token: string): RateLimitResult {
        const NOW = Date.now();
        const tokenCount = this.tokenCache.get(token) || [0];

        // Clean up old requests inside the array
        // Store format: [unused_index, request_time1, request_time2, ...] 
        // Actually simpler: just store timestamps of requests.

        let currentUsage = this.tokenCache.get(token) || [];

        // Filter out timestamps older than the interval
        currentUsage = currentUsage.filter(timestamp => NOW - timestamp < this.config.interval);

        const isRateLimited = currentUsage.length >= this.config.uniqueTokenPerInterval;

        if (!isRateLimited) {
            currentUsage.push(NOW);
            this.tokenCache.set(token, currentUsage);

            // Simple LRU-like cleanup if too big
            if (this.tokenCache.size > LRU_CACHE_SIZE) {
                const firstKey = this.tokenCache.keys().next().value;
                if (firstKey) this.tokenCache.delete(firstKey);
            }
        }

        return {
            success: !isRateLimited,
            limit: this.config.uniqueTokenPerInterval,
            remaining: Math.max(0, this.config.uniqueTokenPerInterval - currentUsage.length),
            reset: NOW + this.config.interval
        };
    }
}

// Global instance for simple in-memory caching across hot-reloads in dev
// In production serverless/edge, this resets per instance start.
const globalLimiter = new RateLimiter({
    interval: 60 * 1000, // 60 seconds
    uniqueTokenPerInterval: 20, // 20 requests per minute
});

export default globalLimiter;
