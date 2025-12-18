"use client";

import { motion } from "framer-motion";
import { Lock, Globe2, TrendingUp } from "lucide-react";

const reasons = [
    {
        icon: Lock,
        title: "Seguridad ISO 42001",
        description: "Estándares internacionales de gestión de IA. Tu propiedad intelectual y datos están blindados con prácticas de DevSecOps de nivel bancario.",
    },
    {
        icon: Globe2,
        title: "Talento Nearshore",
        description: "Ingenieros en tu zona horaria, culturalmente alineados y potenciados por herramientas agénticas. Comunicación fluida en tiempo real.",
    },
    {
        icon: TrendingUp,
        title: "ROI Tangible",
        description: "No vendemos horas, vendemos resultados. Automatización que se paga sola en meses mediante reducción de OPEX y eficiencia.",
    },
];

export function WhyZCodex() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-[800px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Por qué <span className="text-white/60">ZCodex</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-2xl border border-white/10 text-white">
                                <reason.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">
                                {reason.title}
                            </h3>
                            <p className="text-muted leading-relaxed max-w-sm">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
