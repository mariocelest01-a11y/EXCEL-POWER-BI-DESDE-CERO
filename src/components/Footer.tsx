import React from "react";
import { BarChart3 } from "lucide-react";
import { scrollToOffer } from "../utils/tracking";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#050811] border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <BarChart3 className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-sm text-white tracking-tight uppercase">
              Excel <span className="text-blue-400">+</span> Power BI
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300">
            <button
              onClick={() => {
                const el = document.getElementById("aprender");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Qué aprenderás
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("dashboards");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Dashboards
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("beneficios");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Beneficios
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("preguntas");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Preguntas frecuentes
            </button>
            <button
              onClick={scrollToOffer}
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors cursor-pointer"
            >
              Acceso Inmediato
            </button>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 space-y-3 text-center md:text-left text-slate-400 leading-relaxed">
          <p>
            © {new Date().getFullYear()} Excel + Power BI desde cero. Todos los derechos reservados.
          </p>
          <p className="text-[11px] text-slate-400">
            Aviso de responsabilidad: Este sitio web no está afiliado, respaldado ni patrocinado por Microsoft Corporation ni por Meta Inc. Excel y Power BI son marcas registradas de Microsoft Corporation. Los resultados de aprendizaje pueden variar según la dedicación y práctica individual. No se garantizan resultados económicos ni promesas de empleo.
          </p>
        </div>
      </div>
    </footer>
  );
};
