"use client";

import { useEffect, useState } from "react";

export function useMouseParallax(multiplier = 1) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      const x = (event.clientX / window.innerWidth - 0.5) * multiplier;
      const y = (event.clientY / window.innerHeight - 0.5) * multiplier;
      setOffset({ x, y });
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [multiplier]);

  return offset;
}
