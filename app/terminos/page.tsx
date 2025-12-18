import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";

export default function TerminosPage() {
    return (
        <main className="min-h-screen bg-black text-foreground selection:bg-white/20">
            <Navbar />

            <section className="pt-32 pb-12 px-6 container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Términos y Condiciones</h1>

                <div className="prose prose-invert prose-lg text-muted">
                    <p>Última actualización: Enero 2026</p>

                    <h3>1. Aceptación</h3>
                    <p>Al contratar los servicios de ZCOdex, el cliente acepta estos términos que rigen el desarrollo de software, modernización de sistemas y despliegue de agentes de IA.</p>

                    <h3>2. Propiedad Intelectual</h3>
                    <p>El cliente retiene el 100% de la propiedad intelectual del código modernizado y los activos digitales resultantes del servicio. ZCOdex cede todos los derechos patrimoniales tras el pago total del proyecto.</p>

                    <h3>3. Garantía de Servicio (SLA)</h3>
                    <p>Nuestros agentes de IA y sistemas automatizados se entregan con un periodo de garantía de 30 días post-implementación para corrección de bugs críticos sin costo adicional.</p>

                    <h3>4. Limitación de Responsabilidad</h3>
                    <p>ZCOdex no se hace responsable por interrupciones de servicio de terceros (APIs de OpenAI, AWS, Azure) que afecten la operación de los agentes desplegados.</p>
                </div>
            </section>

            <ContactForm />
        </main>
    );
}
