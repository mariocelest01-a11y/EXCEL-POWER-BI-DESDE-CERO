import React from "react";
import { Smartphone, Laptop, Tablet, Check } from "lucide-react";
import devicesMockupImg from "../assets/images/devices_responsive_mockup_1790110818186.jpg";

export const CompatibilitySection: React.FC = () => {
  const devices = [
    {
      name: "Computadora",
      desc: "Ideal para realizar las prácticas en Excel y Power BI Desktop.",
      icon: Laptop
    },
    {
      name: "Tablet",
      desc: "Excelente para repasar conceptos, guías y estructuras de dashboards.",
      icon: Tablet
    },
    {
      name: "Teléfono",
      desc: "Accede en cualquier momento a tus lecciones y fórmulas clave.",
      icon: Smartphone
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#080d1c] border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Aprende desde donde quieras
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Accede al contenido desde el dispositivo que prefieras.
          </p>
        </div>

        {/* Devices image preview */}
        <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-950 mb-8 max-w-3xl mx-auto shadow-xl">
          <div className="aspect-[16/9] w-full">
            <img
              src={devicesMockupImg}
              alt="Visualización en laptop, tablet y smartphone"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Device Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {devices.map((d, idx) => {
            const Icon = d.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 text-center flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">{d.name}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {d.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
