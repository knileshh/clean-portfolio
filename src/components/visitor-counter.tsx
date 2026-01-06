"use client";

import React, { useEffect, useState, useRef } from "react";

interface ViewCountResponse {
    count: number;
}

// Module-level flag to prevent duplicate requests across component remounts
let hasTrackedVisit = false;

export function VisitorCounter() {
    // Start with 0 to prevent layout shift
    const [count, setCount] = useState<number>(0);
    const [loading, setLoading] = useState(true);
    const hasFetched = useRef(false);

    useEffect(() => {
        // Prevent duplicate requests from React strict mode or remounts
        if (hasFetched.current || hasTrackedVisit) {
            // If already tracked, just fetch the current count without POST
            const fetchCount = async () => {
                try {
                    const response = await fetch("/api/views");
                    if (response.ok) {
                        const data: ViewCountResponse = await response.json();
                        setCount(data.count);
                    }
                } catch {
                    // Silent fail - keep showing 0
                } finally {
                    setLoading(false);
                }
            };
            fetchCount();
            return;
        }

        hasFetched.current = true;
        hasTrackedVisit = true;

        const trackVisit = async () => {
            try {
                // POST to increment (with debouncing on the server)
                const response = await fetch("/api/views", {
                    method: "POST",
                });

                if (!response.ok) {
                    throw new Error("Failed to track visit");
                }

                const data: ViewCountResponse = await response.json();
                setCount(data.count);
            } catch (err) {
                console.error("Error tracking visit:", err);
                // Fallback: try to at least get the current count
                try {
                    const fallbackResponse = await fetch("/api/views");
                    if (fallbackResponse.ok) {
                        const fallbackData: ViewCountResponse = await fallbackResponse.json();
                        setCount(fallbackData.count);
                    }
                } catch {
                    // Keep showing 0 on complete failure
                }
            } finally {
                setLoading(false);
            }
        };

        // Small delay to ensure smooth page load
        const timer = setTimeout(trackVisit, 300);
        return () => clearTimeout(timer);
    }, []);

    const formattedCount = count.toString().padStart(6, "0");

    return (
        <div className="flex flex-col items-start gap-1">
            <span className="font-mono text-[10px] text-technical-400 uppercase">
                Visitor_Count
            </span>
            <div className="font-mono text-sm text-technical-900 tracking-wider">
                <span className={loading ? "animate-pulse" : ""}>#{formattedCount}</span>
            </div>
        </div>
    );
}
