import { notFound } from "next/navigation";
import { soluciones } from "@/lib/soluciones";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";
import { ArrowLeft, Calendar, CheckCircle2 } from "lucide-react";

// Enable Static Site Generation (SSG)
export function generateStaticParams() {
    return soluciones.map((solucion) => ({
        slug: solucion.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const solucion = soluciones.find((s) => s.slug === slug);
    if (!solucion) return { title: "Solución no encontrada" };

    return {
        title: `${solucion.title} | ZCOdex`,
        description: solucion.subtitle,
    };
}

export default async function SolucionPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const solucion = soluciones.find((s) => s.slug === slug);

    if (!solucion) {
        notFound();
    }

    const Icon = solucion.icon;

    return (
        <main className="min-h-screen bg-black text-foreground antialiased selection:bg-white/20">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-white/[0.03] blur-[100px] pointer-events-none" />

                <div className="container mx-auto max-w-5xl relative z-10">
                    <Link
                        href="/#soluciones"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all mb-8 text-sm group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Volver
                    </Link>

                    <div className="flex items-start gap-6 mb-6">
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                            <Icon className="w-8 h-8 text-white" />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                        {solucion.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
                        {solucion.subtitle}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-zinc-950/50 border-y border-white/5">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-[2fr_1fr] gap-16">

                        {/* Main Content */}
                        <div className="space-y-16">
                            <div className="prose prose-invert prose-lg max-w-none">
                                <p className="text-lg text-white/80 leading-relaxed border-l-2 border-white/20 pl-6 italic">
                                    {solucion.description}
                                </p>
                            </div>

                            <div className="space-y-12">
                                {solucion.content.map((block, idx) => (
                                    <div key={idx} className="group">
                                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-sm border border-white/10 text-muted group-hover:bg-white group-hover:text-black transition-all">
                                                {idx + 1}
                                            </span>
                                            {block.heading}
                                        </h3>
                                        <p className="text-zinc-400 leading-relaxed pl-11">
                                            {block.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar / Sticky CTA */}
                        <div className="relative">
                            <div className="sticky top-32 space-y-8">

                                {/* Features Box */}
                                <div className="p-6 rounded-2xl border border-white/10 bg-zinc-900/20">
                                    <h4 className="font-bold text-white mb-4">Características Clave</h4>
                                    <ul className="space-y-3">
                                        {solucion.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 text-sm text-zinc-400">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Primary CTA */}
                                <div className="p-6 rounded-2xl bg-white text-black text-center space-y-4">
                                    <h4 className="font-bold text-lg">¿Listo para escalar?</h4>
                                    <p className="text-sm text-zinc-600">
                                        Agenda una sesión de diagnóstico gratuita de 30 minutos con nuestros arquitectos.
                                    </p>
                                    <Link
                                        href="https://calendar.google.com"
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 w-full py-3 bg-black text-white font-bold rounded-lg hover:bg-zinc-800 transition-all"
                                    >
                                        <Calendar className="w-4 h-4" />
                                        Agendar Ahora
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <ContactForm />
        </main>
    );
}
