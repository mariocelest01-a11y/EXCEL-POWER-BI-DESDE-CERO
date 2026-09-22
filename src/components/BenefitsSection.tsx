import React from "react";
import { BENEFITS_LIST } from "../config/site";
import { CheckCircle, Award } from "lucide-react";

export const BenefitsSection: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-[#080d1c] border-t border-slate-800 scroll-mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            Habilidades Adquiridas
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            ¿Qué podrás hacer con lo aprendido?
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Habilidades prácticas directas que podrás aplicar en tus reportes desde la primera semana.
          </p>
        </div>

        {/* 10 Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {BENEFITS_LIST.map((benefit, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-emerald-500/30 transition-all flex items-center gap-3.5"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-slate-100">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
