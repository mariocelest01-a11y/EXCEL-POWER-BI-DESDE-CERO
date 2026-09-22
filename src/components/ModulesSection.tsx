import React, { useState } from "react";
import { COURSE_MODULES } from "../config/site";
import { BookOpen, Check, ChevronDown, ChevronUp, Layers } from "lucide-react";

export const ModulesSection: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  return (
    <section id="aprender" className="py-16 md:py-24 bg-[#080d1c] scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Plan de Estudio Práctico
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            Todo lo que necesitas para empezar a trabajar con Excel y Power BI
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Un recorrido progresivo diseñado para que construyas habilidades sólidas desde las bases hasta dashboards completos.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {COURSE_MODULES.map((item) => {
            const isExpanded = expandedModule === item.id;
            const toolBadgeColor =
              item.tool === "Excel"
                ? "text-emerald-300 bg-emerald-950/70 border-emerald-500/30"
                : item.tool === "Power BI"
                ? "text-amber-300 bg-amber-950/70 border-amber-500/30"
                : "text-blue-300 bg-blue-950/70 border-blue-500/30";

            return (
              <div
                key={item.id}
                className="rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-all duration-200 overflow-hidden"
              >
                <div
                  onClick={() => toggleModule(item.id)}
                  className="p-3.5 sm:p-5 cursor-pointer flex items-start justify-between gap-2.5 sm:gap-4 select-none hover:bg-slate-800/30 transition-colors"
                >
                  <div className="flex items-start gap-2.5 sm:gap-3.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 mt-0.5">
                      0{item.id}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                        <span className="text-[11px] sm:text-xs font-mono font-semibold text-blue-400 uppercase">
                          {item.title}
                        </span>
                        <span className={`text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded border font-mono ${toolBadgeColor}`}>
                          {item.tool}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-lg font-bold text-white leading-snug">
                        {item.subtitle}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white shrink-0 -mr-1"
                    aria-label="Expandir temario"
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Expanded topics list */}
                {isExpanded && (
                  <div className="px-3.5 pb-4 pt-1 sm:px-5 sm:pb-5 border-t border-slate-800/70 bg-[#070b18]/60 animate-in fade-in duration-150">
                    <p className="text-[11px] sm:text-xs font-mono uppercase text-slate-400 mb-2">
                      Temas incluidos en este módulo:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                      {item.topics.map((topic, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick note on content */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            Contenido 100% aplicable, paso a paso y con archivos base descargables para practicar.
          </p>
        </div>
      </div>
    </section>
  );
};
