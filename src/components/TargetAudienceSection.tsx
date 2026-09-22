import React from "react";
import { AUDIENCE_PROFILES } from "../config/site";
import {
  Briefcase,
  FileSpreadsheet,
  Monitor,
  GraduationCap,
  TrendingUp,
  Database,
  Sparkles,
  CheckCircle2,
  HelpCircle
} from "lucide-react";

export const TargetAudienceSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Briefcase,
    FileSpreadsheet,
    Monitor,
    GraduationCap,
    TrendingUp,
    Database,
    Sparkles
  };

  return (
    <section className="py-16 md:py-24 bg-[#080d1c] border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            Perfil Recomendado
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Este curso es para ti si...
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Diseñado para personas prácticas que necesitan resultados visuales y organizados en su trabajo diario o estudios.
          </p>
        </div>

        {/* 7 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AUDIENCE_PROFILES.map((profile, idx) => {
            const IconComponent = iconMap[profile.icon] || Briefcase;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3.5">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5 leading-snug">
                    {profile.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {profile.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Callout */}
        <div className="mt-10 p-5 rounded-xl bg-blue-950/30 border border-blue-500/20 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-blue-300 text-sm sm:text-base font-semibold">
            <HelpCircle className="w-5 h-5 text-blue-400 shrink-0" />
            <span>No necesitas ser experto en tecnología. El contenido está pensado para avanzar paso a paso.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
