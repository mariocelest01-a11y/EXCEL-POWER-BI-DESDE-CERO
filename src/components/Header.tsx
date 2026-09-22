import React, { useState } from "react";
import { scrollToOffer } from "../utils/tracking";
import { Menu, X, ArrowRight, BarChart3 } from "lucide-react";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#090f20]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-bold tracking-tight text-white hover:text-blue-400 transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-600 via-blue-600 to-sky-400 flex items-center justify-center text-white shadow-sm shadow-blue-500/20">
            <BarChart3 className="w-4 h-4" />
          </div>
          <span className="text-base sm:text-lg tracking-tight font-extrabold uppercase">
            Excel <span className="text-blue-400">+</span> Power BI
          </span>
        </a>

        {/* Zone 2: 3-4 clean text nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button
            onClick={() => handleNavClick("aprender")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Qué aprenderás
          </button>
          <button
            onClick={() => handleNavClick("dashboards")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Dashboards
          </button>
          <button
            onClick={() => handleNavClick("beneficios")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Beneficios
          </button>
          <button
            onClick={() => handleNavClick("preguntas")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Preguntas frecuentes
          </button>
        </nav>

        {/* Zone 3: Primary action button & Mobile triggers */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile fast access button */}
          <button
            onClick={scrollToOffer}
            className="md:hidden inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-blue-600 active:scale-95 rounded-lg shadow-sm whitespace-nowrap cursor-pointer"
          >
            <span>US$ 6,90</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          <button
            onClick={scrollToOffer}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-lg transition-all shadow-sm shadow-blue-600/30 whitespace-nowrap cursor-pointer"
          >
            QUIERO APRENDER
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger with 44px touch target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-slate-300 hover:text-white rounded-lg active:bg-slate-800/80 focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c1630] border-b border-slate-800 px-4 pt-3 pb-5 space-y-3 animate-in fade-in duration-150">
          <button
            onClick={() => handleNavClick("aprender")}
            className="block w-full text-left py-2 text-sm font-medium text-slate-200 hover:text-blue-400"
          >
            Qué aprenderás
          </button>
          <button
            onClick={() => handleNavClick("dashboards")}
            className="block w-full text-left py-2 text-sm font-medium text-slate-200 hover:text-blue-400"
          >
            Dashboards
          </button>
          <button
            onClick={() => handleNavClick("beneficios")}
            className="block w-full text-left py-2 text-sm font-medium text-slate-200 hover:text-blue-400"
          >
            Beneficios
          </button>
          <button
            onClick={() => handleNavClick("preguntas")}
            className="block w-full text-left py-2 text-sm font-medium text-slate-200 hover:text-blue-400"
          >
            Preguntas frecuentes
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              scrollToOffer();
            }}
            className="w-full mt-2 py-2.5 px-4 text-center text-sm font-bold text-white bg-blue-600 rounded-lg shadow-sm"
          >
            QUIERO APRENDER EXCEL + POWER BI
          </button>
        </div>
      )}
    </header>
  );
};
