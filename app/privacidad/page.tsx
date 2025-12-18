import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";

export default function PrivacidadPage() {
    return (
        <main className="min-h-screen bg-black text-foreground selection:bg-white/20">
            <Navbar />

            <section className="pt-32 pb-12 px-6 container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Política de Privacidad</h1>

                <div className="prose prose-invert prose-lg text-muted">
                    <p>Última actualización: Enero 2026</p>

                    <h3>1. Recopilación de Información</h3>
                    <p>En ZCOdex, nos tomamos en serio la privacidad de nuestros clientes corporativos. Recopilamos únicamente la información necesaria para la prestación de nuestros servicios de modernización y automatización, incluyendo nombres de contacto, correos electrónicos corporativos y detalles técnicos de la infraestructura a auditar.</p>

                    <h3>2. Uso de Datos</h3>
                    <p>La información recopilada se utiliza exclusivamente para:</p>
                    <ul>
                        <li>Proveer cotizaciones y diagnósticos técnicos.</li>
                        <li>Ejecutar análisis de código legado bajo acuerdos de confidencialidad (NDA).</li>
                        <li>Mejorar nuestros modelos de IA internos (con datos anonimizados, si se autoriza).</li>
                    </ul>

                    <h3>3. Soberanía de Datos</h3>
                    <p>Garantizamos que el código fuente y los datos sensibles procesados por nuestros agentes de IA permanecen en entornos seguros. No utilizamos código propietario de clientes para entrenar modelos públicos fundamentales.</p>

                    <h3>4. Contacto</h3>
                    <p>Para ejercer sus derechos ARCO, contacte a legal@zcodex.com.</p>
                </div>
            </section>

            <ContactForm />
        </main>
    );
}
