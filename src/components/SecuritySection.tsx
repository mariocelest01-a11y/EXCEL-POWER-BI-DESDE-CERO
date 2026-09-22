import React from "react";
import { ShieldCheck, Lock, CreditCard, Smartphone } from "lucide-react";

export const SecuritySection: React.FC = () => {
  return (
    <section className="py-10 bg-[#080d1c] border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Lock className="w-4 h-4 text-emerald-400" />
                <h3 className="text-base font-bold text-white">Compra 100% segura</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Tu pago se procesa mediante un checkout seguro con encriptación de datos.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <div className="px-3.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center gap-1.5 text-xs text-slate-200 font-medium">
              <CreditCard className="w-3.5 h-3.5 text-blue-400" />
              <span>Tarjetas</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center gap-1.5 text-xs text-slate-200 font-medium">
              <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Apple Pay</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center gap-1.5 text-xs text-slate-200 font-medium">
              <Smartphone className="w-3.5 h-3.5 text-sky-400" />
              <span>Google Pay</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
