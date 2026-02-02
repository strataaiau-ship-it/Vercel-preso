"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";

const companies = [
  // Quick Wins (green)
  { name: "Culture Amp", revenue: 80, traffic: 1, deal: "$50-150K", cycle: "2-4 mo", quadrant: "quickWins" },
  { name: "SafetyCulture", revenue: 150, traffic: 1.5, deal: "$50-150K", cycle: "2-4 mo", quadrant: "quickWins" },
  { name: "Employment Hero", revenue: 300, traffic: 1.2, deal: "$50-150K", cycle: "2-4 mo", quadrant: "quickWins" },
  { name: "GYG", revenue: 200, traffic: 0.8, deal: "$30-100K", cycle: "2-4 mo", quadrant: "quickWins" },
  { name: "Vista Entertainment", revenue: 500, traffic: 0.5, deal: "$50-150K", cycle: "2-4 mo", quadrant: "quickWins" },
  // Scale Plays (cyan)
  { name: "Linktree", revenue: 100, traffic: 268, deal: "$50-150K", cycle: "2-4 mo", quadrant: "scalePlays" },
  { name: "Canva", revenue: 3300, traffic: 240, deal: "$150-500K", cycle: "3-6 mo", quadrant: "scalePlays" },
  // Performance Critical (blue)
  { name: "REA Group", revenue: 1670, traffic: 12.1, deal: "$150-500K", cycle: "4-6 mo", quadrant: "performanceCritical" },
  { name: "Domain Group", revenue: 800, traffic: 5.9, deal: "$150-500K", cycle: "4-6 mo", quadrant: "performanceCritical" },
  { name: "Kogan", revenue: 488, traffic: 3.5, deal: "$100-300K", cycle: "3-6 mo", quadrant: "performanceCritical" },
  { name: "The Iconic", revenue: 500, traffic: 3, deal: "$100-300K", cycle: "3-6 mo", quadrant: "performanceCritical" },
  { name: "Afterpay", revenue: 800, traffic: 5, deal: "$100-300K", cycle: "4-6 mo", quadrant: "performanceCritical" },
  { name: "Atlassian", revenue: 5200, traffic: 10, deal: "$150-500K", cycle: "6-9 mo", quadrant: "performanceCritical" },
  // Enterprise (purple)
  { name: "CBA", revenue: 30000, traffic: 18.5, deal: "$150-500K", cycle: "9-12 mo", quadrant: "enterprise" },
  { name: "Westpac", revenue: 24000, traffic: 11.8, deal: "$150-500K", cycle: "9-12 mo", quadrant: "enterprise" },
  { name: "NAB", revenue: 20000, traffic: 8.3, deal: "$150-500K", cycle: "9-12 mo", quadrant: "enterprise" },
  { name: "Macquarie", revenue: 18000, traffic: 3, deal: "$150-300K", cycle: "6-9 mo", quadrant: "enterprise" },
  { name: "Woolworths", revenue: 69000, traffic: 7, deal: "$200-500K", cycle: "9-12 mo", quadrant: "enterprise" },
  { name: "Wesfarmers", revenue: 90000, traffic: 4, deal: "$200-500K", cycle: "9-12 mo", quadrant: "enterprise" },
  { name: "Coles", revenue: 44000, traffic: 5, deal: "$150-500K", cycle: "9-12 mo", quadrant: "enterprise" },
  { name: "Telstra", revenue: 60000, traffic: 8, deal: "$200-500K", cycle: "9-12 mo", quadrant: "enterprise" },
  { name: "IAG", revenue: 18000, traffic: 2, deal: "$150-500K", cycle: "6-9 mo", quadrant: "enterprise" },
  { name: "Qantas", revenue: 23000, traffic: 4, deal: "$150-500K", cycle: "6-9 mo", quadrant: "enterprise" },
];

const quadrantColors = {
  quickWins: "#50E3C2",
  scalePlays: "#00DFD8",
  performanceCritical: "#0070F3",
  enterprise: "#9333EA",
};

const timeline = [
  { phase: "Quick Wins", timeline: "Month 1-3", accounts: "Culture Amp, SafetyCulture, Employment Hero, GYG, Vista", pipeline: "$600K-1.2M", rationale: "Fast cycles, prove playbook" },
  { phase: "Scale Plays", timeline: "Month 2-4", accounts: "Linktree, Canva", pipeline: "$300K-800K", rationale: "Extreme traffic, clear ROI" },
  { phase: "Performance Critical", timeline: "Month 3-6", accounts: "REA, Domain, Kogan, The Iconic, Afterpay", pipeline: "$1.5M-3M", rationale: "Conversion-sensitive" },
  { phase: "Enterprise", timeline: "Month 4-12", accounts: "CBA, Westpac, NAB, Woolworths, Telstra", pipeline: "$2M-5M", rationale: "Longer cycles, compliance" },
];

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ payload: typeof companies[0] }> }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#111111] border border-[#333333] rounded-lg p-4 shadow-xl">
        <p className="text-white font-semibold text-lg mb-2">{data.name}</p>
        <div className="space-y-1 text-sm">
          <p className="text-[#888888]">
            Revenue: <span className="text-white">${data.revenue >= 1000 ? `${data.revenue / 1000}B` : `${data.revenue}M`}</span>
          </p>
          <p className="text-[#888888]">
            Traffic: <span className="text-white">{data.traffic}M/mo</span>
          </p>
          <p className="text-[#888888]">
            Deal Size: <span className="text-[#50E3C2]">{data.deal}</span>
          </p>
          <p className="text-[#888888]">
            Cycle: <span className="text-[#0070F3]">{data.cycle}</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export function TerritorySection() {
  const [activeQuadrant, setActiveQuadrant] = useState<string | null>(null);

  const filteredCompanies = activeQuadrant
    ? companies.filter((c) => c.quadrant === activeQuadrant)
    : companies;

  return (
    <div className="min-h-screen flex flex-col justify-center px-8 ml-[60px] py-12">
      <div className="max-w-7xl w-full mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-[48px] font-semibold mb-4 text-center"
        >
          Territory Prioritisation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[18px] text-[#888888] mb-8 text-center"
        >
          Account Analysis by Revenue & Web Traffic
        </motion.p>

        {/* Quadrant Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-6"
        >
          {[
            { key: "quickWins", label: "Quick Wins (2-4 mo)" },
            { key: "scalePlays", label: "Scale Plays" },
            { key: "performanceCritical", label: "Performance Critical" },
            { key: "enterprise", label: "Enterprise (6-12 mo)" },
          ].map((q) => (
            <button
              key={q.key}
              onClick={() => setActiveQuadrant(activeQuadrant === q.key ? null : q.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                activeQuadrant === q.key
                  ? "border-white bg-white/10"
                  : "border-[#333333] hover:border-[#555555]"
              }`}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: quadrantColors[q.key as keyof typeof quadrantColors] }}
              />
              <span className="text-sm text-[#888888]">{q.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Scatter Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-[400px] mb-8"
        >
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 60 }}>
              <XAxis
                type="number"
                dataKey="revenue"
                name="Revenue"
                scale="log"
                domain={[50, 100000]}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#888888", fontSize: 12 }}
                tickFormatter={(value) => (value >= 1000 ? `$${value / 1000}B` : `$${value}M`)}
                label={{ value: "Company Revenue (log scale)", position: "bottom", fill: "#888888", fontSize: 14 }}
              />
              <YAxis
                type="number"
                dataKey="traffic"
                name="Traffic"
                scale="log"
                domain={[0.3, 300]}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#888888", fontSize: 12 }}
                tickFormatter={(value) => `${value}M`}
                label={{ value: "Monthly Web Traffic", angle: -90, position: "insideLeft", fill: "#888888", fontSize: 14 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Scatter data={filteredCompanies} animationDuration={800}>
                {filteredCompanies.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={quadrantColors[entry.quadrant as keyof typeof quadrantColors]}
                    opacity={0.8}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Investment Priority Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-[24px] font-semibold mb-4 text-center">Investment Priority Timeline</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#111111]">
                  <th className="px-4 py-3 text-left text-[14px] font-medium text-[#888888] border border-[#333333]">Phase</th>
                  <th className="px-4 py-3 text-left text-[14px] font-medium text-[#888888] border border-[#333333]">Timeline</th>
                  <th className="px-4 py-3 text-left text-[14px] font-medium text-[#888888] border border-[#333333]">Key Accounts</th>
                  <th className="px-4 py-3 text-left text-[14px] font-medium text-[#888888] border border-[#333333]">Pipeline</th>
                  <th className="px-4 py-3 text-left text-[14px] font-medium text-[#888888] border border-[#333333]">Rationale</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map((row, index) => (
                  <motion.tr
                    key={row.phase}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="hover:bg-[#111111] transition-colors"
                  >
                    <td className="px-4 py-3 text-white font-medium border border-[#333333]">{row.phase}</td>
                    <td className="px-4 py-3 text-[#0070F3] border border-[#333333]">{row.timeline}</td>
                    <td className="px-4 py-3 text-[#888888] text-sm border border-[#333333]">{row.accounts}</td>
                    <td className="px-4 py-3 text-[#50E3C2] font-medium border border-[#333333]">{row.pipeline}</td>
                    <td className="px-4 py-3 text-[#888888] text-sm border border-[#333333]">{row.rationale}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
