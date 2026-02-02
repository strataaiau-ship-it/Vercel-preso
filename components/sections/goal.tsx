"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const chartData = [
  { year: "Year 1", arr: 2, label: "Foundation" },
  { year: "Year 2", arr: 8, label: "Scale" },
  { year: "Year 3", arr: 18, label: "Accelerate" },
  { year: "Year 4", arr: 25, label: "Expand" },
  { year: "Year 5", arr: 30, label: "Dominate" },
];

export function GoalSection() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showManifestModal, setShowManifestModal] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  console.log("[v0] GoalSection rendering, count:", count);
  console.log("[v0] isInView:", isInView, "hasAnimated:", hasAnimated);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      // Animate counter
      const duration = 2000;
      const target = 30;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, hasAnimated]);

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center justify-center px-8 ml-[60px]"
    >
      <div className="max-w-5xl w-full mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-[14px] font-medium uppercase tracking-[0.1em] text-[#888888] mb-8 text-center"
        >
          The Mission
        </motion.p>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="text-[120px] font-bold tracking-[-0.02em] gradient-text leading-none" style={{ color: 'transparent' }}>
            ${count}M
          </div>
          <p className="text-[32px] mt-4" style={{ color: '#FFFFFF' }}>ARR by 2030</p>
          <p className="text-[18px] mt-2 max-w-xl mx-auto leading-relaxed" style={{ color: '#888888' }}>
            Scale Vercel AUNZ Enterprise segment to a USD $30M ARR business
          </p>
        </motion.div>

        {/* Growth Chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-[300px] mt-12"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <defs>
                <linearGradient id="colorArr" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0070F3" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#0070F3" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0070F3" />
                  <stop offset="100%" stopColor="#00DFD8" />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="year"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#888888", fontSize: 14 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#888888", fontSize: 14 }}
                tickFormatter={(value) => `$${value}M`}
                domain={[0, 35]}
              />
              <Area
                type="monotone"
                dataKey="arr"
                stroke="url(#lineGradient)"
                strokeWidth={3}
                fill="url(#colorArr)"
                dot={({ cx, cy, payload }) => (
                  <g key={payload.year}>
                    <circle cx={cx} cy={cy} r={6} fill="#0070F3" stroke="#000" strokeWidth={2} />
                    <text
                      x={cx}
                      y={cy - 20}
                      textAnchor="middle"
                      fill="#888888"
                      fontSize={12}
                    >
                      {payload.label}
                    </text>
                  </g>
                )}
                animationDuration={2000}
                animationBegin={0}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Manifest the Future Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={() => setShowManifestModal(true)}
            className="group relative px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 bg-transparent border border-transparent hover:border-transparent"
            style={{
              background: "linear-gradient(#000, #000) padding-box, linear-gradient(to right, #0070F3, #00DFD8) border-box",
              border: "1px solid transparent",
            }}
          >
            <span className="relative z-10 text-[#888888] group-hover:text-white transition-colors">
              Manifest the Future ✦
            </span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#0070F3] to-[#00DFD8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-sm">
              Manifest the Future ✦
            </span>
          </button>
        </motion.div>
      </div>

      {/* Manifestation Modal */}
      <AnimatePresence>
        {showManifestModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            onClick={() => setShowManifestModal(false)}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/90" />

            {/* Star particles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute inset-0 pointer-events-none overflow-hidden"
            >
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>

            {/* Close button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setShowManifestModal(false)}
              className="absolute top-6 right-6 z-10 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </motion.button>

            {/* Modal content */}
            <div className="relative z-10 flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-[32px] font-bold mb-8 bg-gradient-to-r from-[#0070F3] to-[#00DFD8] bg-clip-text text-transparent"
              >
                President&apos;s Club 2028
              </motion.h2>

              {/* Image with Ken Burns zoom */}
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1.05 }}
                transition={{
                  opacity: { delay: 0.6, duration: 0.5 },
                  scale: { delay: 0.6, duration: 10, ease: "linear" },
                }}
                className="relative w-[80vw] max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/presidents-club-2028.jpg"
                  alt="President's Club 2028 - Vercel ANZ Team"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Caption */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-[18px] text-[#888888] mt-8"
              >
                Vercel ANZ Team — This is what we&apos;re building.
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
