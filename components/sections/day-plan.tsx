"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const phases = [
  {
    days: "1-30",
    title: "FOUNDATION",
    subtitle: "Build the base",
    color: "#0070F3",
    sections: [
      {
        title: "Territory & Planning",
        items: [
          "Finalize territory model (AU/NZ split, vertical overlays)",
          "Negotiate Year 1 targets with CRO ($1.5-2M ARR)",
          "Define account assignment rules",
          "Complete Salesforce territory setup and dashboards",
        ],
      },
      {
        title: "Hiring Milestones",
        items: [
          "AE #1: Offer extended by Day 25",
          "AE #2: Pipeline of 5+ candidates, interviews underway",
          "SE: Job spec finalized, sourcing started",
        ],
      },
      {
        title: "Personal Pipeline",
        items: [
          "Identify 3-5 lighthouse accounts YOU own",
          "Book first 5 customer/prospect meetings",
          "Partner intros: AWS, Deloitte Digital",
        ],
      },
      {
        title: "Product & Enablement",
        items: [
          "Complete Vercel product certification",
          "Shadow 5+ US/EMEA sales calls",
          "Audit existing ANZ pipeline/customers",
        ],
      },
    ],
    keyMetric: "5 customer meetings booked",
  },
  {
    days: "31-60",
    title: "BUILD",
    subtitle: "Create momentum",
    color: "#00DFD8",
    sections: [
      {
        title: "Hiring Milestones",
        items: [
          "AE #1: Started by Day 35, in onboarding",
          "AE #2: Offer extended by Day 50",
          "SE: Shortlist of 3 candidates",
        ],
      },
      {
        title: "Territory Execution",
        items: [
          "AE #1 territory assigned",
          "Account plans for top 20 accounts",
          "SE coverage model defined",
        ],
      },
      {
        title: "Pipeline Building",
        items: [
          "10+ discovery meetings completed",
          "5+ qualified opportunities identified",
          "First partner co-sourced opportunities",
          "Lighthouse accounts in technical discovery",
        ],
      },
      {
        title: "Operating Rhythm & Events",
        items: [
          "Weekly pipeline review established",
          "First forecast submitted to CRO",
          "Partner QBR cadence agreed",
          "First executive event planned for Month 3",
        ],
      },
    ],
    keyMetric: "$300K+ pipeline, 5+ qualified opps",
  },
  {
    days: "61-90",
    title: "EXECUTE",
    subtitle: "Show results",
    color: "#50E3C2",
    sections: [
      {
        title: "Hiring Milestones",
        items: [
          "AE #2: Started by Day 65",
          "SE: Offer extended by Day 75",
          "Marketing Manager: Search initiated",
        ],
      },
      {
        title: "Pipeline & Revenue",
        items: [
          "$500K+ qualified pipeline",
          "2-3 deals in technical evaluation (Stage 2+)",
          "First lighthouse in late-stage negotiation",
          "First PQL conversion closed ($30-50K)",
        ],
      },
      {
        title: "Territory Refinement",
        items: [
          "Review territory model learnings",
          "Adjust account assignments",
          'Document "ideal customer profile"',
        ],
      },
      {
        title: "Leadership Alignment",
        items: [
          "First QBR to CRO with data",
          "Year 1 plan approved",
          "Month 6-12 headcount confirmed",
          "Year 2 preliminary thinking",
        ],
      },
    ],
    keyMetric: "First deal closed (stretch goal)",
  },
];

export function DayPlanSection() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="min-h-screen flex flex-col justify-center px-8 ml-[60px] py-12">
      <div className="max-w-6xl w-full mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-[48px] font-semibold mb-8 text-center"
        >
          30/60/90 Day Plan
        </motion.h2>

        {/* Timeline Scrubber */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-12"
        >
          <div className="h-2 bg-[#111111] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(to right, ${phases[0].color}, ${phases[activePhase].color})`,
                width: `${((activePhase + 1) / phases.length) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Markers */}
          <div className="flex justify-between mt-4">
            {phases.map((phase, index) => (
              <button
                key={phase.days}
                onClick={() => setActivePhase(index)}
                className={`flex flex-col items-center transition-all ${
                  index <= activePhase ? "opacity-100" : "opacity-50"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-all ${
                    index === activePhase
                      ? "scale-125"
                      : ""
                  }`}
                  style={{
                    borderColor: phase.color,
                    backgroundColor: index <= activePhase ? phase.color : "transparent",
                  }}
                />
                <span className="text-white font-semibold mt-2">Day {phase.days}</span>
                <span className="text-[#888888] text-sm">{phase.title}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Phase Content */}
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#111111] border border-[#333333] rounded-xl p-8"
        >
          {/* Phase Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: phases[activePhase].color }}
                />
                <span className="text-[14px] uppercase tracking-wider text-[#888888]">
                  Days {phases[activePhase].days}
                </span>
              </div>
              <h3 className="text-[36px] font-bold" style={{ color: phases[activePhase].color }}>
                {phases[activePhase].title}
              </h3>
              <p className="text-[18px] text-[#888888]">{phases[activePhase].subtitle}</p>
            </div>
            <div className="text-right">
              <p className="text-[12px] uppercase tracking-wider text-[#888888] mb-1">Key Metric</p>
              <p className="text-[#50E3C2] font-semibold">{phases[activePhase].keyMetric}</p>
            </div>
          </div>

          {/* Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phases[activePhase].sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-[#0a0a0a] border border-[#222222] rounded-lg p-5"
              >
                <h4 className="text-[16px] font-semibold text-white mb-4 flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: phases[activePhase].color }}
                  />
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px]">
                      <div className="w-4 h-4 rounded border border-[#333333] flex-shrink-0 mt-0.5" />
                      <span className="text-[#888888]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
            disabled={activePhase === 0}
            className="px-6 py-2 bg-[#111111] border border-[#333333] rounded-lg text-sm disabled:opacity-30 hover:border-[#555555] transition-colors"
          >
            Previous Phase
          </button>
          <button
            onClick={() => setActivePhase(Math.min(phases.length - 1, activePhase + 1))}
            disabled={activePhase === phases.length - 1}
            className="px-6 py-2 bg-[#0070F3] text-white rounded-lg text-sm disabled:opacity-30 hover:bg-[#0060D3] transition-colors"
          >
            Next Phase
          </button>
        </div>
      </div>
    </div>
  );
}
