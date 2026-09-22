import React from "react";
import { scrollToOffer } from "../utils/tracking";
import { PRODUCT_INFO } from "../config/site";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#080d1c] via-[#091124] to-[#060a14] border-t border-slate-800 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative text-center">
        {/* Urgency / Launch pill */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <Zap className="w-3.5 h-3.5" />
          Precio especial de lanzamiento
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
          Deja de mirar los datos sin saber qué hacer con ellos.
        </h2>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed [text-wrap:balance]">
          Empieza a aprender Excel + Power BI y descubre cómo transformar datos en informes y dashboards más claros y profesionales.
        </p>

        {/* Price Card Container */}
        <div className="inline-block p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-blue-500/30 max-w-md w-full shadow-2xl mb-8">
          <p className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-1">
            Inversión única
          </p>
          <div className="text-4xl sm:text-5xl font-black text-white tracking-tight tabular-nums mb-2">
            US$ {PRODUCT_INFO.priceUsd}
          </div>
          <p className="text-sm font-semibold text-emerald-400">
            {PRODUCT_INFO.paymentModel} • {PRODUCT_INFO.accessModel}
          </p>

          <div className="mt-6">
            <button
              onClick={scrollToOffer}
              className="w-full py-4 px-6 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-xl transition-all shadow-lg shadow-blue-600/40 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>QUIERO APRENDER AHORA</span>
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="text-xs text-slate-400 mt-3 font-medium">
            Acceso inmediato
          </p>
        </div>

        {/* Quiet reassurance checks */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Sin cuotas mensuales
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Aprende a tu propio ritmo
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Material práctico descargable
          </span>
        </div>
      </div>
    </section>
  );
};
