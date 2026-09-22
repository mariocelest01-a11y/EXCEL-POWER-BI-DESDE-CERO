import React from "react";
import { ArrowRight, CheckCircle2, Route } from "lucide-react";

export const ProgressionSection: React.FC = () => {
  const steps = [
    { title: "Excel", desc: "Bases y hojas limpias" },
    { title: "Organización de datos", desc: "Estructura y filtrado" },
    { title: "Análisis", desc: "Fórmulas y métricas" },
    { title: "Power Query", desc: "Transformación automática" },
    { title: "Power BI", desc: "Modelado y relaciones" },
    { title: "Dashboards", desc: "Reporte final ejecutivo" }
  ];

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-[#0a1226] border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <Route className="w-3.5 h-3.5" />
            Curva de Aprendizaje Amigable
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            ¿Nunca has utilizado Power BI? No hay problema.
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-300 text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
            El curso está pensado para que puedas comenzar desde los fundamentos y avanzar progresivamente sin perderte en tecnicismos.
          </p>
        </div>

        {/* Visual Progression Pipeline */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2.5 sm:gap-3 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between text-center relative group hover:border-blue-500/50 transition-colors"
              >
                <div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 mx-auto mb-1.5 sm:mb-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 font-mono text-[11px] sm:text-xs flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white mb-0.5 sm:mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 leading-tight">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-2.5 pt-1.5 sm:mt-3 sm:pt-2 border-t border-slate-800 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop flow arrow note */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs font-mono text-slate-400">
            <span>Ruta directa:</span>
            <span className="text-emerald-400 font-semibold">Cero frustración</span>
            <span>•</span>
            <span className="text-blue-400 font-semibold">Progresión natural</span>
            <span>•</span>
            <span className="text-white font-semibold">Resultados tangibles</span>
          </div>
        </div>
      </div>
    </section>
  );
};
