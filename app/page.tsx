"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { LoadingScreen } from "@/components/presentation/loading-screen";
import { Navigation } from "@/components/presentation/navigation";
import { StarField } from "@/components/presentation/star-field";
import { TitleSlide } from "@/components/sections/title-slide";
import { GoalSection } from "@/components/sections/goal";
import { AgendaSection } from "@/components/sections/agenda";
import { AssumptionsSection } from "@/components/sections/assumptions";
import { MarketOpportunitySection } from "@/components/sections/market-opportunity";
import { TerritorySection } from "@/components/sections/territory";
import { HiringPlanSection } from "@/components/sections/hiring-plan";
import { SalesPlaysSection } from "@/components/sections/sales-plays";
import { MarketingPartnershipsSection } from "@/components/sections/marketing-partnerships";
import { OperatingModelSection } from "@/components/sections/operating-model";
import { DayPlanSection } from "@/components/sections/day-plan";
import { NextStepsSection } from "@/components/sections/next-steps";
import { ThankYouSection } from "@/components/sections/thank-you";

const SECTIONS = [
  { id: "title", name: "Title", number: "01" },
  { id: "goal", name: "Goal", number: "02" },
  { id: "agenda", name: "Agenda", number: "03" },
  { id: "assumptions", name: "Assumptions", number: "04" },
  { id: "market", name: "Market", number: "05" },
  { id: "territory", name: "Territory", number: "06" },
  { id: "hiring", name: "Hiring", number: "07" },
  { id: "sales-plays", name: "Sales Plays", number: "08" },
  { id: "marketing", name: "Marketing", number: "09" },
  { id: "operating", name: "Operating", number: "10" },
  { id: "day-plan", name: "30/60/90", number: "11" },
  { id: "next-steps", name: "Next Steps", number: "12" },
  { id: "thank-you", name: "Thank You", number: "13" },
];

export default function Presentation() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const scrollToSection = useCallback((index: number) => {
    const sectionEl = document.getElementById(SECTIONS[index].id);
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLoading) return;
      
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        const nextIndex = Math.min(currentSection + 1, SECTIONS.length - 1);
        scrollToSection(nextIndex);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const prevIndex = Math.max(currentSection - 1, 0);
        scrollToSection(prevIndex);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, isLoading, scrollToSection]);

  // Intersection Observer for section detection
  useEffect(() => {
    if (isLoading) return;

    const observers: IntersectionObserver[] = [];
    
    SECTIONS.forEach((section, index) => {
      const element = document.getElementById(section.id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                setCurrentSection(index);
              }
            });
          },
          { threshold: 0.5 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <StarField />
      
      <Navigation
        sections={SECTIONS}
        currentSection={currentSection}
        onNavigate={scrollToSection}
      />
      
      <main
        ref={containerRef}
        className="snap-container"
      >
        <section id="title" className="snap-section">
          <TitleSlide onNavigate={() => scrollToSection(1)} />
        </section>
        
        <section id="goal" className="snap-section">
          <GoalSection />
        </section>
        
        <section id="agenda" className="snap-section">
          <AgendaSection />
        </section>
        
        <section id="assumptions" className="snap-section">
          <AssumptionsSection />
        </section>
        
        <section id="market" className="snap-section">
          <MarketOpportunitySection />
        </section>
        
        <section id="territory" className="snap-section">
          <TerritorySection />
        </section>
        
        <section id="hiring" className="snap-section">
          <HiringPlanSection />
        </section>
        
        <section id="sales-plays" className="snap-section">
          <SalesPlaysSection />
        </section>
        
        <section id="marketing" className="snap-section">
          <MarketingPartnershipsSection />
        </section>
        
        <section id="operating" className="snap-section">
          <OperatingModelSection />
        </section>
        
        <section id="day-plan" className="snap-section">
          <DayPlanSection />
        </section>
        
        <section id="next-steps" className="snap-section">
          <NextStepsSection />
        </section>

        <section id="thank-you" className="snap-section">
          <ThankYouSection />
        </section>
      </main>

      {/* Progress Dots */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {SECTIONS.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSection
                ? "bg-[#0070F3] scale-125"
                : "bg-[#333333] hover:bg-[#555555]"
            }`}
            aria-label={`Go to ${section.name}`}
          />
        ))}
      </div>
    </div>
  );
}
