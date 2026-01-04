"use client";

import React from "react";

interface SectionHeadingProps {
    number: string;
    title: string;
}

export function SectionHeading({ number, title }: SectionHeadingProps) {
    return (
        <div className="flex items-center gap-4 mb-10 pt-4">
            <span className="font-mono text-sm font-bold text-technical-400 select-none border border-technical-200 px-2 py-0.5 rounded-sm bg-technical-50">
                {number}
            </span>
            <h2 className="text-lg font-semibold tracking-tight text-technical-900 uppercase">
                {title}
            </h2>
            <div className="h-px bg-technical-200 flex-grow ml-2"></div>
        </div>
    );
}
