"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const weeklyRhythm = [
  { day: "Monday", cadences: [
    { name: "Pump Up", time: "9:00am", attendees: "All ANZ", purpose: "30 min: Industry content, create optimism" },
    { name: "Lead Gen Review", time: "10:00am", attendees: "Marketing, SDR, Channel", purpose: "45 min: Pipeline sources, campaigns" },
    { name: "1:1s", time: "Scheduled", attendees: "You + each rep", purpose: "30 min: Coaching, deals, blockers" },
  ]},
  { day: "Tuesday", cadences: [
    { name: "Pipeline Commit", time: "10:00am", attendees: "AE + Manager", purpose: "30 min: Forecast, deal progression" },
  ]},
  { day: "Thursday", cadences: [
    { name: "Deal Review", time: "2:00pm", attendees: "AEs, SEs", purpose: "60 min: Deep dive 2-3 deals, MEDDIC" },
  ]},
  { day: "Friday", cadences: [
    { name: "Gratitude", time: "4:00pm", attendees: "All ANZ", purpose: "15 min: Write review for Vercelian who helped" },
  ]},
];

const monthlyCadences = [
  { name: "Monthly Business Review (MBR)", timing: "First Monday", target: "CRO" },
  { name: "Monthly Coaching Session", timing: "Third week, 1:1", target: "Careers not deals" },
  { name: "Win/Loss Review", timing: "Third Wednesday", target: "Learning focused" },
];

const quarterlyCadences = [
  { name: "Territory Plan Review", timing: "End of Q", details: "90-min with each rep" },
  { name: "Customer Advisory Board", timing: "Mid-quarter", details: "Top 10 customers" },
];

const culturePillars = [
  { front: "Not Boring", back: "Whiteboarding not slides. Bring insights they don't know. Make every interaction valuable and different." },
  { front: "Obsessive Discovery", back: "Know the customer's business better than they do. Ask 'why' five times. Understand the business model, not just tech stack." },
  { front: "In Person First", back: "Relationships > emails. Meet customers face-to-face. Build trust over coffee. ANZ rewards presence." },
  { front: "Quantify Everything", back: "Value must be measurable. Every deal has an ROI model. Every QBR has a value realized number. No hand-wavy benefits." },
  { front: "Create a Wedge", back: "Land small, expand relentlessly. Get one team, prove value, grow. Every deal is the start, not the finish." },
  { front: "They Always Come Back", back: "ANZ is small - people talk, people move. Stay in touch after losses. Your champion today is your buyer tomorrow." },
];

export function OperatingModelSection() {
  const [activeTab, setActiveTab] = useState<"cadences" | "culture">("cadences");
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(index)) {
      newFlipped.delete(index);
    } else {
      newFlipped.add(index);
    }
    setFlippedCards(newFlipped);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-8 ml-[60px] py-12">
      <div className="max-w-7xl w-full mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-[48px] font-semibold mb-8 text-center"
        >
          Operating Model & Team Culture
        </motion.h2>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-2 mb-8"
        >
          {[
            { key: "cadences", label: "Operating Cadences" },
            { key: "culture", label: "Team Culture Pillars" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? "bg-[#0070F3] text-white"
                  : "bg-[#111111] text-[#888888] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Cadences Tab */}
        {activeTab === "cadences" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Weekly Rhythm */}
            <h3 className="text-[24px] font-semibold mb-6">Weekly Rhythm</h3>
            <div className="bg-[#111111] border border-[#333333] rounded-xl p-6 mb-10 overflow-x-auto">
              <div className="min-w-[800px]">
                <div className="grid grid-cols-5 gap-4">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => {
                    const dayData = weeklyRhythm.find((d) => d.day === day);
                    return (
                      <div key={day} className="space-y-3">
                        <h4 className={`text-[16px] font-medium ${dayData ? "text-white" : "text-[#555555]"}`}>
                          {day}
                        </h4>
                        {dayData ? (
                          dayData.cadences.map((cadence) => (
                            <div
                              key={cadence.name}
                              className="bg-[#0a0a0a] border border-[#222222] rounded-lg p-3"
                            >
                              <p className="text-[#0070F3] font-medium text-[14px]">{cadence.name}</p>
                              <p className="text-[12px] text-[#888888] mt-1">{cadence.time}</p>
                              <p className="text-[11px] text-[#555555] mt-1">{cadence.attendees}</p>
                              <p className="text-[11px] text-[#888888] mt-2">{cadence.purpose}</p>
                            </div>
                          ))
                        ) : (
                          <div className="text-center text-[#333333] text-sm py-8">
                            Focus Day
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Monthly & Quarterly */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-[24px] font-semibold mb-4">Monthly Cadences</h3>
                <div className="bg-[#111111] border border-[#333333] rounded-xl p-6">
                  <div className="space-y-4">
                    {monthlyCadences.map((cadence) => (
                      <div key={cadence.name} className="border-b border-[#222222] pb-3 last:border-0 last:pb-0">
                        <p className="text-white font-medium">{cadence.name}</p>
                        <div className="flex justify-between mt-1">
                          <span className="text-[12px] text-[#0070F3]">{cadence.timing}</span>
                          <span className="text-[12px] text-[#888888]">{cadence.target}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[24px] font-semibold mb-4">Quarterly Cadences</h3>
                <div className="bg-[#111111] border border-[#333333] rounded-xl p-6">
                  <div className="space-y-4">
                    {quarterlyCadences.map((cadence) => (
                      <div key={cadence.name} className="border-b border-[#222222] pb-3 last:border-0 last:pb-0">
                        <p className="text-white font-medium">{cadence.name}</p>
                        <div className="flex justify-between mt-1">
                          <span className="text-[12px] text-[#0070F3]">{cadence.timing}</span>
                          <span className="text-[12px] text-[#888888]">{cadence.details}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Culture Tab */}
        {activeTab === "culture" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-center text-[#888888] mb-8">Click cards to reveal details</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {culturePillars.map((pillar, index) => (
                <motion.div
                  key={pillar.front}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => toggleCard(index)}
                  className="cursor-pointer perspective-1000 h-48"
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                      flippedCards.has(index) ? "rotate-y-180" : ""
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                      transform: flippedCards.has(index) ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                  >
                    {/* Front */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-[#0070F3]/20 to-[#00DFD8]/10 border border-[#0070F3]/50 rounded-xl p-6 flex items-center justify-center"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <h4 className="text-[24px] font-bold text-white text-center">
                        {pillar.front}
                      </h4>
                    </div>
                    
                    {/* Back */}
                    <div
                      className="absolute inset-0 bg-[#111111] border border-[#333333] rounded-xl p-6 flex items-center justify-center"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <p className="text-[14px] text-[#888888] text-center leading-relaxed">
                        {pillar.back}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
