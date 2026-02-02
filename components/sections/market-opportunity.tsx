"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const somData = [
  {
    year: "Year 1",
    share: "0.5-1%",
    arr: "$2-6M",
    notes: "3-5 lighthouse accounts, ecosystem seeding",
  },
  {
    year: "Year 2",
    share: "1.5-3%",
    arr: "$6-18M",
    notes: "15-30 enterprise logos, partner pipeline",
  },
  {
    year: "Year 3",
    share: "3-5%",
    arr: "$12-30M",
    notes: "Scaled motion with local references",
  },
];

function AnimatedNumber({ value, suffix = "", prefix = "", delay = 0 }: { value: number; suffix?: string; prefix?: string; delay?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        const duration = 1500;
        const steps = 30;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            setDisplayValue(value);
            clearInterval(timer);
          } else {
            setDisplayValue(Math.floor(current * 10) / 10);
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [isInView, value, delay]);

  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>;
}

export function MarketOpportunitySection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 ml-[60px] py-16">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-[48px] font-semibold mb-8"
            >
              Why <span className="gradient-text">$30M</span> is Achievable
            </motion.h2>

            {/* Market Sizing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 mb-10"
            >
              <h3 className="text-[14px] font-medium uppercase tracking-[0.1em] text-[#888888]">
                Market Sizing
              </h3>
              <div className="space-y-3 text-[16px] text-[#888888]">
                <p>
                  <span className="text-white">ANZ Frontend Platform TAM:</span> $700M-900M (2024) → $1.3-1.6B (2027)
                </p>
                <p>
                  <span className="text-white">Enterprise SAM ({">"} $100M revenue):</span> $400-600M (2024) → $600-900M (2027)
                </p>
                <p>
                  <span className="text-white">CAGR:</span> 15-18%
                </p>
                <p>
                  <span className="text-white">Split:</span> 40-45% new development / 55-60% modernisation/migration
                </p>
              </div>
            </motion.div>

            {/* SOM Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-[14px] font-medium uppercase tracking-[0.1em] text-[#888888] mb-4">
                Serviceable Obtainable Market
              </h3>
              <div className="overflow-hidden rounded-lg border border-[#333333]">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#111111]">
                      <th className="px-4 py-3 text-left text-[14px] font-medium text-[#888888]">
                        Year
                      </th>
                      <th className="px-4 py-3 text-left text-[14px] font-medium text-[#888888]">
                        SAM Share
                      </th>
                      <th className="px-4 py-3 text-left text-[14px] font-medium text-[#888888]">
                        ARR Target
                      </th>
                      <th className="px-4 py-3 text-left text-[14px] font-medium text-[#888888]">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {somData.map((row, index) => (
                      <motion.tr
                        key={row.year}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="border-t border-[#333333] hover:bg-[#111111] transition-colors"
                      >
                        <td className="px-4 py-3 text-white font-medium">
                          {row.year}
                        </td>
                        <td className="px-4 py-3 text-[#0070F3]">{row.share}</td>
                        <td className="px-4 py-3 text-[#50E3C2] font-medium">
                          {row.arr}
                        </td>
                        <td className="px-4 py-3 text-[#888888] text-[14px]">
                          {row.notes}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Funnel Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex flex-col items-center justify-center"
          >
            {/* TAM */}
            <div className="relative w-full max-w-[400px]">
              <div className="bg-[#111111] border border-[#333333] rounded-2xl p-6 mb-4">
                <p className="text-[14px] font-medium uppercase tracking-[0.1em] text-[#888888] mb-2">
                  TAM (2027)
                </p>
                <p className="text-[36px] font-bold text-white">
                  <AnimatedNumber value={1.3} prefix="$" suffix="B+" />
                </p>
                <p className="text-[14px] text-[#888888]">
                  Total Addressable Market
                </p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg
                  className="w-8 h-8 text-[#333333]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>

              {/* SAM */}
              <div className="bg-[#111111] border border-[#333333] rounded-2xl p-6 my-4 mx-8">
                <p className="text-[14px] font-medium uppercase tracking-[0.1em] text-[#888888] mb-2">
                  SAM (2027)
                </p>
                <p className="text-[32px] font-bold text-white">
                  <AnimatedNumber value={600} prefix="$" suffix="-900M" delay={300} />
                </p>
                <p className="text-[14px] text-[#888888]">Enterprise Segment</p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg
                  className="w-8 h-8 text-[#333333]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>

              {/* SOM - Highlighted */}
              <div className="bg-gradient-to-br from-[#0070F3]/20 to-[#00DFD8]/10 border-2 border-[#0070F3] rounded-2xl p-6 mt-4 mx-16 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#0070F3] rounded-full text-[12px] font-medium">
                  TARGET
                </div>
                <p className="text-[14px] font-medium uppercase tracking-[0.1em] text-[#888888] mb-2 mt-2">
                  SOM (Year 5)
                </p>
                <p className="text-[40px] font-bold gradient-text">
                  <AnimatedNumber value={30} prefix="$" suffix="M" delay={600} />
                </p>
                <p className="text-[14px] text-[#888888]">Our Target</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
