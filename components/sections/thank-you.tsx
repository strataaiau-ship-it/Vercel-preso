"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Linkedin, Calendar } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetTimestamp: number): TimeLeft {
  const now = Date.now();
  const difference = targetTimestamp - now;

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
}

function useCountdown(targetTimestamp: number): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetTimestamp));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTimestamp));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetTimestamp]);

  return timeLeft;
}

function FlipDigit({ value, label }: { value: number; label: string }) {
  const displayValue = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 lg:px-6 lg:py-4 min-w-[60px] lg:min-w-[80px]">
          <span className="text-3xl lg:text-5xl font-mono font-bold text-white">
            {displayValue}
          </span>
        </div>
        <div className="absolute inset-x-0 top-1/2 h-px bg-zinc-700" />
      </div>
      <span className="text-zinc-500 text-xs lg:text-sm mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

// March 2, 2026 - Start date (Sydney time) - declared outside component to avoid re-creation
const TARGET_TIMESTAMP = new Date("2026-03-02T09:00:00+11:00").getTime();

export function ThankYouSection() {
  const timeLeft = useCountdown(TARGET_TIMESTAMP);

  return (
    <section className="snap-section min-h-screen flex flex-col justify-center px-8 lg:px-16 py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0070F3]/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-[#0070F3] text-sm font-mono mb-4 block">
            14 // THANK YOU
          </span>
        </motion.div>

        {/* Photo and Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-6">
            <Image
              src="/images/headshot.jpeg"
              alt="JJ Coquillard"
              fill
              className="rounded-full object-cover border-4 border-zinc-800"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0070F3]/20 to-[#00DFD8]/20" />
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Thank You
          </h2>
          <p className="text-xl lg:text-2xl text-zinc-400 mb-2">JJ Coquillard</p>
          <p className="text-zinc-500">Regional Director, Enterprise AUNZ</p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-2 text-zinc-400 mb-6">
            <Calendar className="w-5 h-5" />
            <span>Countdown to Day 1: March 2, 2026</span>
          </div>

          <div className="flex justify-center gap-4 lg:gap-6">
            <FlipDigit value={timeLeft.days} label="Days" />
            <FlipDigit value={timeLeft.hours} label="Hours" />
            <FlipDigit value={timeLeft.minutes} label="Minutes" />
            <FlipDigit value={timeLeft.seconds} label="Seconds" />
          </div>
        </motion.div>

        {/* President's Club Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0070F3] to-[#00DFD8] rounded-2xl blur-xl opacity-20" />
            <div className="relative bg-zinc-900/80 border border-zinc-700 rounded-2xl overflow-hidden">
              <div className="relative h-64 lg:h-80">
                <Image
                  src="/images/presidents-club-2028.jpg"
                  alt="President's Club 2028 Vision - Rio de Janeiro"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <p className="text-[#0070F3] text-sm font-mono mb-2">
                    THE VISION
                  </p>
                  <p className="text-white text-xl lg:text-2xl font-semibold">
                    President&apos;s Club 2028
                  </p>
                  <p className="text-zinc-400">Rio de Janeiro, Brazil</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6"
        >
          <a
            href="mailto:jj@vercel.com"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>jj@vercel.com</span>
          </a>
          <a
            href="https://linkedin.com/in/jjcoquillard"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </motion.div>

        {/* Vercel Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Image
            src="/images/vercel-logo.png"
            alt="Vercel"
            width={120}
            height={26}
            className="mx-auto opacity-50"
          />
        </motion.div>
      </div>
    </section>
  );
}
