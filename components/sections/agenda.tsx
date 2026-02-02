"use client";

import { motion } from "framer-motion";

const agendaItems = [
  { number: "1", title: "Assumptions" },
  { number: "2", title: "Market Opportunity - Why $30M?" },
  { number: "3", title: "Territory Prioritisation Framework" },
  { number: "4", title: "Hiring Plan & Targets" },
  { number: "5", title: "Sales Plays" },
  { number: "6", title: "Marketing & Partnerships" },
  { number: "7", title: "Operating Model & Team Culture" },
  { number: "8", title: "30/60/90 Day Plan" },
  { number: "9", title: "Next Steps" },
  { number: "10", title: "Thank You & Q&A" },
];

export function AgendaSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 ml-[60px]">
      <div className="max-w-3xl w-full mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-[48px] font-semibold mb-12 text-center"
        >
          Agenda
        </motion.h2>

        {/* Agenda List */}
        <div className="space-y-3">
          {agendaItems.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-center gap-6 p-4 rounded-lg transition-all duration-300 hover:bg-[#111111]"
            >
              <span className="text-[24px] font-semibold gradient-text w-12 text-right">
                {item.number}
              </span>
              <span className="text-[20px] text-[#888888] group-hover:text-white transition-colors duration-300">
                {item.title}
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#333333] to-transparent ml-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
