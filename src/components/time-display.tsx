"use client";

import { useEffect, useState } from "react";

export function TimeDisplay() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        // Current Bangalore time
        const updateTime = () => {
            const now = new Date();

            // Calculate Bangalore Time
            const bangaloreTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

            // Format: 01:23 PM
            const formattedTime = bangaloreTime.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            });
            setTime(formattedTime);
        };

        updateTime();
        const interval = setInterval(updateTime, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    if (!time) return null; // Prevent hydration mismatch by not rendering initially on server

    // Split time and period (AM/PM)
    const [timeStr, period] = time.split(' ');

    return (
        <div className="flex flex-col items-start gap-1">
            <span className="font-mono text-[10px] text-technical-400 uppercase">
                BENGALURU, IN
            </span>
            <a
                href="https://www.timeanddate.com/worldclock/india/bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-technical-900 tracking-wider hover:text-technical-600 transition-colors group"
            >
                <span className="group-hover:underline decoration-technical-900 underline-offset-2">
                    {timeStr} <span className="-ml-1">{period}</span>
                </span>
                <span className="text-[10px] ml-0.5 text-technical-500 font-medium">IST</span>
            </a>
        </div >
    );
}
