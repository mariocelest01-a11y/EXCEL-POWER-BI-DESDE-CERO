import React from "react";
import { proceedToCheckout } from "../utils/tracking";
import { PRODUCT_INFO } from "../config/site";
import {
  Check,
  ShieldCheck,
  Lock,
  ArrowRight,
  Zap,
  CreditCard,
  Smartphone
} from "lucide-react";

export const OfferSection: React.FC = () => {
  const offerBullets = [
    "Curso de Excel desde los fundamentos",
    "Curso de Power BI y entorno desktop",
    "Organización, depuración y análisis de datos",
    "Creación de Dashboards profesionales e interactivos",
    "Contenido práctico y archivos de trabajo descargables",
    "Acceso de por vida sin mensualidades",
    "Acceso desde cualquier dispositivo (PC, tablet o móvil)"
  ];

  return (
    <section id="oferta" className="py-16 md:py-24 bg-[#070b18] border-t border-slate-800 scroll-mt-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
        {/* Main Offer Card */}
        <div className="rounded-2xl sm:rounded-3xl bg-slate-900/90 border-2 border-blue-500/50 p-4 sm:p-8 md:p-10 shadow-2xl shadow-blue-950/80 relative">
          {/* Top special badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white text-[11px] sm:text-xs font-extrabold uppercase tracking-wider shadow-md whitespace-nowrap">
              OFERTA ESPECIAL
            </span>
          </div>

          {/* Heading */}
          <div className="text-center pt-2 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Aprende Excel + Power BI desde cero
            </h2>
            <p className="mt-2 text-slate-300 text-xs sm:text-base max-w-lg mx-auto">
              Empieza hoy y aprende a transformar datos en informes y dashboards profesionales.
            </p>
          </div>

          {/* Pricing Box */}
          <div className="bg-[#090f20] rounded-xl sm:rounded-2xl border border-slate-800 p-4 sm:p-6 mb-6 sm:mb-8 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5" />
              Precio promocional de lanzamiento
            </div>

            <div className="flex items-baseline justify-center gap-2 mt-1 mb-1">
              <span className="text-xs sm:text-base font-semibold text-slate-400">Total:</span>
              <span className="text-4xl sm:text-6xl font-black text-white tracking-tight tabular-nums">
                US$ {PRODUCT_INFO.priceUsd}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-emerald-400">
              {PRODUCT_INFO.paymentModel} • {PRODUCT_INFO.accessModel}
            </p>
          </div>

          {/* Included Bullets */}
          <div className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-8">
            <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Todo lo que recibes con tu inscripción:
            </p>
            {offerBullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-base text-slate-200 font-medium leading-snug">
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          {/* Checkout CTA Button */}
          <div className="space-y-2.5 sm:space-y-3 text-center">
            <button
              onClick={proceedToCheckout}
              className="w-full min-h-[54px] sm:min-h-[60px] py-3.5 sm:py-5 px-6 sm:px-8 text-base sm:text-xl font-extrabold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 active:scale-[0.98] rounded-xl transition-all shadow-xl shadow-blue-600/40 flex items-center justify-center gap-2.5 sm:gap-3 cursor-pointer group"
            >
              <span>QUIERO EMPEZAR AHORA</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Acceso inmediato después del pago.
            </p>
          </div>

          {/* Payment Methods & Security Guarantee */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span>Checkout 100% seguro y encriptado</span>
            </div>

            {/* Accepted payment logos */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-slate-300">
              <span className="px-2 sm:px-2.5 py-1 rounded bg-slate-800 border border-slate-700 font-mono text-[10px] sm:text-[11px] flex items-center gap-1">
                <CreditCard className="w-3 h-3 text-blue-400" /> Tarjetas
              </span>
              <span className="px-2 sm:px-2.5 py-1 rounded bg-slate-800 border border-slate-700 font-mono text-[10px] sm:text-[11px] flex items-center gap-1">
                <Smartphone className="w-3 h-3 text-emerald-400" /> Apple Pay
              </span>
              <span className="px-2 sm:px-2.5 py-1 rounded bg-slate-800 border border-slate-700 font-mono text-[10px] sm:text-[11px] flex items-center gap-1">
                <Smartphone className="w-3 h-3 text-sky-400" /> Google Pay
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
