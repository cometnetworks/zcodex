import { Navbar } from "@/components/Navbar";
import { HeroCanvas } from "@/components/HeroCanvas";
import { ServiceGrid } from "@/components/ServiceGrid";
import { ProblemSolution } from "@/components/ProblemSolution";
import { WhyZCodex } from "@/components/WhyZCodex";
import { ContactForm } from "@/components/ContactForm";
import { Industries } from "@/components/Industries";
import { Process } from "@/components/Process";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-foreground antialiased selection:bg-white/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <HeroCanvas />

        {/* Hero Content Overlay */}
        <div className="relative z-10 container mx-auto px-6 text-center mt-20">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="text-white text-xs md:text-sm font-bold tracking-widest uppercase">
              La evolución del código
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
            Ingeniería de Software <br />
            <span className="italic">Agéntica</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
            Modernización de Legados y Automatización IA para las empresas más ambiciosas de LatAm.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="#contacto"
              className="px-8 py-4 bg-white text-black font-bold rounded-sm hover:bg-zinc-200 transition-all w-full md:w-auto"
            >
              Comenzar Modernización
            </a>
            <a
              href="#soluciones"
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-sm hover:bg-white/5 transition-all w-full md:w-auto"
            >
              Explorar Soluciones
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-20">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2" />
          </div>
        </div>
      </section>

      <ProblemSolution />
      <ServiceGrid />
      <Industries />
      <Process />
      <WhyZCodex />
      <ContactForm />

    </main>
  );
}
