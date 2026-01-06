import React from "react";

export function Logo() {
    return (
        <div className="relative w-10 h-10 flex items-center justify-center border border-technical-900 dark:border-technical-100 bg-white dark:bg-technical-950 overflow-hidden group transition-all duration-300 hover:scale-105">
            {/* Hatched Background */}
            <div className="absolute inset-0 bg-hatch-pattern opacity-30 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Letter */}
            <span className="relative z-10 font-bold text-xl text-technical-900 dark:text-technical-100 font-mono">N</span>
        </div>
    );
}
