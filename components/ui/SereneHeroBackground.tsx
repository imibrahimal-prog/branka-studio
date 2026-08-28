"use client";

import React, { useEffect, useRef } from "react";

export function SereneHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Resize handler
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse tracking with smooth damping
    let targetMouseX = width / 2;
    let targetMouseY = height / 3;
    let mouseX = targetMouseX;
    let mouseY = targetMouseY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Particles setup
    const particleCount = 42;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.6,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: -Math.random() * 0.35 - 0.15,
      opacity: Math.random() * 0.45 + 0.15,
      opacitySpeed: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
      maxOpacity: Math.random() * 0.5 + 0.25,
      minOpacity: Math.random() * 0.1 + 0.05,
    }));

    let step = 0;

    const render = () => {
      step += 0.008;

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // 1. Soft Dynamic Radial Glow following mouse smoothly
      const mouseGrad = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        width * 0.45
      );
      mouseGrad.addColorStop(0, "rgba(199, 164, 106, 0.12)");
      mouseGrad.addColorStop(0.5, "rgba(112, 74, 53, 0.05)");
      mouseGrad.addColorStop(1, "rgba(19, 11, 8, 0)");

      ctx.fillStyle = mouseGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Flowing Golden Silk Sine Waves
      const waves = [
        {
          amplitude: 45,
          frequency: 0.0018,
          speed: step * 0.8,
          yOffset: height * 0.68,
          color1: "rgba(212, 184, 138, 0.09)",
          color2: "rgba(112, 74, 53, 0.02)",
        },
        {
          amplitude: 35,
          frequency: 0.0024,
          speed: -step * 0.6,
          yOffset: height * 0.74,
          color1: "rgba(199, 164, 106, 0.07)",
          color2: "rgba(19, 11, 8, 0)",
        },
        {
          amplitude: 25,
          frequency: 0.003,
          speed: step * 1.1,
          yOffset: height * 0.82,
          color1: "rgba(176, 136, 72, 0.05)",
          color2: "rgba(19, 11, 8, 0)",
        },
      ];

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 6) {
          const y =
            wave.yOffset +
            Math.sin(x * wave.frequency + wave.speed) * wave.amplitude +
            Math.cos(x * wave.frequency * 0.6 + wave.speed * 0.7) *
              (wave.amplitude * 0.45);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, wave.yOffset - wave.amplitude, 0, height);
        grad.addColorStop(0, wave.color1);
        grad.addColorStop(1, wave.color2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // 3. Delicate Floating Golden Particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.opacitySpeed;

        if (p.opacity > p.maxOpacity || p.opacity < p.minOpacity) {
          p.opacitySpeed = -p.opacitySpeed;
        }

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 184, 138, ${Math.max(0, p.opacity)})`;
        ctx.shadowColor = "rgba(212, 184, 138, 0.4)";
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Dynamic Animated Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-90 transition-opacity duration-1000"
      />

      {/* Breathing Ambient Aurora Orbs */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[28rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#c7a46a]/15 via-[#704a35]/10 to-transparent blur-[110px] animate-pulse duration-[6000ms]" />

      {/* Gentle Floating Light Accents */}
      <div className="pointer-events-none absolute start-[10%] top-[30%] h-64 w-64 rounded-full bg-[#c7a46a]/10 blur-[90px] animate-pulse duration-[8000ms]" />
      <div className="pointer-events-none absolute end-[10%] bottom-[20%] h-72 w-72 rounded-full bg-[#704a35]/15 blur-[100px] animate-pulse duration-[10000ms]" />
    </div>
  );
}
