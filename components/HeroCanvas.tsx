"use client";

import { useEffect, useRef } from "react";

export function HeroCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptLoaded = useRef(false);

    useEffect(() => {
        if (scriptLoaded.current) return;

        // Remove existing script if any to prevent duplicates on navigation
        // although with isInitialized check in the script itself it handles it.

        // Create script element
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.3/dist/unicornStudio.umd.js";
        script.async = true;

        script.onload = () => {
            // @ts-ignore
            if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
                // @ts-ignore
                UnicornStudio.init();
                // @ts-ignore
                window.UnicornStudio.isInitialized = true;
            }
        };

        document.body.appendChild(script);
        scriptLoaded.current = true;

        // Cleanup not strictly necessary for global script but good practice? 
        // Unicorn studio attaches to the data-us-project elements.
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
            <div
                data-us-project="E1CWZj9CW9dIx6Xo8Yiu"
                style={{ width: '100%', height: '100%' }}
            ></div>
            <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for text readability */}
        </div>
    );
}
