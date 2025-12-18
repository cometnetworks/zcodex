"use client";

import Link from "next/link";
import Image from "next/image";
import { Copy, Menu, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-black/80 backdrop-blur-md border-white/10 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-10 h-10 overflow-hidden rounded-sm transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src="/ZCO-logo.jpg"
                            alt="ZCOdex Logo"
                            fill
                            className="object-cover bg-white p-0.5" // White bg for contrast if logo is transparent/black
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
                        ZCOdex
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {["Soluciones", "Industrias", "Proceso"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-muted hover:text-white transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <Link
                        href="https://calendar.google.com" // Placeholder
                        target="_blank"
                        className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-bold rounded-sm hover:bg-zinc-200 transition-all transform hover:scale-105"
                    >
                        <Calendar className="w-4 h-4" />
                        Agenda Diagnóstico
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white p-2"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden p-6 flex flex-col gap-4 shadow-2xl"
                    >
                        {["Soluciones", "Industrias", "Proceso"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-medium text-muted hover:text-white"
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            href="https://calendar.google.com"
                            className="mt-4 flex items-center justify-center gap-2 px-5 py-3 bg-white text-black font-bold rounded-sm"
                        >
                            <Calendar className="w-4 h-4" />
                            Agenda Diagnóstico
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
