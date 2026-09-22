import React, { useState } from "react";
import { scrollToOffer } from "../utils/tracking";
import { BarChart, DollarSign, TrendingUp, Users, Target, ArrowRight, Eye, Layout } from "lucide-react";
import salesDashboardImg from "../assets/images/sales_dashboard_ui_1790110796114.jpg";
import financeDashboardImg from "../assets/images/finance_dashboard_ui_1790110806161.jpg";

export const DashboardsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("ventas");

  const categories = [
    { id: "ventas", label: "Ventas", icon: DollarSign },
    { id: "finanzas", label: "Finanzas", icon: TrendingUp },
    { id: "marketing", label: "Marketing", icon: Target },
    { id: "rrhh", label: "RR. HH.", icon: Users },
    { id: "indicadores", label: "Indicadores", icon: BarChart },
  ];

  return (
    <section id="dashboards" className="py-16 md:py-24 bg-[#0a1226] border-t border-slate-800 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layout className="w-3.5 h-3.5 text-blue-400" />
            Galería de Informes
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            Mira lo que puedes llegar a crear.
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Aprende a transformar hojas de cálculo repletas de números en paneles ejecutivos visuales, interactivos y comprensibles.
          </p>
        </div>

        {/* Category Tabs with horizontal scroll on mobile */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap justify-start sm:justify-center mb-6 sm:mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-1.5 sm:gap-2 min-h-[40px] px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer shrink-0 whitespace-nowrap active:scale-95 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-400"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dashboard Showcase Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl overflow-hidden max-w-4xl mx-auto">
          {/* Top header bar */}
          <div className="bg-[#090f20] px-4 py-3 border-b border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 font-semibold text-white">
                <Eye className="w-4 h-4 text-blue-400" />
                Vista previa: Dashboard de {categories.find((c) => c.id === activeTab)?.label}
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
              Interactivo & Dinámico
            </span>
          </div>

          {/* Active Content */}
          <div className="p-4 sm:p-6 bg-slate-950/70">
            {activeTab === "ventas" && (
              <div className="space-y-4">
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-800">
                  <img
                    src={salesDashboardImg}
                    alt="Dashboard ejecutivo de Ventas con KPIs y tendencias"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                    <p className="text-[11px] text-slate-400 font-mono">Facturación total</p>
                    <p className="text-base sm:text-lg font-bold text-white tabular-nums">$148,920</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                    <p className="text-[11px] text-slate-400 font-mono">Ticket promedio</p>
                    <p className="text-base sm:text-lg font-bold text-emerald-400 tabular-nums">$142.50</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                    <p className="text-[11px] text-slate-400 font-mono">Crecimiento mensual</p>
                    <p className="text-base sm:text-lg font-bold text-sky-400 tabular-nums">+18.4%</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                    <p className="text-[11px] text-slate-400 font-mono">Conversión de cierre</p>
                    <p className="text-base sm:text-lg font-bold text-white tabular-nums">24.2%</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "finanzas" && (
              <div className="space-y-4">
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-800">
                  <img
                    src={financeDashboardImg}
                    alt="Dashboard financiero con flujos de caja y márgenes de utilidad"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                    <p className="text-[11px] text-slate-400 font-mono">Margen operativo</p>
                    <p className="text-base sm:text-lg font-bold text-emerald-400 tabular-nums">31.8%</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                    <p className="text-[11px] text-slate-400 font-mono">Costos fijos</p>
                    <p className="text-base sm:text-lg font-bold text-slate-200 tabular-nums">$32,400</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                    <p className="text-[11px] text-slate-400 font-mono">Flujo neto</p>
                    <p className="text-base sm:text-lg font-bold text-sky-400 tabular-nums">+$64,800</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                    <p className="text-[11px] text-slate-400 font-mono">Rentabilidad ROI</p>
                    <p className="text-base sm:text-lg font-bold text-emerald-400 tabular-nums">3.4x</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "marketing" && (
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div>
                      <h4 className="text-base font-bold text-white">Rendimiento de Campañas & Adquisición</h4>
                      <p className="text-xs text-slate-400">Embudo de conversión y costo por adquisición (CPA)</p>
                    </div>
                    <span className="text-xs font-mono text-blue-400 bg-blue-950 px-2.5 py-1 rounded border border-blue-800">
                      ROI: 4.8x
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    <div className="p-4 rounded-lg bg-slate-950 border border-slate-800/80">
                      <p className="text-xs text-slate-400">Leads calificados</p>
                      <p className="text-xl font-bold text-white tabular-nums">3,420</p>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-blue-500 h-full w-[78%]" />
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-950 border border-slate-800/80">
                      <p className="text-xs text-slate-400">Costo por lead (CPL)</p>
                      <p className="text-xl font-bold text-emerald-400 tabular-nums">$1.84</p>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[65%]" />
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-950 border border-slate-800/80">
                      <p className="text-xs text-slate-400">Tasa de conversión</p>
                      <p className="text-xl font-bold text-sky-400 tabular-nums">4.62%</p>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-sky-500 h-full w-[82%]" />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 italic">
                    Conectarás tus métricas digitales para ver en un solo clic qué canal produce mejores resultados.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "rrhh" && (
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div>
                      <h4 className="text-base font-bold text-white">Panel de Gestión Humana & Retención</h4>
                      <p className="text-xs text-slate-400">Indicadores de rotación, clima laboral y capacitación interna</p>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-800">
                      Retención: 94.2%
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    <div className="p-4 rounded-lg bg-slate-950 border border-slate-800/80">
                      <p className="text-xs text-slate-400">Plantilla total</p>
                      <p className="text-xl font-bold text-white tabular-nums">248 personas</p>
                      <p className="text-[11px] text-slate-400 mt-1">12 áreas operativas</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-950 border border-slate-800/80">
                      <p className="text-xs text-slate-400">Índice de rotación</p>
                      <p className="text-xl font-bold text-emerald-400 tabular-nums">2.1% mensual</p>
                      <p className="text-[11px] text-emerald-400 mt-1">-0.8% vs trimestre ant.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-950 border border-slate-800/80">
                      <p className="text-xs text-slate-400">Horas de formación</p>
                      <p className="text-xl font-bold text-sky-400 tabular-nums">1,240 hrs</p>
                      <p className="text-[11px] text-slate-400 mt-1">88% de cumplimiento</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 italic">
                    Ideal para presentar al comité directivo resúmenes claros sin fórmulas desordenadas.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "indicadores" && (
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div>
                      <h4 className="text-base font-bold text-white">Scorecard Ejecutivo de Rendimiento (KPIs)</h4>
                      <p className="text-xs text-slate-400">Seguimiento global de objetivos operacionales y estratégicos</p>
                    </div>
                    <span className="text-xs font-mono text-sky-400 bg-sky-950 px-2.5 py-1 rounded border border-sky-800">
                      Cumplimiento: 96.5%
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs sm:text-sm">
                      <span className="text-slate-300 font-medium">Cumplimiento de Presupuesto Anual</span>
                      <span className="font-mono font-bold text-emerald-400">98.2% (Meta cumplida)</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs sm:text-sm">
                      <span className="text-slate-300 font-medium">Tiempos de Entrega de Informes</span>
                      <span className="font-mono font-bold text-sky-400">-65% de tiempo dedicado</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs sm:text-sm">
                      <span className="text-slate-300 font-medium">Precisión de Datos Sin Duplicados</span>
                      <span className="font-mono font-bold text-emerald-400">100% automatizado con Power Query</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Disclaimer as instructed */}
        <p className="text-center text-xs text-slate-400 mt-4 max-w-xl mx-auto">
          * Los paneles mostrados son modelos y visualizaciones ilustrativas del tipo de proyectos y reportes enseñados a construir durante el curso.
        </p>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={scrollToOffer}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-xl transition-all shadow-md shadow-blue-600/30 cursor-pointer"
          >
            <span>QUIERO APRENDER A CREAR ESTOS DASHBOARDS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
