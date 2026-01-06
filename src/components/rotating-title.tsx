"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const titles = [
    "Backend Engineer",
    "AI Systems Engineer",
    "System Designer",
    "Open Source Contributor",
];

export function RotatingTitle() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-6 overflow-hidden flex items-center">
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1], // "Expo" ease - snappy start, smooth end
                        opacity: { duration: 0.2 } // Fade in slightly faster for smoothness
                    }}
                    className="font-mono text-base text-technical-500 block absolute inset-0 leading-6"
                >
                    {titles[index]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
}
