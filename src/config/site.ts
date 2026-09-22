/**
 * Site & Product Configuration
 * Edit checkout URL, Meta Pixel ID, and offer details in this single file.
 */

export const CHECKOUT_URL = "https://checkout.escalepay.com/1131952";
export const META_PIXEL_ID = "2576041606236840";

export const PRODUCT_INFO = {
  name: "EXCEL + POWER BI DESDE CERO",
  priceUsd: "6,90",
  priceNumber: 6.90,
  currency: "USD",
  paymentModel: "Pago único",
  accessModel: "Acceso de por vida",
  subheadline: "Aprende a transformar datos desordenados en informes y dashboards profesionales con Excel + Power BI, incluso si estás empezando desde cero.",
};

export interface ModuleItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  tool: "Excel" | "Power BI" | "Ambos";
}

export const COURSE_MODULES: ModuleItem[] = [
  {
    id: 1,
    title: "Módulo 1",
    subtitle: "Excel desde cero",
    description: "Aprende los fundamentos necesarios para trabajar con hojas de cálculo de forma organizada y eficiente.",
    topics: ["Interfaz y navegación rápida", "Estructura de celdas y rangos", "Atajos clave de productividad", "Fórmulas matemáticas básicas"],
    tool: "Excel"
  },
  {
    id: 2,
    title: "Módulo 2",
    subtitle: "Organización y análisis de datos",
    description: "Aprende a organizar información y utilizar herramientas de Excel para analizar datos.",
    topics: ["Limpieza y depuración de datos", "Filtrado y ordenamiento avanzado", "Validación y formatos condicionales", "Funciones lógicas (SI, BUSCARV, XLOOKUP)"],
    tool: "Excel"
  },
  {
    id: 3,
    title: "Módulo 3",
    subtitle: "Tablas y gráficos",
    description: "Transforma datos en tablas y gráficos más fáciles de interpretar.",
    topics: ["Uso correcto de Tablas oficiales", "Diseño visual de gráficos profesionales", "Gráficos de barras, líneas y columnas", "Buenas prácticas de legibilidad visual"],
    tool: "Excel"
  },
  {
    id: 4,
    title: "Módulo 4",
    subtitle: "Tablas dinámicas",
    description: "Aprende a resumir y analizar grandes cantidades de información.",
    topics: ["Creación y configuración de tablas dinámicas", "Campos calculados y agrupaciones", "Segmentaciones interactivas de datos", "Conexión entre múltiples resúmenes"],
    tool: "Excel"
  },
  {
    id: 5,
    title: "Módulo 5",
    subtitle: "Power Query",
    description: "Aprende a preparar, organizar y transformar datos para facilitar el análisis.",
    topics: ["Conexión a diferentes fuentes de datos", "Transformación automatizada de columnas", "Eliminación de duplicados y errores", "Carga optimizada de datos"],
    tool: "Ambos"
  },
  {
    id: 6,
    title: "Módulo 6",
    subtitle: "Power BI desde cero",
    description: "Conoce la interfaz y aprende a construir tus primeros informes y dashboards.",
    topics: ["Ecosistema y lienzo de Power BI Desktop", "Importación de modelos de datos", "Creación de relaciones esenciales", "Primeras medidas y métricas clave"],
    tool: "Power BI"
  },
  {
    id: 7,
    title: "Módulo 7",
    subtitle: "Dashboards profesionales",
    description: "Aprende a presentar información mediante visualizaciones claras, organizadas y profesionales.",
    topics: ["Tarjetas KPI de alto impacto", "Gráficos interactivos con filtros cruzados", "Paletas de color y jerarquía visual", "Estructuración de reportes ejecutivos"],
    tool: "Power BI"
  },
  {
    id: 8,
    title: "Módulo 8",
    subtitle: "Proyecto práctico",
    description: "Aplicar los conocimientos aprendidos para construir un informe/dashboard completo.",
    topics: ["Caso real de negocio paso a paso", "Desde la base sucia al tablero final", "Exportación y presentación clara", "Checklist de entrega ejecutiva"],
    tool: "Ambos"
  }
];

export const AUDIENCE_PROFILES = [
  {
    icon: "Briefcase",
    title: "Trabajas con informes o datos",
    desc: "Necesitas presentar resultados a directivos, clientes o tu equipo sin pasar horas armando reportes confusos."
  },
  {
    icon: "FileSpreadsheet",
    title: "Quieres mejorar tus habilidades en Excel",
    desc: "Manejas lo elemental, pero quieres dominar tablas dinámicas, fórmulas analíticas y orden profesional."
  },
  {
    icon: "Monitor",
    title: "Quieres empezar a aprender Power BI",
    desc: "Deseas dar el salto al estándar moderno de Business Intelligence de manera guiada y sin complicaciones."
  },
  {
    icon: "GraduationCap",
    title: "Eres estudiante y quieres una habilidad práctica",
    desc: "Buscas sumar una competencia real, solicitada y aplicable en cualquier empresa u organización."
  },
  {
    icon: "TrendingUp",
    title: "Quieres mejorar tu perfil profesional",
    desc: "Dominar datos te permite aportar soluciones visibles y fundamentar tus propuestas con números claros."
  },
  {
    icon: "Database",
    title: "Quieres aprender una herramienta de análisis",
    desc: "Aspiras a dominar las dos herramientas más utilizadas en el mundo corporativo actual."
  },
  {
    icon: "Sparkles",
    title: "Ya utilizas Excel pero quieres ir más allá",
    desc: "Quieres conectar tus hojas de cálculo con dashboards interactivos y automatizar la transformación de datos."
  }
];

export const BENEFITS_LIST = [
  "Organizar datos de forma más eficiente",
  "Crear informes más claros",
  "Analizar información con Excel",
  "Trabajar con tablas dinámicas",
  "Preparar y transformar datos",
  "Crear visualizaciones",
  "Construir dashboards",
  "Presentar información de forma profesional",
  "Entender mejor Power BI",
  "Desarrollar una habilidad práctica para tu perfil profesional"
];

export const FAQ_LIST = [
  {
    question: "¿Necesito tener experiencia con Excel?",
    answer: "No. El contenido está pensado para que puedas comenzar desde los fundamentos y avanzar de forma gradual y estructurada."
  },
  {
    question: "¿Necesito saber Power BI?",
    answer: "No. Puedes comenzar desde cero y avanzar paso a paso, aprendiendo la interfaz, cómo importar datos y cómo diseñar tus primeros dashboards."
  },
  {
    question: "¿Puedo acceder desde mi teléfono?",
    answer: "Sí, puedes revisar las explicaciones y guías desde tu teléfono móvil o tablet, y realizar las prácticas interactivas en tu computadora."
  },
  {
    question: "¿El acceso es de por vida?",
    answer: "Sí, el acceso adquirido es de por vida. Puedes consultar los materiales y actualizaciones a tu propio ritmo, cuantas veces lo necesites."
  },
  {
    question: "¿Cuánto cuesta?",
    answer: "El precio de acceso es de US$ 6,90, en un único pago. No hay cuotas mensuales, suscripciones ni cobros ocultos."
  },
  {
    question: "¿Cómo recibiré el acceso?",
    answer: "Inmediatamente después de completar el pago en el checkout seguro, recibirás por correo electrónico las instrucciones directas para acceder al producto."
  },
  {
    question: "¿Puedo pagar con tarjeta?",
    answer: "Sí. El checkout acepta tarjetas de crédito y débito internacionales, además de Apple Pay y Google Pay para un pago rápido y seguro."
  }
];
