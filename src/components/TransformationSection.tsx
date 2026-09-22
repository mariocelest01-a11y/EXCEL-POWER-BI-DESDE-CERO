import React from "react";
import { scrollToOffer } from "../utils/tracking";
import { ArrowRight, XCircle, CheckCircle, Sparkles, TrendingUp } from "lucide-react";

export const TransformationSection: React.FC = () => {
  const beforePoints = [
    "Datos desordenados y sin estructura clara",
    "Tablas difíciles de interpretar y navegar",
    "Informes manuales que toman horas armar",
    "Demasiada información dispersa sin foco",
    "Gráficos poco profesionales y desactualizados"
  ];

  const afterPoints = [
    "Datos organizados y limpios automáticamente",
    "Informes claros que se entienden en segundos",
    "Dashboards visuales e interactivos",
    "Análisis más sencillo y rápido de ejecutar",
    "Información fácil de presentar con impacto"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#0a1226] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Evolución de tu trabajo
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            Aprende a convertir datos en información que realmente puedes entender.
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-base max-w-2xl mx-auto">
            La idea no es simplemente aprender botones y funciones. Es aprender a utilizar Excel y Power BI para trabajar mejor con datos.
          </p>
        </div>

        {/* Before vs After Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative">
          {/* Card Antes */}
          <div className="rounded-xl sm:rounded-2xl bg-slate-900/80 border border-rose-500/20 p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-xs">
                    ✕
                  </div>
                  <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-rose-300 font-bold">
                    ANTES
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs text-slate-400">Sin metodología</span>
              </div>

              <ul className="space-y-3 sm:space-y-4">
                {beforePoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400/80 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-base text-slate-300 leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-3 sm:mt-8 sm:pt-4 border-t border-slate-800 text-[11px] sm:text-xs text-slate-400 font-mono">
              Resultado: Pérdida de tiempo y reportes que nadie lee con claridad.
            </div>
          </div>

          {/* Card Después */}
          <div className="rounded-xl sm:rounded-2xl bg-gradient-to-b from-blue-950/60 to-slate-900/90 border border-emerald-500/30 p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Top accent badge */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-emerald-400 font-bold">
                    DESPUÉS
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs text-emerald-400/90 font-medium">Con Excel + Power BI</span>
              </div>

              <ul className="space-y-3 sm:space-y-4">
                {afterPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-base text-white font-medium leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-3 sm:mt-8 sm:pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] sm:text-xs text-emerald-400 font-mono">
              <span>Resultado: Claridad, agilidad y presentación ejecutiva.</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="mt-8 sm:mt-10 text-center">
          <button
            onClick={scrollToOffer}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-xl transition-all shadow-md shadow-blue-600/30 cursor-pointer"
          >
            <span>QUIERO TRANSFORMAR MIS REPORTES</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
