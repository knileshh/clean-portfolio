"use client";

import React from "react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
    { href: "#", label: "Home" },
    { href: "#experience", label: "Exp" },
    { href: "#projects", label: "Project" },
    { href: "#blog", label: "Blog" },
];

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-technical-200 px-6 py-4 md:px-12 flex items-center justify-between transition-colors duration-300">
            <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="font-mono text-xs font-medium text-technical-500 uppercase tracking-wider hover:text-technical-900 transition-colors relative group"
                    >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-technical-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </a>
                ))}
            </div>

            <ThemeToggle />
        </nav>
    );
}
