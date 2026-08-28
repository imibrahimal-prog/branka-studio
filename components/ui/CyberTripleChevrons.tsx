"use client";

import React from "react";
import { motion } from "framer-motion";

interface CyberTripleChevronsProps {
  direction?: "down-left" | "down-right" | "down";
  className?: string;
}

export function CyberTripleChevrons({
  direction = "down",
  className = "",
}: CyberTripleChevronsProps) {
  // Determine rotation based on direction
  const rotation =
    direction === "down-left"
      ? "rotate-[120deg]"
      : direction === "down-right"
        ? "rotate-[60deg]"
        : "rotate-90";

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        width="100"
        height="100"
        viewBox="0 0 105 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 ${rotation} transition-transform drop-shadow-[0_0_12px_rgba(212,184,138,0.35)]`}
      >
        <defs>
          <linearGradient
            id={`cyber-chev-grad-${direction}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#f5dfb8" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#c7a46a" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#8f522e" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* 3 Stacked Parallel Chevrons (matching Image 2) */}
        {/* Chevron 1 (Trailing / Inner) */}
        <motion.path
          d="M 5 10 L 35 50 L 5 90 L 22 90 L 52 50 L 22 10 Z"
          fill={`url(#cyber-chev-grad-${direction})`}
          animate={{
            opacity: [0.25, 0.7, 0.25],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: 0,
            ease: "easeInOut",
          }}
        />

        {/* Chevron 2 (Middle) */}
        <motion.path
          d="M 28 10 L 58 50 L 28 90 L 45 90 L 75 50 L 45 10 Z"
          fill={`url(#cyber-chev-grad-${direction})`}
          animate={{
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: 0.25,
            ease: "easeInOut",
          }}
        />

        {/* Chevron 3 (Leading / Outer) */}
        <motion.path
          d="M 51 10 L 81 50 L 51 90 L 68 90 L 98 50 L 68 10 Z"
          fill={`url(#cyber-chev-grad-${direction})`}
          animate={{
            opacity: [0.55, 1, 0.55],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: 0.5,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}
