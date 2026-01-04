"use client";

import React from "react";
import { Experience } from "@/types";

interface ExperienceCardProps {
    data: Experience;
}

export function ExperienceCard({ data }: ExperienceCardProps) {
    return (
        <div className="relative pl-6 pb-12 last:pb-0 border-l border-dashed border-technical-300 ml-2">
            {/* Timeline Node */}
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-technical-50 border border-technical-900" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="text-lg font-bold text-technical-900 tracking-tight">{data.company}</h3>
                <span className="font-mono text-xs text-technical-500 bg-technical-100 px-2 py-0.5 rounded">{data.period}</span>
            </div>

            <div className="text-technical-600 font-medium mb-4 font-mono text-xs uppercase tracking-wide">
                {data.role}
            </div>

            <ul className="space-y-2">
                {data.description.map((item, idx) => (
                    <li key={idx} className="text-technical-600 text-sm leading-relaxed pl-4 relative before:content-['->'] before:absolute before:left-0 before:text-technical-300 before:font-mono before:text-xs">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
