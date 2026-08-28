"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function LuxuryAuroraHeroBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Smooth Springs for Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 60, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Multi-depth Parallax transforms for orbs
  const orb1X = useTransform(smoothX, [-1, 1], [-28, 28]);
  const orb1Y = useTransform(smoothY, [-1, 1], [-20, 20]);

  const orb2X = useTransform(smoothX, [-1, 1], [35, -35]);
  const orb2Y = useTransform(smoothY, [-1, 1], [25, -25]);

  const orb3X = useTransform(smoothX, [-1, 1], [-20, 20]);
  const orb3Y = useTransform(smoothY, [-1, 1], [30, -30]);

  const canvasParallaxX = useTransform(smoothX, [-1, 1], [-15, 15]);
  const canvasParallaxY = useTransform(smoothY, [-1, 1], [-10, 10]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isHoverSupported = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHoverSupported) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x * 2);
      mouseY.set(y * 2);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  // Organic Canvas Waves (Ultra-smooth 60fps, low CPU)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    let time = 0;

    const render = () => {
      time += 0.0035; // Slow, serene organic evolution

      ctx.clearRect(0, 0, width, height);

      // 3 Organic Translucent Contour Waves
      const waves = [
        {
          baseY: height * 0.58,
          amplitude: 45,
          speed: time * 0.7,
          freq: 0.0014,
          color1: "rgba(212, 184, 138, 0.055)",
          color2: "rgba(112, 74, 53, 0.015)",
        },
        {
          baseY: height * 0.68,
          amplitude: 38,
          speed: -time * 0.55,
          freq: 0.0018,
          color1: "rgba(199, 164, 106, 0.045)",
          color2: "rgba(19, 11, 8, 0)",
        },
        {
          baseY: height * 0.78,
          amplitude: 30,
          speed: time * 0.9,
          freq: 0.0022,
          color1: "rgba(176, 136, 72, 0.035)",
          color2: "rgba(19, 11, 8, 0)",
        },
      ];

      waves.forEach((w) => {
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 8) {
          const y =
            w.baseY +
            Math.sin(x * w.freq + w.speed) * w.amplitude +
            Math.cos(x * w.freq * 0.7 + w.speed * 0.8) * (w.amplitude * 0.4);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, w.baseY - w.amplitude, 0, height);
        grad.addColorStop(0, w.color1);
        grad.addColorStop(1, w.color2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#130b08]"
      aria-hidden="true"
    >
      {/* 1. Base Dark Luxury Gradient with Subtle Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#180e0a] via-[#120a07] to-[#0d0705]" />

      {/* 2. Large Organic Fluid Aurora / Mesh Gradient Blooms with Parallax */}
      {/* Top Center-Gold Radiant Glow */}
      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        animate={{
          scale: [1, 1.08, 0.95, 1],
          opacity: [0.18, 0.26, 0.18],
          x: [0, 15, -12, 0],
          y: [0, -10, 14, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-4 h-[32rem] w-[50rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#c7a46a]/28 via-[#9e7645]/18 to-transparent blur-[130px]"
      />

      {/* Left Deep Bronze & Warm Amber Bloom */}
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        animate={{
          scale: [0.95, 1.12, 0.95],
          opacity: [0.14, 0.22, 0.14],
          x: [0, -20, 15, 0],
          y: [0, 18, -12, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -start-24 top-24 h-[28rem] w-[36rem] rounded-full bg-[#704a35]/25 blur-[140px]"
      />

      {/* Right Soft Honey-Gold Ambient Flow */}
      <motion.div
        style={{ x: orb3X, y: orb3Y }}
        animate={{
          scale: [1.05, 0.92, 1.05],
          opacity: [0.12, 0.2, 0.12],
          x: [0, 22, -18, 0],
          y: [0, -16, 20, 0],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -end-24 bottom-16 h-[30rem] w-[38rem] rounded-full bg-[#b08848]/20 blur-[150px]"
      />

      {/* Bottom Deep Velvet Mahogany Floor Glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#20100a]/30 via-transparent to-transparent blur-[100px]" />

      {/* 3. Smooth Organic Contour Waves (Canvas Layer with subtle Parallax) */}
      <motion.div
        style={{ x: canvasParallaxX, y: canvasParallaxY }}
        className="absolute inset-0 h-full w-full"
      >
        <canvas ref={canvasRef} className="h-full w-full opacity-90" />
      </motion.div>

      {/* 4. Subtle Branka Geometric Watermark Pattern (2.5% opacity) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 L80 40 L40 80 L0 40 Z' fill='none' stroke='%23d4b88a' stroke-width='1.2'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* 5. Central Readability Mask & Vignette Overlay (Protects headline & CTAs clarity) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 46%, rgba(19, 11, 8, 0.5) 0%, rgba(19, 11, 8, 0) 100%)",
        }}
      />

      {/* 6. Cinematic Edge Vignette for Premium Depth */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(10,5,3,0.7)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#130b08] to-transparent" />
    </div>
  );
}
