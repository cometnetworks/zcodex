"use client";

import { motion } from "framer-motion";
import { Building2, Zap, Truck, Router, GraduationCap, Banknote } from "lucide-react";
import { cn } from "@/lib/utils";

const industries = [
    {
        category: "Fintech & Startups",
        icon: Banknote,
        clients: ["Kavak", "Edenred", "Albo"],
        gradient: "from-emerald-500/20 to-emerald-900/10"
    },
    {
        category: "Retail y Consumo",
        icon: Building2,
        clients: ["FEMSA"],
        gradient: "from-blue-500/20 to-blue-900/10"
    },
    {
        category: "Energía",
        icon: Zap,
        clients: ["Shell"],
        gradient: "from-yellow-500/20 to-yellow-900/10"
    },
    {
        category: "Logística",
        icon: Truck,
        clients: ["Estafeta"],
        gradient: "from-orange-500/20 to-orange-900/10"
    },
    {
        category: "Telecomunicaciones",
        icon: Router,
        clients: ["Izzi", "Totalplay"],
        gradient: "from-purple-500/20 to-purple-900/10"
    },
    {
        category: "Educación Superior",
        icon: GraduationCap,
        clients: ["Universidad Iberoamericana", "Anáhuac Mayab"],
        gradient: "from-rose-500/20 to-rose-900/10"
    }
];

export function Industries() {
    return (
        <section id="industrias" className="py-24 bg-black relative border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Impulsando a los líderes de <br />
                        <span className="text-zinc-500">cada industria</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group p-8 rounded-2xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all overflow-hidden"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className={cn(
                                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                                industry.gradient
                            )} />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                                        <industry.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="font-bold text-white text-lg tracking-tight">
                                        {industry.category}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {industry.clients.map((client) => (
                                        <span
                                            key={client}
                                            className="px-3 py-1.5 rounded-md bg-black/50 border border-white/10 text-zinc-300 text-sm font-medium"
                                        >
                                            {client}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
