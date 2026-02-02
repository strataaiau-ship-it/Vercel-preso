"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, Target, BarChart3 } from "lucide-react";

const hiringTimeline = [
  { role: "Country Director (You)", start: 1, end: 12, color: "linear-gradient(to right, #0070F3, #00DFD8)" },
  { role: "Enterprise AE #1", start: 1.5, end: 12, color: "#0070F3" },
  { role: "Enterprise AE #2", start: 2.5, end: 12, color: "#0070F3" },
  { role: "Solutions Engineer #1", start: 2.5, end: 12, color: "#50E3C2" },
  { role: "Marketing Manager", start: 6.5, end: 12, color: "#9333EA" },
  { role: "SDR (Mid-Market)", start: 7.5, end: 12, color: "#0070F3" },
  { role: "Rev Ops Analyst", start: 8.5, end: 12, color: "#F5A623" },
  { role: "Solutions Engineer #2", start: 9.5, end: 12, color: "#50E3C2" },
  { role: "Grower AE / AM", start: 9.5, end: 12, color: "#0070F3" },
  { role: "Channel Partner Manager", start: 10.5, end: 12, color: "#9333EA" },
  { role: "Field Deployment Engineer", start: 11.5, end: 12, color: "#50E3C2" },
];

const milestones = [
  { month: 6, label: "4 people, $3-4M pipeline" },
  { month: 9, label: "6 people, $5-7M pipeline" },
  { month: 12, label: "10 people, $12-15M pipeline" },
];

const roleProfiles = [
  {
    title: "Enterprise Account Executive",
    icon: Briefcase,
    qualities: [
      "5-8 years enterprise sales",
      "Sold $500K+ ACV to CTOs/VPs Engineering",
      "ANZ market experience",
      'Builder mentality - "first in" before',
    ],
    recruitFrom: "Datadog, Atlassian, MongoDB, HashiCorp, Twilio, Snowflake, Stripe",
    comp: "$250-260K OTE (50/50 split)",
    quota: "$400-500K ARR (Year 1), $800K-1M (Year 2+)",
  },
  {
    title: "Solutions Engineer",
    icon: Target,
    qualities: [
      "4-6 years SE/SA experience",
      "Strong React/Next.js/frontend knowledge",
      "Can code live, build custom demos",
      'Sales acumen - understands deal dynamics',
      '"Not boring" - brings energy',
      "Field-ready - wants to meet customers",
    ],
    recruitFrom: "Datadog, Twilio, MongoDB SEs, Developer Advocates",
    comp: "$180-220K OTE (70/30 split)",
    quota: null,
  },
  {
    title: "Marketing Manager, ANZ",
    icon: BarChart3,
    qualities: [
      "5-7 years B2B tech marketing",
      "Proven demand gen track record",
      "Event management experience",
      "Pipeline accountability (not MQLs)",
      "Community connector",
    ],
    recruitFrom: "Atlassian, Canva, MongoDB, AWS, Google Cloud marketing",
    comp: "$160-190K (base + pipeline bonus)",
    quota: null,
  },
  {
    title: "Sales Development Rep",
    icon: Users,
    qualities: [
      "1-3 years SDR/BDR experience",
      "Technically curious",
      "High activity + high quality",
      "Career ambition - path to AE",
    ],
    recruitFrom: "Quick Win accounts ONLY (not cold-calling CBA)",
    comp: "$90-110K OTE (70/30 split)",
    quota: null,
  },
];

const scorecards = [
  {
    period: "Month 6",
    metrics: [
      { metric: "Pipeline Created", target: "$3M", stretch: "$4M" },
      { metric: "Qualified Opportunities", target: "16", stretch: "20" },
      { metric: "Deals Signed", target: "1", stretch: "3" },
      { metric: "ARR Closed", target: "$100K", stretch: "$300K" },
      { metric: "POCs Completed", target: "5", stretch: "8" },
    ],
  },
  {
    period: "Month 9",
    metrics: [
      { metric: "Total Pipeline", target: "$5M", stretch: "$7M" },
      { metric: "Qualified Opportunities", target: "25", stretch: "35" },
      { metric: "Deals Signed (Cumulative)", target: "3", stretch: "5" },
      { metric: "ARR Closed (Cumulative)", target: "$300K", stretch: "$500K" },
      { metric: "Marketing-Sourced Pipeline", target: "$500K", stretch: "$750K" },
    ],
  },
  {
    period: "Month 12",
    metrics: [
      { metric: "Total Pipeline", target: "$12M", stretch: "$15M" },
      { metric: "Deals Signed (Year 1)", target: "8", stretch: "12" },
      { metric: "New Logo ARR", target: "$1.5M", stretch: "$2.2M" },
      { metric: "Expansion ARR", target: "$300K", stretch: "$500K" },
      { metric: "Total ARR", target: "$1.8M", stretch: "$2.7M" },
    ],
  },
];

export function HiringPlanSection() {
  const [activeTab, setActiveTab] = useState<"timeline" | "profiles" | "scorecards">("timeline");

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
          Hiring Plan & Targets
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
            { key: "timeline", label: "12-Month Timeline" },
            { key: "profiles", label: "Role Profiles" },
            { key: "scorecards", label: "Team Scorecards" },
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

        {/* Timeline Tab */}
        {activeTab === "timeline" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#111111] border border-[#333333] rounded-xl p-6 overflow-x-auto">
              {/* Month Headers */}
              <div className="flex mb-4 ml-48">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 text-center text-sm text-[#888888] min-w-[60px]"
                  >
                    M{i + 1}
                  </div>
                ))}
              </div>

              {/* Gantt Bars */}
              <div className="space-y-3">
                {hiringTimeline.map((item, index) => (
                  <motion.div
                    key={item.role}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-44 text-sm text-[#888888] flex-shrink-0 truncate">
                      {item.role}
                    </div>
                    <div className="flex-1 h-8 relative min-w-[720px]">
                      <div className="absolute inset-0 flex">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="flex-1 border-l border-[#222222] min-w-[60px]"
                          />
                        ))}
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${((item.end - item.start) / 12) * 100}%` }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.8, delay: 0.3 + index * 0.05 }}
                        className="absolute h-full rounded-md"
                        style={{
                          left: `${((item.start - 1) / 12) * 100}%`,
                          background: item.color,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Milestones */}
              <div className="flex mt-6 ml-48 border-t border-[#333333] pt-4">
                {milestones.map((m) => (
                  <div
                    key={m.month}
                    className="text-center"
                    style={{ marginLeft: `${((m.month - 1) / 12) * 100}%`, transform: "translateX(-50%)", position: "absolute" }}
                  >
                    <div className="w-3 h-3 rounded-full bg-[#0070F3] mx-auto mb-2" />
                    <p className="text-xs text-[#888888]">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
              {[
                { label: "Total Headcount", value: "10" },
                { label: "Quota Carriers", value: "4" },
                { label: "Technical Resources", value: "3" },
                { label: "Pipeline Generation", value: "2" },
                { label: "Operations", value: "1" },
                { label: "Fully Loaded Cost", value: "$2.76M" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                  className="bg-[#111111] border border-[#333333] rounded-lg p-4 text-center"
                >
                  <p className="text-[24px] font-bold text-white">{stat.value}</p>
                  <p className="text-[12px] text-[#888888] mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Role Profiles Tab */}
        {activeTab === "profiles" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {roleProfiles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#111111] border border-[#333333] rounded-xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0070F3]/10 flex items-center justify-center">
                    <role.icon className="w-6 h-6 text-[#0070F3]" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-white">{role.title}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-[12px] uppercase tracking-wider text-[#888888] mb-2">
                      What Good Looks Like
                    </p>
                    <ul className="space-y-1">
                      {role.qualities.map((q) => (
                        <li key={q} className="text-[14px] text-[#888888] flex items-start gap-2">
                          <span className="text-[#0070F3] mt-1">-</span>
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-[12px] uppercase tracking-wider text-[#888888] mb-1">
                      Recruit From
                    </p>
                    <p className="text-[14px] text-white">{role.recruitFrom}</p>
                  </div>

                  <div className="flex gap-4">
                    <div>
                      <p className="text-[12px] uppercase tracking-wider text-[#888888] mb-1">
                        Comp
                      </p>
                      <p className="text-[14px] text-[#50E3C2]">{role.comp}</p>
                    </div>
                    {role.quota && (
                      <div>
                        <p className="text-[12px] uppercase tracking-wider text-[#888888] mb-1">
                          Quota
                        </p>
                        <p className="text-[14px] text-[#0070F3]">{role.quota}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Scorecards Tab */}
        {activeTab === "scorecards" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {scorecards.map((card, index) => (
              <motion.div
                key={card.period}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#111111] border border-[#333333] rounded-xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-[#0070F3] to-[#00DFD8] px-6 py-3">
                  <h3 className="text-[18px] font-semibold text-white">{card.period}</h3>
                </div>
                <div className="p-4">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left text-[12px] text-[#888888] pb-2">Metric</th>
                        <th className="text-right text-[12px] text-[#888888] pb-2">Target</th>
                        <th className="text-right text-[12px] text-[#888888] pb-2">Stretch</th>
                      </tr>
                    </thead>
                    <tbody>
                      {card.metrics.map((m) => (
                        <tr key={m.metric} className="border-t border-[#222222]">
                          <td className="py-2 text-[14px] text-[#888888]">{m.metric}</td>
                          <td className="py-2 text-[14px] text-white text-right">{m.target}</td>
                          <td className="py-2 text-[14px] text-[#50E3C2] text-right">{m.stretch}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
