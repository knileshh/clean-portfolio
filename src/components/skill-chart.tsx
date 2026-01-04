"use client";

import React from "react";

const skills = [
    { name: "Node.js", category: "Backend" },
    { name: "TypeScript", category: "Lang" },
    { name: "Express.js", category: "Framework" },
    { name: "Next.js", category: "Fullstack" },
    { name: "Docker", category: "DevOps" },
    { name: "Postgres", category: "Database" },
    { name: "Google Cloud", category: "Cloud" },
];

export function SkillChart() {
    return (
        <div className="w-full mt-2">
            <div className="grid gap-3">
                {skills.map((skill, index) => (
                    <div key={index} className="flex items-end justify-between group">
                        <span className="font-mono text-sm text-technical-800 font-medium shrink-0">
                            {skill.name}
                        </span>

                        {/* Dashed Leader */}
                        <div className="flex-grow mx-3 border-b border-dotted border-technical-300 mb-1.5"></div>

                        <span className="font-mono text-xs text-technical-400 shrink-0 uppercase tracking-wider">
                            {skill.category}
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-8 p-4 border border-technical-200 bg-technical-50 font-mono text-xs text-technical-500 leading-relaxed">
                <span className="text-technical-900 font-bold">root@portfolio:~$</span> echo $STACK_OVERVIEW<br />
                Loaded core modules: Node.js runtime, Type-safe architecture, Containerization, and Cloud-native deployment protocols.
            </div>
        </div>
    );
}
