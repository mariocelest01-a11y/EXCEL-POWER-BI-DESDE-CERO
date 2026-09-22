import React, { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { TransformationSection } from "./components/TransformationSection";
import { ModulesSection } from "./components/ModulesSection";
import { DashboardsShowcase } from "./components/DashboardsShowcase";
import { TargetAudienceSection } from "./components/TargetAudienceSection";
import { ProgressionSection } from "./components/ProgressionSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { ValueStackSection } from "./components/ValueStackSection";
import { OfferSection } from "./components/OfferSection";
import { CompatibilitySection } from "./components/CompatibilitySection";
import { FaqSection } from "./components/FaqSection";
import { SecuritySection } from "./components/SecuritySection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { Footer } from "./components/Footer";
import { MobileStickyBar } from "./components/MobileStickyBar";
import { trackMetaEvent } from "./utils/tracking";
import { PRODUCT_INFO } from "./config/site";

export default function App() {
  useEffect(() => {
    // Track ViewContent for Meta Ads attribution
    trackMetaEvent("ViewContent", {
      content_name: PRODUCT_INFO.name,
      content_category: "Digital Education",
      value: PRODUCT_INFO.priceNumber,
      currency: PRODUCT_INFO.currency,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#070b18] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white pb-20 md:pb-0">
      {/* Top Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. Problem Identification */}
        <ProblemSection />

        {/* 5. Transformation Section */}
        <TransformationSection />

        {/* 6. What you'll learn (Modules) */}
        <ModulesSection />

        {/* 7. Dashboards Showcase */}
        <DashboardsShowcase />

        {/* 8. Who is it for */}
        <TargetAudienceSection />

        {/* 9. No previous knowledge needed / Progression */}
        <ProgressionSection />

        {/* 10. Benefits */}
        <BenefitsSection />

        {/* 11. Value Stack */}
        <ValueStackSection />

        {/* 12. Main Offer (#oferta) */}
        <OfferSection />

        {/* 13. Compatibility (Devices) */}
        <CompatibilitySection />

        {/* 14. FAQ Accordion */}
        <FaqSection />

        {/* 15. Security Section */}
        <SecuritySection />

        {/* 16. Final CTA */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* 19. Mobile Sticky CTA Bar */}
      <MobileStickyBar />
    </div>
  );
}
