import { NextRequest, NextResponse } from "next/server";
import { getRedis, REDIS_KEYS, DEBOUNCE_WINDOW_SECONDS } from "@/lib/redis";
import { headers } from "next/headers";
import crypto from "crypto";

// Helper to generate a unique session identifier from IP + User Agent
function getSessionId(ip: string, userAgent: string): string {
    const data = `${ip}-${userAgent}`;
    return crypto.createHash("sha256").update(data).digest("hex").slice(0, 16);
}

// GET: Fetch current view count
export async function GET() {
    try {
        const redis = getRedis();
        const count = await redis.get<number>(REDIS_KEYS.TOTAL_VIEWS);
        return NextResponse.json({ count: count || 0 });
    } catch (error) {
        console.error("Error fetching view count:", error);
        // Don't expose internal errors to client
        return NextResponse.json({ count: 0 }, { status: 500 });
    }
}

// POST: Increment view count (with debouncing)
export async function POST(request: NextRequest) {
    try {
        const redis = getRedis();
        const headersList = await headers();

        // Get IP address (works on Vercel and locally)
        const forwardedFor = headersList.get("x-forwarded-for");
        const ip = forwardedFor?.split(",")[0] || request.headers.get("x-real-ip") || "unknown";
        const userAgent = headersList.get("user-agent") || "unknown";

        // Generate session identifier (hashed for privacy)
        const sessionId = getSessionId(ip, userAgent);
        const debounceKey = REDIS_KEYS.VISITOR_DEBOUNCE(sessionId);

        // Try to set debounce key (only succeeds if key doesn't exist)
        // NX = only set if Not eXists
        // EX = set Expiration in seconds
        const isNewVisit = await redis.set(debounceKey, "1", {
            nx: true,
            ex: DEBOUNCE_WINDOW_SECONDS,
        });

        let count: number;

        if (isNewVisit) {
            // New visit within debounce window - increment counter
            count = await redis.incr(REDIS_KEYS.TOTAL_VIEWS);
        } else {
            // Same visitor within debounce window - just fetch current count
            count = (await redis.get<number>(REDIS_KEYS.TOTAL_VIEWS)) || 0;
        }

        // Only return the count - no debug info in production
        return NextResponse.json({ count });
    } catch (error) {
        console.error("Error updating view count:", error);
        // Don't expose internal errors to client
        return NextResponse.json({ count: 0 }, { status: 500 });
    }
}
