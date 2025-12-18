import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { ShieldCheck, Lock, FileSearch, Scale } from "lucide-react";

export default function IsoCertificationPage() {
    return (
        <main className="min-h-screen bg-black text-foreground selection:bg-white/20">
            <Navbar />

            <section className="pt-32 pb-12 px-6 container mx-auto max-w-4xl">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-6">
                        <ShieldCheck className="w-4 h-4" />
                        Compromiso de Seguridad
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                        Declaración de Conformidad <br />
                        <span className="text-zinc-500">ISO/IEC 42001</span>
                    </h1>
                    <p className="text-xl text-muted leading-relaxed">
                        En ZCOdex, entendemos que la Inteligencia Artificial en entornos corporativos requiere más que código funcional; requiere una gestión de riesgos rigurosa, ética y auditable.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                        <Lock className="w-8 h-8 text-white mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Seguridad por Diseño</h3>
                        <p className="text-muted">
                            Nuestros frameworks de agentes implementan "guardrails" de seguridad que impiden la ejecución de comandos no autorizados o la exfiltración de datos sensibles.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                        <FileSearch className="w-8 h-8 text-white mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Trazabilidad Total</h3>
                        <p className="text-muted">
                            Cada decisión tomada por un agente de ZCOdex es registrada (logged) con explicabilidad, permitiendo auditorías forenses completas del comportamiento de la IA.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                        <Scale className="w-8 h-8 text-white mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Mitigación de Sesgos</h3>
                        <p className="text-muted">
                            Evaluamos continuamente nuestros modelos para detectar y reducir sesgos algorítmicos que pudieran afectar la equidad en procesos de RRHH o Scoring Crediticio.
                        </p>
                    </div>
                </div>

                <div className="prose prose-invert prose-lg text-muted border-t border-white/10 pt-12">
                    <h3>Nuestro Roadmap de Certificación</h3>
                    <p>Actualmente, ZCOdex opera bajo los lineamientos del estándar ISO/IEC 42001:2023 "Information technology — Artificial intelligence — Management system". Estamos en proceso de auditoría externa para obtener la certificación formal en Q4 2026.</p>
                    <p>Para los clientes que requieren cumplimiento normativo estricto (Fintech, Salud), ofrecemos entornos dedicados que pueden ser auditados independientemente.</p>
                </div>
            </section>

            <ContactForm />
        </main>
    );
}
