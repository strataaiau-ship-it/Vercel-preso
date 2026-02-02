"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Wine, Mic, Award, Handshake, GraduationCap, Clock, Target, DollarSign, Megaphone } from "lucide-react";
import Image from "next/image";

const eventPillars = [
  {
    icon: Award,
    title: "Vercel ANZ Customer Summit",
    frequency: "Annual (Month 12)",
    audience: "50-100 attendees",
    outcome: "Brand building, references, expansion pipeline",
  },
  {
    icon: Users,
    title: "Regional Advisory Council",
    frequency: "Quarterly",
    audience: "8-12 largest customers",
    outcome: "Customer stickiness, product influence",
  },
  {
    icon: Wine,
    title: "C-Level Entertainment",
    frequency: "Ongoing",
    audience: "Target CxOs (CBA, Westpac, NAB, Telstra, Woolworths, Qantas)",
    outcome: "Executive relationships, deal acceleration",
  },
  {
    icon: Mic,
    title: "Industry Events",
    frequency: "Per calendar",
    audience: "Developers, engineering leaders, CTOs",
    outcome: "Pipeline generation, thought leadership",
  },
];

const entertainmentCalendar = [
  { event: "Australian Open", month: "January", details: "Executive hospitality, 6-8 target CxOs" },
  { event: "F1 Melbourne", month: "March", details: "Premium client entertainment" },
  { event: "Exclusive Dinners", month: "Quarterly", details: "8-10 person intimate dinners" },
];

const priorityEvents = {
  priority1: [
    { name: "NDC Sydney", timing: "April", type: "Developer conference" },
    { name: "AWS Summit Sydney", timing: "June", type: "Partner presence" },
    { name: "ARA x NRA Leaders Forum", timing: "February", type: "Retail vertical" },
    { name: "iMedia Retail Summit", timing: "April", type: "Ecommerce decision makers" },
  ],
  priority2: [
    { name: "Gartner Data & Analytics", timing: "June", type: "Enterprise" },
    { name: "Programmable", timing: "March", type: "Dev community" },
    { name: "SaaS Summit", timing: "June", type: "SaaS vertical" },
    { name: "Banking Summit AFR", timing: "March", type: "FSI vertical" },
  ],
};

const partnerTable = [
  { partner: "Deloitte Digital", type: "GSI/DXP", presence: "500+ digital AUNZ", overlap: "Very High (CBA, Westpac, NAB, IAG)" },
  { partner: "Accenture Cloud First", type: "GSI/Cloud", presence: "70K cloud staff globally", overlap: "High (CBA, NAB, Telstra, REA)" },
  { partner: "PwC Digital", type: "GSI/Digital", presence: "1000+ digital AUNZ", overlap: "Multi-vertical Tier 1-3" },
];

const partnerPlays = [
  { icon: DollarSign, title: "Co-Sell Revenue Share", description: "10-15% referral fee on partner-sourced deals" },
  { icon: Target, title: "Joint Account Planning", description: "Quarterly sessions with top 3 partners" },
  { icon: GraduationCap, title: "Partner Enablement Certification", description: "3 levels: Authorized - Professional - Elite" },
  { icon: Clock, title: "Partner Solution Pods", description: "Dedicated SE time (2-4 hours/week)" },
  { icon: Megaphone, title: "Joint Marketing & Events", description: "Co-branded events, 50/50 budget" },
  { icon: Handshake, title: "Executive Alignment Program", description: "Quarterly exec-to-exec meetings" },
  { icon: Award, title: "Partner Deal Desk Priority", description: "24-48 hour SLA on support" },
];

const partnerMetrics = [
  { metric: "Partner-Sourced Pipeline", target: "$1.5-2.5M" },
  { metric: "Partner-Sourced ARR", target: "$300-500K" },
  { metric: "Enabled Partners", target: "6-8" },
  { metric: "Partner-Influenced Deals", target: "25-30%" },
  { metric: "Joint Events", target: "4-6" },
];

const partnerLogos = [
  { name: "Deloitte", url: "/images/logo-of-deloitte.png" },
  { name: "Accenture", url: "/images/accenture.png" },
  { name: "PwC", url: "/images/pwc-company-logo.svg" },
  { name: "AWS", url: "/images/amazon-web-services-logo.png" },
  { name: "Thoughtworks", url: "/images/thoughtworks-logo.png" },
];

export function MarketingPartnershipsSection() {
  const [activeTab, setActiveTab] = useState<"marketing" | "partners">("marketing");

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
          Marketing & Partnerships
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
            { key: "marketing", label: "Marketing & Events" },
            { key: "partners", label: "Partner Ecosystem" },
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

        {/* Marketing Tab */}
        {activeTab === "marketing" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Event Strategy */}
            <h3 className="text-[24px] font-semibold mb-6">Event Strategy - 4 Pillars</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {eventPillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-[#111111] border border-[#333333] rounded-xl p-5"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0070F3]/10 flex items-center justify-center mb-4">
                    <pillar.icon className="w-5 h-5 text-[#0070F3]" />
                  </div>
                  <h4 className="text-[16px] font-semibold text-white mb-2">{pillar.title}</h4>
                  <p className="text-[12px] text-[#0070F3] mb-1">{pillar.frequency}</p>
                  <p className="text-[12px] text-[#888888] mb-2">{pillar.audience}</p>
                  <p className="text-[12px] text-[#50E3C2]">{pillar.outcome}</p>
                </motion.div>
              ))}
            </div>

            {/* C-Level Entertainment Calendar */}
            <h3 className="text-[24px] font-semibold mb-6">C-Level Entertainment Calendar</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {entertainmentCalendar.map((item, index) => (
                <motion.div
                  key={item.event}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="bg-[#111111] border border-[#333333] rounded-xl p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-[#0070F3]" />
                    <span className="text-[#0070F3] font-medium">{item.month}</span>
                  </div>
                  <h4 className="text-[18px] font-semibold text-white mb-2">{item.event}</h4>
                  <p className="text-[14px] text-[#888888]">{item.details}</p>
                </motion.div>
              ))}
            </div>

            {/* Priority Events */}
            <h3 className="text-[24px] font-semibold mb-6">Priority Events 2026</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#111111] border border-[#333333] rounded-xl p-6"
              >
                <h4 className="text-[18px] font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="px-2 py-1 bg-[#0070F3] text-white text-xs rounded">PRIORITY 1</span>
                  Must Attend
                </h4>
                <div className="space-y-3">
                  {priorityEvents.priority1.map((event) => (
                    <div key={event.name} className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-medium">{event.name}</p>
                        <p className="text-[12px] text-[#888888]">{event.type}</p>
                      </div>
                      <span className="text-[#0070F3] text-sm">{event.timing}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#111111] border border-[#333333] rounded-xl p-6"
              >
                <h4 className="text-[18px] font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="px-2 py-1 bg-[#888888] text-white text-xs rounded">PRIORITY 2</span>
                  Strategic
                </h4>
                <div className="space-y-3">
                  {priorityEvents.priority2.map((event) => (
                    <div key={event.name} className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-medium">{event.name}</p>
                        <p className="text-[12px] text-[#888888]">{event.type}</p>
                      </div>
                      <span className="text-[#888888] text-sm">{event.timing}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Partners Tab */}
        {activeTab === "partners" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Priority Partners Table */}
            <h3 className="text-[24px] font-semibold mb-6">Priority Partners</h3>
            <div className="overflow-x-auto mb-10">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#111111]">
                    <th className="px-4 py-3 text-left text-[14px] font-medium text-[#888888] border border-[#333333]">Partner</th>
                    <th className="px-4 py-3 text-left text-[14px] font-medium text-[#888888] border border-[#333333]">Type</th>
                    <th className="px-4 py-3 text-left text-[14px] font-medium text-[#888888] border border-[#333333]">ANZ Presence</th>
                    <th className="px-4 py-3 text-left text-[14px] font-medium text-[#888888] border border-[#333333]">Account Overlap</th>
                  </tr>
                </thead>
                <tbody>
                  {partnerTable.map((row) => (
                    <tr key={row.partner} className="hover:bg-[#111111] transition-colors">
                      <td className="px-4 py-3 text-white font-medium border border-[#333333]">{row.partner}</td>
                      <td className="px-4 py-3 text-[#0070F3] border border-[#333333]">{row.type}</td>
                      <td className="px-4 py-3 text-[#888888] border border-[#333333]">{row.presence}</td>
                      <td className="px-4 py-3 text-[#50E3C2] border border-[#333333]">{row.overlap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 7 Partner Plays */}
            <h3 className="text-[24px] font-semibold mb-6">7 Partner Plays</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {partnerPlays.map((play, index) => (
                <motion.div
                  key={play.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-4 p-4 bg-[#111111] border border-[#333333] rounded-lg"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded bg-[#0070F3]/10 flex items-center justify-center">
                    <play.icon className="w-4 h-4 text-[#0070F3]" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-[14px]">{index + 1}. {play.title}</p>
                    <p className="text-[#888888] text-[12px]">{play.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Partner Success Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-[24px] font-semibold mb-4">Partner Success Metrics (Year 1)</h3>
                <div className="bg-[#111111] border border-[#333333] rounded-xl p-6">
                  <div className="space-y-3">
                    {partnerMetrics.map((m) => (
                      <div key={m.metric} className="flex justify-between items-center border-b border-[#222222] pb-2 last:border-0">
                        <span className="text-[#888888]">{m.metric}</span>
                        <span className="text-[#50E3C2] font-medium">{m.target}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Partner Logos */}
              <div>
                <h3 className="text-[24px] font-semibold mb-4">Strategic Partners</h3>
                <div className="bg-[#111111] border border-[#333333] rounded-xl p-6 flex flex-wrap items-center justify-center gap-8">
                  {partnerLogos.map((logo) => (
                    <div key={logo.name} className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                      <Image
                        src={logo.url || "/placeholder.svg"}
                        alt={logo.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
