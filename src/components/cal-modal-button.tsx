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
        <button onClick={openCalModal} className="block group w-full text-left">
            <div className="h-full border border-technical-200 bg-card p-6 transition-all hover:border-technical-900 hover:shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-technical-100 rounded-sm text-technical-800">
                        <Calendar size={20} />
                    </div>
                    <ArrowUpRight size={16} className="text-technical-400 group-hover:text-technical-900" />
                </div>
                <h4 className="font-bold text-technical-900">Book a Call</h4>
                <p className="text-sm text-technical-500 mt-1">Schedule a meeting via Cal.com</p>
            </div>
        </button>
    );
}
