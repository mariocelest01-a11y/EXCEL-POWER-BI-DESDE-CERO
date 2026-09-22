import React, { useEffect, useState } from "react";
import { scrollToOffer } from "../utils/tracking";
import { PRODUCT_INFO } from "../config/site";
import { ArrowRight } from "lucide-react";

export const MobileStickyBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pt-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] bg-[#090f20]/95 backdrop-blur-md border-t border-slate-800 shadow-2xl animate-in slide-in-from-bottom-2 duration-200">
      <button
        onClick={scrollToOffer}
        className="w-full min-h-[48px] px-4 bg-gradient-to-r from-blue-600 to-emerald-600 active:scale-[0.98] text-white rounded-xl flex items-center justify-between shadow-lg shadow-blue-600/30 text-xs sm:text-sm font-bold cursor-pointer"
      >
        <div className="flex items-center gap-1.5 font-bold tracking-tight">
          <span className="uppercase text-[11px] sm:text-xs tracking-tight">EXCEL + POWER BI</span>
          <span className="text-blue-200 font-normal">—</span>
          <span className="text-emerald-300 font-mono font-extrabold">US$ {PRODUCT_INFO.priceUsd}</span>
        </div>
        <div className="flex items-center gap-1 font-extrabold uppercase tracking-wide text-xs">
          <span>QUIERO ACCEDER</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </button>
    </div>
  );
};
