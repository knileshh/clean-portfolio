"use client";

import React from "react";
import { Project } from "@/types";
import { Github, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    data: Project;
}

export function ProjectCard({ data }: ProjectCardProps) {
    return (
        <div className="group relative bg-card border border-technical-200 transition-all duration-300 hover:border-technical-900">
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col">
                        <span className="font-mono text-[10px] uppercase text-technical-400 mb-1 tracking-wider">
                            Project // {data.tags[0]}
                        </span>
                        <h3 className="text-xl font-bold text-technical-900 group-hover:underline decoration-1 underline-offset-4">
                            {data.title}
                        </h3>
                    </div>

                    <div className="flex gap-3">
                        {data.links?.repo && (
                            <a
                                href={data.links.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-technical-400 hover:text-technical-900 transition-colors"
                            >
                                <Github size={18} strokeWidth={1.5} />
                            </a>
                        )}
                        {data.links?.demo && (
                            <a
                                href={data.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-technical-400 hover:text-technical-900 transition-colors"
                            >
                                <ArrowUpRight size={18} strokeWidth={1.5} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-technical-600 text-sm mb-6 leading-relaxed">
                    {data.description}
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {data.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="font-mono text-xs text-technical-500 relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-technical-300 before:rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
