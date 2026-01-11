"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Calendar, ArrowUpRight } from "lucide-react";

interface CalModalButtonProps {
    calLink: string;
}

export function CalModalButton({ calLink }: CalModalButtonProps) {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                theme: "auto",
                styles: { branding: { brandColor: "#171717" } },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    const openCalModal = async () => {
        const cal = await getCalApi();
        cal("modal", {
            calLink: calLink,
        });
    };

    return (
        <button type="button" onClick={openCalModal} className="block group w-full text-left relative cursor-pointer focus:outline-none focus:ring-1 focus:ring-technical-900 focus:ring-offset-2 rounded-none">
            {/* Hatched Shadow Layer */}
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[linear-gradient(45deg,#000000_25%,transparent_25%,transparent_50%,#000000_50%,#000000_75%,transparent_75%,transparent)] dark:bg-[linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_50%,#ffffff_50%,#ffffff_75%,transparent_75%,transparent)] bg-[length:4px_4px] opacity-0 transition-opacity duration-300 group-hover:opacity-20" />

            {/* Main Card */}
            <div className="h-full relative border border-technical-300 dark:border-technical-400 p-6 transition-all duration-300 hover:border-technical-900 dark:hover:border-technical-800 group-hover:-translate-y-1 group-hover:-translate-x-1 bg-white dark:bg-neutral-950">
                <div className="absolute top-0 right-0 p-6">
                    <ArrowUpRight size={20} className="text-technical-400 transition-transform duration-300 group-hover:text-technical-900 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <div className="flex flex-col h-full justify-between">
                    <div className="p-2 w-fit bg-technical-100 rounded-sm text-technical-800 mb-4">
                        <Calendar size={20} />
                    </div>

                    <div>
                        <h4 className="font-bold text-lg text-technical-900 mb-1">Book a Call</h4>
                        <p className="text-sm text-technical-500">Available for new projects</p>
                    </div>
                </div>
            </div>
        </button>
    );
}
