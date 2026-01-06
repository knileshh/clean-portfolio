import { Redis } from "@upstash/redis";

// Lazy initialization - creates client only when first used
// This ensures env vars are loaded before client creation
let redisClient: Redis | null = null;

export function getRedis(): Redis {
    if (!redisClient) {
        const url = process.env.UPSTASH_REDIS_REST_URL;
        const token = process.env.UPSTASH_REDIS_REST_TOKEN;

        if (!url || !token) {
            throw new Error(
                `Missing Upstash Redis credentials. ` +
                `UPSTASH_REDIS_REST_URL: ${url ? "set" : "MISSING"}, ` +
                `UPSTASH_REDIS_REST_TOKEN: ${token ? "set" : "MISSING"}`
            );
        }

        redisClient = new Redis({ url, token });
    }
    return redisClient;
}

// Keys used in the app
export const REDIS_KEYS = {
    TOTAL_VIEWS: "portfolio:total_views",
    VISITOR_DEBOUNCE: (sessionId: string) => `portfolio:visitor:${sessionId}`,
} as const;

// Debounce window in seconds (1 hour = 3600 seconds)
export const DEBOUNCE_WINDOW_SECONDS = 60 * 60; // 1 hour
