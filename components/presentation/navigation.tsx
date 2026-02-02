"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Section {
  id: string;
  name: string;
  number: string;
}

interface NavigationProps {
  sections: Section[];
  currentSection: number;
  onNavigate: (index: number) => void;
}

export function Navigation({ sections, currentSection, onNavigate }: NavigationProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.nav
      className="fixed left-0 top-0 h-full z-50 bg-black/80 backdrop-blur-sm border-r border-[#222222]"
      initial={{ width: 60 }}
      animate={{ width: isHovered ? 200 : 60 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full py-6">
        {/* Vercel Logo */}
        <div className="px-4 mb-8">
          <svg
            width="24"
            height="21"
            viewBox="0 0 76 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="white" />
          </svg>
        </div>

        {/* Section Links */}
        <div className="flex-1 flex flex-col gap-1 px-2 overflow-y-auto">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => onNavigate(index)}
              className={`flex items-center gap-3 px-2 py-2 rounded-md transition-all duration-200 text-left ${
                index === currentSection
                  ? "bg-gradient-to-r from-[#0070F3]/20 to-transparent"
                  : "hover:bg-[#111111]"
              }`}
            >
              <span
                className={`font-mono text-xs w-6 flex-shrink-0 ${
                  index === currentSection
                    ? "text-[#0070F3]"
                    : "text-[#555555]"
                }`}
              >
                {section.number}
              </span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className={`text-sm whitespace-nowrap ${
                  index === currentSection
                    ? "text-white font-medium"
                    : "text-[#888888]"
                }`}
              >
                {section.name}
              </motion.span>
              {index === currentSection && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 w-0.5 h-6 bg-gradient-to-b from-[#0070F3] to-[#00DFD8] rounded-r"
                />
              )}
            </button>
          ))}
        </div>

        {/* Keyboard Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="px-4 pt-4 border-t border-[#222222]"
        >
          <div className="flex items-center gap-2 text-xs text-[#555555]">
            <kbd className="px-1.5 py-0.5 bg-[#111111] rounded border border-[#333333] font-mono">
              ↑
            </kbd>
            <kbd className="px-1.5 py-0.5 bg-[#111111] rounded border border-[#333333] font-mono">
              ↓
            </kbd>
            <span>navigate</span>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
