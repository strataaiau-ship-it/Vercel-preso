"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

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
          <div className="text-[120px] font-bold tracking-[-0.02em] gradient-text leading-none">
            ${count}M
          </div>
          <p className="text-[32px] text-white mt-4">ARR by 2030</p>
          <p className="text-[18px] text-[#888888] mt-2 max-w-xl mx-auto leading-relaxed">
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
      </div>
    </div>
  );
}
