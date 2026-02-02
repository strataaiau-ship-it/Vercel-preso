"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface TitleSlideProps {
  onNavigate: () => void;
}

export function TitleSlide({ onNavigate }: TitleSlideProps) {
  const [isDeploying, setIsDeploying] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleDeploy = () => {
    if (isDeploying) return;
    setIsDeploying(true);
    setShowConfetti(true);
    
    setTimeout(() => {
      onNavigate();
      setIsDeploying(false);
      setShowConfetti(false);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 ml-[60px]">
      {/* Glowing Orb */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#0070F3]/20 to-[#00DFD8]/10 blur-3xl" />
      
      {/* Confetti Particles */}
      {showConfetti && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white"
              initial={{
                x: "50vw",
                y: "60vh",
                opacity: 1,
              }}
              animate={{
                x: `${Math.random() * 100}vw`,
                y: `${Math.random() * 100}vh`,
                opacity: 0,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                delay: Math.random() * 0.3,
              }}
            />
          ))}
        </div>
      )}

      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[14px] font-medium uppercase tracking-[0.1em] text-[#888888] mb-6"
        >
          Interview Presentation
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[72px] font-bold tracking-[-0.02em] leading-tight mb-6"
        >
          <span className="gradient-text">Vercel AUNZ</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[32px] text-[#888888] mb-8 leading-snug text-balance"
        >
          12-Month Plan: Setting Up the Enterprise Team for Exponential Growth
        </motion.p>

        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-4 mb-12"
        >
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#333333]">
            <Image
              src="/images/headshot.jpeg"
              alt="JJ Coquillard"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[24px] text-white font-medium">JJ Lecocq</p>
            <p className="text-[18px] text-[#888888]">Director, Enterprise Sales, AUNZ </p>
          </div>
        </motion.div>

        {/* Git Push Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={handleDeploy}
          disabled={isDeploying}
          className="group relative px-8 py-4 bg-[#111111] border border-[#333333] rounded-lg font-mono text-base transition-all duration-300 hover:border-[#0070F3] hover:shadow-[0_0_30px_rgba(0,112,243,0.3)]"
        >
          <span className="flex items-center gap-3">
            {isDeploying ? (
              <>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="inline-block"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#0070F3" strokeWidth="2" strokeDasharray="40" strokeDashoffset="10" />
                  </svg>
                </motion.span>
                <span className="text-[#0070F3]">Deploying...</span>
              </>
            ) : (
              <>
                <span className="text-[#50E3C2]">$</span>
                <span className="text-white">git push origin main</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                  className="text-white"
                >
                  _
                </motion.span>
              </>
            )}
          </span>
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-[#555555] uppercase tracking-wider">Scroll</span>
            <svg className="w-5 h-5 text-[#555555]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
