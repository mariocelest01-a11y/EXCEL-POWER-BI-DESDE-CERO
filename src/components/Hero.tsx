import React from "react";
import { scrollToOffer } from "../utils/tracking";
import { PRODUCT_INFO } from "../config/site";
import { ShieldCheck, Zap, Layers, ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background subtle light effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 sm:h-96 bg-gradient-to-b from-blue-600/15 via-sky-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-[11px] sm:text-xs font-semibold tracking-wide uppercase mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            CURSO PRÁCTICO DE EXCEL + POWER BI
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-[1.14] mb-4 sm:mb-6 [text-wrap:balance]">
            De datos desordenados a{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
              dashboards profesionales.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto [text-wrap:balance]">
            {PRODUCT_INFO.subheadline}
          </p>

          {/* CTA Box */}
          <div className="flex flex-col items-center justify-center gap-2.5 sm:gap-3 mb-8 sm:mb-10 w-full max-w-md mx-auto">
            <button
              onClick={scrollToOffer}
              className="w-full sm:w-auto min-h-[52px] sm:min-h-[56px] px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base md:text-lg font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.97] rounded-xl transition-all duration-150 shadow-lg shadow-blue-600/40 hover:shadow-blue-500/50 flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <span>QUIERO APRENDER EXCEL + POWER BI</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Microcopy below CTA */}
            <div className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-400 font-medium">
              <span className="text-emerald-400 font-semibold">Acceso inmediato</span>
              <span>•</span>
              <span>{PRODUCT_INFO.paymentModel}</span>
              <span>•</span>
              <span className="text-white font-bold">US$ {PRODUCT_INFO.priceUsd}</span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
              <span>Compra segura</span>
            </div>
          </div>
        </div>

        {/* Mockup Preview Area */}
        <div className="relative max-w-4xl mx-auto mt-2 sm:mt-4">
          {/* Glow backdrop behind mockup */}
          <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-3xl -z-10" />

          {/* Frame mockup */}
          <div className="rounded-xl sm:rounded-2xl border border-slate-700/80 bg-slate-900/90 shadow-2xl shadow-black/80 overflow-hidden">
            {/* Window title bar */}
            <div className="h-8 sm:h-10 bg-[#0d162a] border-b border-slate-800 flex items-center justify-between px-3 sm:px-4">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs font-mono text-slate-400 truncate max-w-[170px] sm:max-w-none">
                  Excel & Power BI Workspace
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-slate-400 font-mono">
                <span className="text-emerald-400">● Conectado</span>
                <span className="hidden sm:inline">Modelo: 100% Optimizado</span>
              </div>
            </div>

            {/* Hero Mockup Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
              <img
                src="/src/assets/images/hero_dashboard_mockup_1790110784217.jpg"
                alt="Mockup de Excel y Power BI con dashboards interactivos y hojas de cálculo analíticas"
                className="w-full h-full object-cover object-center"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Under mockup 3 trust anchors */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2.5 py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl bg-slate-900/70 border border-slate-800/80 text-center">
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0" />
              <span className="text-[11px] sm:text-sm font-semibold text-slate-200">Excel + Power BI</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2.5 py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl bg-slate-900/70 border border-slate-800/80 text-center">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span className="text-[11px] sm:text-sm font-semibold text-slate-200">Desde cero</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2.5 py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl bg-slate-900/70 border border-slate-800/80 text-center">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
              <span className="text-[11px] sm:text-sm font-semibold text-slate-200">Acceso de por vida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
