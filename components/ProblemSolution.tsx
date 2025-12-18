"use client";

import { motion } from "framer-motion";

export function ProblemSolution() {
    return (
        <section className="py-24 bg-zinc-950/50 border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-red-400 font-mono text-sm tracking-wider uppercase mb-2 block">
                            El Problema
                        </span>
                        <h3 className="text-3xl font-bold mb-6 text-zinc-300">
                            Deuda Técnica y <br />
                            <span className="text-white">Procesos Manuales</span>
                        </h3>
                        <p className="text-muted text-lg leading-relaxed">
                            Las empresas latinoamericanas pierden millones en mantenimiento de sistemas legados y tareas operativas repetitivas. La falta de talento especializado y la complejidad de la IA frenan la innovación.
                        </p>
                    </motion.div>

                    {/* Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl rounded-3xl" />
                        <div className="relative border-l-2 border-white pl-8 py-2">
                            <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase mb-2 block">
                                La Solución
                            </span>
                            <h3 className="text-3xl font-bold mb-6 text-white">
                                ZCodex <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
                                    AI Agents & Automation
                                </span>
                            </h3>
                            <p className="text-zinc-300 text-lg leading-relaxed">
                                Implementamos fuerzas de trabajo digitales y modernizamos tu stack tecnológico con Agentes IA. Reducimos costos operativos hasta un 40% y aceleramos el time-to-market.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
