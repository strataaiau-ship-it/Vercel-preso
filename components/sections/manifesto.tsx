"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const manifestoPoints = [
  {
    title: "Speed is Strategy",
    description:
      "In enterprise sales, the fastest to value wins. We deploy in hours, not months.",
  },
  {
    title: "Partners Multiply",
    description:
      "Every partner relationship is a force multiplier. GSIs aren't vendors—they're co-builders.",
  },
  {
    title: "Technical Trust",
    description:
      "Developers are the new decision-makers. Win their hearts with great DX, win their budgets with proven ROI.",
  },
  {
    title: "Data-Driven Execution",
    description:
      "Every deal, every meeting, every follow-up is tracked. We iterate faster than our competition.",
  },
  {
    title: "Customer Obsession",
    description:
      "Our success is measured by their success. Retention is the ultimate metric.",
  },
];

export function ManifestoSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="snap-section min-h-screen flex flex-col justify-center px-8 lg:px-16 py-16 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0070F3]/10 via-transparent to-[#00DFD8]/10 pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#0070F3] text-sm font-mono mb-4 block">
            13 // MANIFESTO
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our Vision for AUNZ
          </h2>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Building the most successful enterprise region in Vercel&apos;s history.
          </p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0070F3] to-[#00DFD8] rounded-2xl blur-xl opacity-20" />
          <div className="relative bg-zinc-900/80 border border-zinc-700 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
            <Sparkles className="w-8 h-8 text-[#0070F3] mb-6" />
            <blockquote className="text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-6">
              &ldquo;We will make Australia & New Zealand the blueprint for how Vercel
              wins enterprise globally—through relentless execution, deep
              partnerships, and unwavering customer focus.&rdquo;
            </blockquote>
            <cite className="text-zinc-400 not-italic">
              — The AUNZ Enterprise Team, 2026
            </cite>
          </div>
        </motion.div>

        {/* Manifesto Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {manifestoPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-[#0070F3]/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {point.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Read Full Manifesto Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={() => setShowModal(true)}
            className="bg-white text-black hover:bg-zinc-200 px-8 py-6 text-lg font-medium"
          >
            Read Full Manifesto
          </Button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">
                  The AUNZ Enterprise Manifesto
                </h3>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6 text-zinc-300 leading-relaxed">
                <p>
                  We are building more than a sales team. We are building a
                  movement.
                </p>
                <p>
                  In Australia and New Zealand, the enterprise market is ready
                  for transformation. Legacy infrastructure is crumbling.
                  Developer experience is becoming a board-level concern. The
                  companies that move fastest will win the next decade.
                </p>
                <p>
                  Vercel is uniquely positioned to lead this transformation. Our
                  platform isn&apos;t just faster—it&apos;s fundamentally different. We
                  enable enterprises to ship like startups while maintaining the
                  governance and security they require.
                </p>
                <p>
                  Our approach in AUNZ will be the template for global
                  enterprise expansion:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Partner-first distribution through GSIs</li>
                  <li>Developer-led adoption with executive sponsorship</li>
                  <li>Value realization in days, not quarters</li>
                  <li>Expansion through demonstrated ROI</li>
                  <li>Retention through relentless customer success</li>
                </ul>
                <p>
                  By the end of 2026, we will have proven that Vercel can
                  compete and win against any incumbent in the enterprise space.
                  AUNZ will be our proving ground.
                </p>
                <p className="font-semibold text-white">
                  This is our moment. Let&apos;s build.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
