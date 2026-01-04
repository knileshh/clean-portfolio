"use client";

import React, { useEffect, useState } from "react";

export function VisitorCounter() {
    const [count, setCount] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCount = () => {
            const storedCount = localStorage.getItem("portfolio_visitor_count");
            const hasVisited = localStorage.getItem("portfolio_has_visited");
            let currentCount = storedCount ? parseInt(storedCount, 10) : 14820;

            if (!hasVisited) {
                currentCount += 1;
                localStorage.setItem("portfolio_has_visited", "true");
                localStorage.setItem("portfolio_visitor_count", currentCount.toString());
            }
            setCount(currentCount);
            setLoading(false);
        };
        setTimeout(fetchCount, 500);
    }, []);

    if (loading) {
        return (
            <span className="font-mono text-[10px] text-technical-400 animate-pulse">
                SYNC_DB...
            </span>
        );
    }

    const formattedCount = count.toString().padStart(6, "0");

    return (
        <div className="flex flex-col items-start gap-1">
            <span className="font-mono text-[10px] text-technical-400 uppercase">
                Visitor_Log_ID
            </span>
            <div className="font-mono text-sm text-technical-900 tracking-wider">
                #{formattedCount}
            </div>
        </div>
    );
}
