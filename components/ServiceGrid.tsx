"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Bot,
    Database,
    Workflow,
    ShieldCheck,
    Code2,
    Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Cajas Negras de Modernización",
        slug: "modernizacion-legados",
        description: "Transformamos sistemas legados (COBOL, Monolitos) en microservicios escalables mediante IA generativa y análisis arquitectónico automatizado.",
        icon: Database,
        className: "md:col-span-2",
    },
    {
        title: "Desarrollo de Producto Digital",
        slug: "desarrollo-producto-digital",
        description: "Aplicaciones web y móviles a medida que resuelven problemas específicos donde el software genérico falla.",
        icon: Code2,
        className: "md:col-span-1",
    },
    {
        title: "Flujos Agénticos (Agentic AI)",
        slug: "flujos-agenticos",
        description: "Orquestación de agentes autónomos que planifican, ejecutan y validan tareas complejas.",
        icon: Bot,
        className: "md:col-span-1",
    },
    {
        title: "Automatización Inteligente",
        slug: "automatizacion-inteligente",
        description: "Integraciones avanzadas con n8n, Make y Zapier para eliminar el trabajo manual repetitivo.",
        icon: Workflow,
        className: "md:col-span-1",
    },
    {
        title: "Gobernanza ISO 42001",
        slug: "gobernanza-iso-42001",
        description: "Implementación de IA segura, ética y auditable. Cumplimiento normativo y protección de datos.",
        icon: ShieldCheck,
        className: "md:col-span-1",
    },
];

export function ServiceGrid() {
    return (
        <section id="soluciones" className="py-24 bg-black relative">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Nuestras Soluciones
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Combinamos ingeniería de software tradicional con la potencia de la IA agéntica para resultados exponenciales.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <Link
                            key={service.slug}
                            href={`/soluciones/${service.slug}`}
                            className={cn(
                                "block h-full group",
                                service.className
                            )}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20 p-8 hover:bg-zinc-900/40 transition-all duration-300 h-full"
                            >
                                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all" />

                                <service.icon className="w-10 h-10 text-white mb-6 group-hover:scale-110 transition-transform duration-300" />

                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-zinc-200">
                                    {service.title}
                                </h3>

                                <p className="text-muted leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
