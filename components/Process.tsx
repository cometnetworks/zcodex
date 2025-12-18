"use client";

import { motion } from "framer-motion";
import { Search, Bot, Rocket, ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Diagnóstico de Legados",
        description: "Analizamos tu deuda técnica y procesos manuales para identificar el ROI más alto.",
        icon: Search
    },
    {
        number: "02",
        title: "Despliegue de Agentes",
        description: "Configuramos 'Pods' de IA que asumen tareas repetitivas en semanas, no meses.",
        icon: Bot
    },
    {
        number: "03",
        title: "Escalamiento Autónomo",
        description: "Tu fuerza de trabajo digital aprende y escala con tu demanda operativa.",
        icon: Rocket
    }
];

export function Process() {
    return (
        <section id="proceso" className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-4 block">
                        Nuestro Método
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto">
                        Implementación Agil en <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">3 Fases</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative group"
                            >
                                {/* Step Marker */}
                                <div className="flex items-center justify-center w-12 h-12 bg-black border border-white/20 rounded-full text-white font-bold mb-8 relative z-10 mx-auto group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                    {step.number}
                                </div>

                                <div className="text-center space-y-4 px-4">
                                    <div className="inline-flex p-3 rounded-full bg-white/5 border border-white/10 mb-2">
                                        <step.icon className="w-6 h-6 text-white" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white">
                                        {step.title}
                                    </h3>

                                    <p className="text-zinc-400 leading-relaxed text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
