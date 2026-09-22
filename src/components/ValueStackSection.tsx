import React from "react";
import { scrollToOffer } from "../utils/tracking";
import { PRODUCT_INFO } from "../config/site";
import { Check, Sparkles, ArrowRight, Layers, FileSpreadsheet, BarChart3, Database } from "lucide-react";

export const ValueStackSection: React.FC = () => {
  const valueItems = [
    {
      title: "CURSO DE EXCEL",
      subtitle: "Bases, fórmulas, atajos y estructura",
      icon: FileSpreadsheet,
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      title: "CURSO DE POWER BI",
      subtitle: "Modelado, entorno desktop y relaciones",
      icon: BarChart3,
      accent: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
    {
      title: "ANÁLISIS DE DATOS",
      subtitle: "Power Query, depuración y tablas dinámicas",
      icon: Database,
      accent: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "DASHBOARDS PROFESIONALES",
      subtitle: "Visualización ejecutiva y proyectos prácticos",
      icon: Layers,
      accent: "text-sky-400 bg-sky-500/10 border-sky-500/20"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#0a1226] border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Todo Integrado
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Todo en un solo lugar
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-300 text-xs sm:text-base">
            No necesitas comprar cursos separados ni suscripciones costosas para aprender a dominar tus datos.
          </p>
        </div>

        {/* 4 Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {valueItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-3 sm:gap-4"
              >
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg border flex items-center justify-center shrink-0 ${item.accent}`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                    {item.subtitle}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-emerald-400 font-semibold mt-1.5 sm:mt-2">
                    <Check className="w-3.5 h-3.5" />
                    <span>Contenido 100% Práctico</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Price Reveal Box */}
        <div className="rounded-2xl bg-gradient-to-b from-blue-950/80 to-slate-900 border border-blue-500/40 p-5 sm:p-10 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-64 h-32 bg-blue-500/10 blur-3xl pointer-events-none" />

          <p className="text-sm sm:text-lg text-slate-300 font-medium mb-2 sm:mb-3">
            Pero hoy puedes acceder a todo por:
          </p>

          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight tabular-nums">
              US$ {PRODUCT_INFO.priceUsd}
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400 mb-6 sm:mb-8 font-medium">
            <span className="text-emerald-400 font-semibold">{PRODUCT_INFO.paymentModel}</span>
            <span>•</span>
            <span className="text-white">{PRODUCT_INFO.accessModel}</span>
          </div>

          <button
            onClick={scrollToOffer}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 min-h-[50px] text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-xl transition-all shadow-lg shadow-blue-600/40 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>QUIERO ACCEDER AHORA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
