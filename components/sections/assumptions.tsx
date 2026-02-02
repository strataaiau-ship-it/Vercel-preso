"use client";

import { motion } from "framer-motion";
import { Building2, Clock, Handshake, Trophy, Plane, Sprout } from "lucide-react";

const assumptions = [
  {
    icon: Building2,
    title: "Starting From Scratch",
    description:
      "Despite Vercel having 1 Enterprise rep in Sydney and 13 Vercelians, this plan assumes building a greenfield enterprise motion",
  },
  {
    icon: Clock,
    title: "6-12 Month Cycles",
    description:
      "Enterprise sales cycles in ANZ typically run 6-12 months for large accounts",
  },
  {
    icon: Handshake,
    title: "Partners Are Critical",
    description:
      "SI ecosystem (Deloitte, Accenture, PwC) is essential for enterprise penetration in ANZ",
  },
  {
    icon: Trophy,
    title: "Local References Matter",
    description:
      "ANZ enterprises require local case studies and references for credibility",
  },
  {
    icon: Plane,
    title: "In-Person Wins",
    description:
      "The ANZ market rewards physical presence and face-to-face relationships",
  },
  {
    icon: Sprout,
    title: "PLG Provides Warmth",
    description:
      "Existing PLG motion provides warm leads but enterprise needs dedicated outbound",
  },
];

export function AssumptionsSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 ml-[60px] py-16">
      <div className="max-w-6xl w-full mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-[48px] font-semibold mb-12 text-center"
        >
          Assumptions
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assumptions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-[#111111] border border-[#333333] rounded-xl card-hover relative overflow-hidden"
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0070F3]/20 to-transparent rounded-xl" />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#0070F3]/10 flex items-center justify-center mb-4 group-hover:bg-[#0070F3]/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[#0070F3]" />
                </div>
                <h3 className="text-[20px] font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[16px] text-[#888888] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
