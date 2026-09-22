import React from "react";
import { AlertCircle, CheckCircle2, Clock, HelpCircle, FileX, BarChart2, Database, Sliders } from "lucide-react";

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      text: "Pasas demasiado tiempo organizando datos.",
      icon: Clock,
      detail: "Copiar, pegar y limpiar celdas repetidamente consume horas valiosas de tu día."
    },
    {
      text: "Tus informes parecen difíciles de entender.",
      icon: FileX,
      detail: "Muestras tablas gigantescas que tus jefes o clientes no logran interpretar con rapidez."
    },
    {
      text: "No sabes cómo crear dashboards profesionales.",
      icon: BarChart2,
      detail: "Ves paneles visuales modernos en internet pero no tienes claro cómo conectarlos con tus datos."
    },
    {
      text: "Utilizas Excel, pero sientes que no aprovechas todo su potencial.",
      icon: Sliders,
      detail: "Te limitas a lo básico por miedo a romper fórmulas o desconfigurar tus hojas de cálculo."
    },
    {
      text: "Has escuchado hablar de Power BI, pero no sabes por dónde empezar.",
      icon: HelpCircle,
      detail: "El software parece intimidante o demasiado técnico sin una guía directa y paso a paso."
    },
    {
      text: "Cuando recibes una gran cantidad de datos, no sabes cómo analizarlos.",
      icon: Database,
      detail: "Miles de filas te abruman y no sabes qué métricas extraer ni cómo presentar los resultados."
    }
  ];

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-[#080d1c] border-y border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
            Identificación
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            ¿Todavía haces tus informes de esta manera?
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-400 text-xs sm:text-base">
            La mayoría de profesionales lidian a diario con las mismas dificultades al trabajar con hojas de cálculo.
          </p>
        </div>

        {/* 6 Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-3.5 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-rose-500/30 transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 mt-0.5">
                    <span className="text-xs sm:text-base font-bold">✕</span>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-slate-100 mb-0.5 sm:mb-1 leading-snug">
                      {item.text}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Breakthrough message */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-blue-950/60 border border-blue-500/30 text-center max-w-3xl mx-auto shadow-xl">
          <p className="text-base sm:text-xl font-bold text-white leading-relaxed mb-2 sm:mb-3">
            El problema no es la cantidad de datos. El problema es no saber cómo convertirlos en información útil.
          </p>
          <div className="w-10 sm:w-12 h-0.5 bg-blue-500/50 mx-auto mb-2 sm:mb-3" />
          <p className="text-xs sm:text-base text-blue-200/90 leading-relaxed">
            Con <strong className="text-white font-semibold">Excel + Power BI</strong> puedes organizar, analizar y visualizar tus datos de una forma mucho más clara y profesional.
          </p>
        </div>
      </div>
    </section>
  );
};
