"use client";

import React from "react";

// Skills grouped by category
const skillGroups = {
    "Lang": ["TypeScript", "Java", "Python"],
    "Backend": ["Node.js", "Express.js", "FastAPI"],
    "Frontend": ["Next.js", "React", "Tailwind"],
    "Database": ["Postgres", "MongoDB", "Redis", "Drizzle"],
    "Cloud": ["GCP", "AWS", "Azure", "Cloudflare"],
    "DevOps": ["Linux", "Docker", "Git", "GitHub"],
    "AI": ["AI SDK", "OpenAI SDK", "Antigravity"],
};

export function SkillChart() {
    return (
        <div className="w-full mt-2">
            <div className="grid gap-3">
                {Object.entries(skillGroups).map(([category, skills]) => (
                    <div key={category} className="flex items-start justify-between group">
                        <span className="font-mono text-sm text-technical-800 font-medium">
                            {skills.join(", ")}
                        </span>

                        {/* Dashed Leader */}
                        <div className="flex-grow mx-3 border-b border-dotted border-technical-300 mt-2"></div>

                        <span className="font-mono text-xs text-technical-400 shrink-0 uppercase tracking-wider">
                            {category}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
