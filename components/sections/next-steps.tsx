"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, AlertCircle, ArrowRight } from "lucide-react";

const requirements = [
  {
    item: "Headcount approval for 4 roles",
    owner: "Leadership",
    timeline: "By end of March 2026",
    status: "pending",
  },
  {
    item: "Marketing budget allocation ($500K)",
    owner: "CMO / Finance",
    timeline: "Q2 FY26",
    status: "pending",
  },
  {
    item: "Partner enablement resources",
    owner: "Alliances Team",
    timeline: "Ongoing",
    status: "in-progress",
  },
  {
    item: "Sales engineering support commitment",
    owner: "SE Leadership",
    timeline: "Q1 FY26",
    status: "complete",
  },
  {
    item: "CRM territory assignments",
    owner: "Rev Ops",
    timeline: "Week 1",
    status: "pending",
  },
  {
    item: "Executive sponsor alignment",
    owner: "JJ + Leadership",
    timeline: "First 30 days",
    status: "in-progress",
  },
];

const statusConfig = {
  complete: {
    icon: CheckCircle2,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    label: "Complete",
  },
  "in-progress": {
    icon: Clock,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    label: "In Progress",
  },
  pending: {
    icon: AlertCircle,
    color: "text-zinc-400",
    bg: "bg-zinc-400/10",
    label: "Pending",
  },
};

export function NextStepsSection() {
  return (
    <section className="snap-section min-h-screen flex flex-col justify-center px-8 lg:px-16 py-16">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-[#0070F3] text-sm font-mono mb-4 block">
            12 // NEXT STEPS
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What I Need From You
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Key requirements and commitments to enable successful execution of
            this plan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-zinc-900 border-b border-zinc-800 text-sm font-medium text-zinc-400">
            <div className="col-span-5">Requirement</div>
            <div className="col-span-3">Owner</div>
            <div className="col-span-2">Timeline</div>
            <div className="col-span-2">Status</div>
          </div>

          {/* Table Rows */}
          {requirements.map((req, index) => {
            const status = statusConfig[req.status as keyof typeof statusConfig];
            const StatusIcon = status.icon;

            return (
              <motion.div
                key={req.item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-zinc-800/50 last:border-b-0 hover:bg-zinc-800/30 transition-colors group"
              >
                <div className="col-span-5 flex items-center gap-3">
                  <ArrowRight className="w-4 h-4 text-[#0070F3] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-white font-medium">{req.item}</span>
                </div>
                <div className="col-span-3 text-zinc-400 flex items-center">
                  {req.owner}
                </div>
                <div className="col-span-2 text-zinc-500 flex items-center text-sm">
                  {req.timeline}
                </div>
                <div className="col-span-2 flex items-center">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${status.bg} ${status.color}`}
                  >
                    <StatusIcon className="w-3 h-3" />
                    {status.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <div className="text-3xl font-bold text-white mb-2">4</div>
            <div className="text-zinc-400 text-sm">Headcount Required</div>
            <div className="text-xs text-zinc-500 mt-2">
              RD, 2x AEs, Partner Manager
            </div>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <div className="text-3xl font-bold text-white mb-2">$500K</div>
            <div className="text-zinc-400 text-sm">Marketing Investment</div>
            <div className="text-xs text-zinc-500 mt-2">
              Events, campaigns, content
            </div>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <div className="text-3xl font-bold text-white mb-2">90</div>
            <div className="text-zinc-400 text-sm">Days to Full Ramp</div>
            <div className="text-xs text-zinc-500 mt-2">
              Complete team operational
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
