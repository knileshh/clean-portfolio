"use client";

import React, { useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Audio Reference for typewriter click
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Initialize audio
    useEffect(() => {
        setMounted(true);

        // Use local typewriter click sound
        const clickAudio = new Audio("/typewriter-click.wav");
        clickAudio.volume = 0.5;
        clickAudio.load();

        audioRef.current = clickAudio;
    }, []);

    const playClickSound = () => {
        const audio = audioRef.current;
        if (!audio) return;

        // Reset and play
        audio.currentTime = 0;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch((error) => {
                console.warn("Audio playback failed:", error);
            });
        }
    };

    const toggleTheme = (e: React.MouseEvent) => {
        const newIsDark = resolvedTheme === "light";
        const newTheme = newIsDark ? "dark" : "light";

        // Play click sound on interaction
        playClickSound();

        // Check if View Transitions API is supported
        if (!document.startViewTransition) {
            setTheme(newTheme);
            return;
        }

        const x = e.clientX;
        const y = e.clientY;
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

        const transition = document.startViewTransition(() => {
            setTheme(newTheme);
        });

        transition.ready.then(() => {
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
            ];

            document.documentElement.animate(
                {
                    clipPath: clipPath,
                },
                {
                    duration: 500,
                    easing: "ease-in-out",
                    pseudoElement: "::view-transition-new(root)",
                }
            );
        });
    };

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <button className="p-2 rounded-full hover:bg-technical-100 text-technical-600 transition-colors">
                <Sun size={18} />
            </button>
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-technical-100 text-technical-600 transition-colors"
            aria-label="Toggle Theme"
        >
            {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}
