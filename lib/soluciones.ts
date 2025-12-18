import {
    Database,
    Bot,
    Workflow,
    ShieldCheck,
    LucideIcon,
    Code2
} from "lucide-react";

export interface Solution {
    slug: string;
    title: string;
    subtitle: string;
    icon: LucideIcon;
    description: string;
    content: {
        heading: string;
        text: string;
    }[];
    features: string[];
}

export const soluciones: Solution[] = [
    {
        slug: "modernizacion-legados",
        title: "Cajas Negras de Modernización",
        subtitle: "Transformamos tu deuda técnica en ventaja competitiva.",
        icon: Database,
        description: "Utilizamos IA Generativa para analizar, documentar y refactorizar sistemas legados (COBOL, Monolitos) a arquitecturas modernas de microservicios sin interrumpir la operación.",
        content: [
            {
                heading: "El Fin del Código Legado",
                text: "Gran parte de la infraestructura crítica en LatAm opera sobre sistemas mainframe y lenguajes obsoletos. La escasez de desarrolladores COBOL o RPG es un riesgo operativo creciente. ZCOdex ingesta tu código legado, lo documenta automáticamente mediante ingeniería inversa asistida por IA y explica su lógica de negocio para facilitar la migración."
            },
            {
                heading: "Refactorización Automatizada",
                text: "No es solo una traducción línea por línea. Nuestros agentes de IA sugieren mejoras arquitectónicas durante la migración, permitiendo pasar de monolitos rígidos a funciones serverless escalables en la nube (AWS/Azure/GCP) con mínima intervención humana."
            },
            {
                heading: "Garantía de Integridad",
                text: "El mayor miedo es 'romper' sistemas críticos. Nuestra metodología incluye la generación automática de pruebas unitarias y de integración para asegurar que el nuevo sistema moderno replique exactamente la funcionalidad del original, validado bit a bit."
            }
        ],
        features: [
            "Análisis estático de código legacy",
            "Documentación automática de lógica de negocio",
            "Conversión COBOL/Java a Node.js/Python/Go",
            "Arquitectura de Microservicios Cloud-Native",
            "Generación de Test Suites"
        ]
    },
    {
        slug: "flujos-agenticos",
        title: "Flujos Agénticos (Agentic AI)",
        subtitle: "De chathbos a agentes autónomos que ejecutan trabajo real.",
        icon: Bot,
        description: "Implementamos fuerzas de trabajo digitales compuestas por agentes de IA que planifican, ejecutan herramientas y validan resultados de forma autónoma.",
        content: [
            {
                heading: "Más allá del Chatbot",
                text: "La tendencia dominante para 2026 es el paso de la IA como asistente pasivo a la IA como agente con capacidad de agencia via 'Agentic Workflow'. Un agente de ZCOdex no solo sugiere; planifica una tarea compleja, accede a terminales o bases de datos, y corrige sus propios errores hasta lograr el objetivo."
            },
            {
                heading: "Orquestación de Equipos Híbridos",
                text: "Creamos 'AI Pods' donde agentes especializados (un agente de diseño, un agente de backend, un agente de QA) colaboran entre sí bajo la supervisión de un arquitecto humano. Esto permite a tu equipo enfocarse en la estrategia mientras la IA gestiona la implementación rutinaria."
            },
            {
                heading: "Coding Agéntico",
                text: "Integramos agentes en tu ciclo de desarrollo (SDLC) que pueden tomar un ticket de Jira, escribir el código, correr los tests y abrir un Pull Request listo para revisión, reduciendo tiempos de desarrollo en un 60%."
            }
        ],
        features: [
            "Orquestación Multi-Agente (LangChain/AutoGPT)",
            "Agentes con acceso a herramientas (APIs, DBs)",
            "Automatización de SDLC end-to-end",
            "Soporte 24/7 autónomo y resolutivo",
            "Reducción drástica de opex"
        ]
    },
    {
        slug: "automatizacion-inteligente",
        title: "Automatización Inteligente",
        subtitle: "Elimina el trabajo manual con n8n, Make y Zapier.",
        icon: Workflow,
        description: "Conectamos tus aplicaciones empresariales para crear flujos de trabajo que funcionan en piloto automático, reduciendo errores humanos y tiempos de respuesta.",
        content: [
            {
                heading: "Hiper-Automatización",
                text: "Las empresas buscan eficiencia operativa. Integramos bots de software en las operaciones diarias (administrativas, contables, gestión de inventario) para agilizar tareas repetitivas. Si tiene una API, podemos automatizarlo."
            },
            {
                heading: "Integración Sin Fricción",
                text: "Usamos plataformas líderes low-code como n8n y Make para orquestar datos entre tu CRM, ERP y herramientas de comunicación (Slack/WhatsApp). Esto permite implementaciones rápidas y mantenibles sin meses de desarrollo a medida."
            },
            {
                heading: "Escalabilidad Operativa",
                text: "Tus procesos escalan con tu negocio. Al automatizar la ingesta de pedidos, la facturación o el onboarding de clientes, tu capacidad operativa crece sin necesidad de aumentar linealmente la plantilla."
            }
        ],
        features: [
            "Workflows complejos en n8n / Make",
            "Integración CRM/ERP bidireccional",
            "Bots de notificación y alerta temprana",
            "Procesamiento inteligente de documentos (OCR + IA)",
            "Dashboards de control operativos"
        ]
    },
    {
        slug: "gobernanza-iso-42001",
        title: "Gobernanza ISO 42001",
        subtitle: "IA segura, ética y auditable para la empresa enterprise.",
        icon: ShieldCheck,
        description: "Implementamos marcos de gestión de IA alineados a estándares internacionales para mitigar riesgos legales, éticos y de seguridad.",
        content: [
            {
                heading: "El Estándar de Oro",
                text: "A medida que el código es generado por máquinas, la responsabilidad y la propiedad intelectual son críticas. La norma ISO/IEC 42001 se está convirtiendo en un requisito no negociable. ZCOdex te ayuda a establecer controles para gestionar los riesgos de la IA de manera sistémica."
            },
            {
                heading: "Privacidad y Soberanía",
                text: "Garantizamos entornos de 'IA privada' donde tus datos empresariales no se utilizan para entrenar modelos públicos. Cumplimos con regulaciones locales y aseguramos que la propiedad intelectual del código generado te pertenezca."
            },
            {
                heading: "DevSecOps Agéntico",
                text: "Integramos agentes de seguridad que auditan el código generado en tiempo real, detectando vulnerabilidades o alucinaciones antes del despliegue. Seguridad por diseño, no como un pensamiento secundario."
            }
        ],
        features: [
            "Consultoría de implementación ISO 42001",
            "Auditoría de algoritmos y datos",
            "Deployment de LLMs privados (On-prem/VPC)",
            "Protección de Propiedad Intelectual",
            "Mitigación de sesgos algorítmicos"
        ]
    },
    {
        slug: "desarrollo-producto-digital",
        title: "Desarrollo de Producto Digital",
        subtitle: "Software a la medida con estándares de Silicon Valley.",
        icon: Code2,
        description: "Diseñamos y construimos aplicaciones web y móviles nativas en la nube que resuelven problemas únicos de tu negocio, donde el software genérico falla.",
        content: [
            {
                heading: "Más allá del Software Enlatado",
                text: "Los ERPs y CRMs genéricos rara vez se ajustan al 100% de tus procesos únicos. Desarrollamos herramientas a medida que se adaptan a tu flujo de trabajo, y no al revés, eliminando fricción operativa y hojas de cálculo."
            },
            {
                heading: "Stack Tecnológico Moderno",
                text: "Utilizamos Next.js, React Native y arquitecturas Serverless para entregar productos rápidos, seguros y escalables. Nada de servidores legados ni tecnologías obsoletas."
            },
            {
                heading: "UX Centrado en el Usuario",
                text: "No solo escribimos código; creamos experiencias. Nuestros diseñadores aseguran que tus herramientas internas sean tan intuitivas y agradables de usar como las apps de consumo masivo."
            }
        ],
        features: [
            "Aplicaciones Web Progresivas (PWA)",
            "Apps Nativas iOS / Android",
            "Diseño UX/UI de Alta Fidelidad",
            "Arquitectura Cloud-Native",
            "Integración de Pasarelas de Pago"
        ]
    }
];
