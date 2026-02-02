"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LOADING_MESSAGES = [
  "Initializing deployment...",
  "Building presentation...",
  "Deploying to edge...",
  "Ready.",
];

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => {
        if (prev < LOADING_MESSAGES.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 700);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return Math.min(prev + 4, 100);
        }
        return prev;
      });
    }, 100);

    const completeTimeout = setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black z-[100] flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Vercel Triangle Logo */}
            <motion.div
              animate={{
                filter: [
                  "drop-shadow(0 0 10px rgba(0, 112, 243, 0.5))",
                  "drop-shadow(0 0 20px rgba(0, 112, 243, 0.8))",
                  "drop-shadow(0 0 10px rgba(0, 112, 243, 0.5))",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <svg
                width="80"
                height="70"
                viewBox="0 0 76 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="white" />
              </svg>
            </motion.div>

            {/* Loading Messages */}
            <div className="h-6 font-mono text-sm text-[#888888]">
              <motion.span
                key={messageIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={messageIndex === LOADING_MESSAGES.length - 1 ? "text-[#50E3C2]" : ""}
              >
                {LOADING_MESSAGES[messageIndex]}
                {messageIndex < LOADING_MESSAGES.length - 1 && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    _
                  </motion.span>
                )}
              </motion.span>
            </div>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-[#111111] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(to right, #0070F3, #00DFD8)",
                  width: `${progress}%`,
                }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
