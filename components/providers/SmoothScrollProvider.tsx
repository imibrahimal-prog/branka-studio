"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const useEnhancedScroll =
      !reduceMotion && window.matchMedia("(pointer: fine)").matches;
    const easing = (value: number) => 1 - Math.pow(1 - value, 4);
    const lenis = useEnhancedScroll
      ? new Lenis({
          autoRaf: true,
          duration: 0.78,
          easing,
          smoothWheel: true,
          wheelMultiplier: 0.88,
          touchMultiplier: 1,
        })
      : null;

    function getHeaderOffset() {
      const header = document.querySelector<HTMLElement>(".branka-site-header");
      return -((header?.getBoundingClientRect().height ?? 80) + 8);
    }

    function normalisePath(value: string) {
      return value.replace(/\/+$/, "") || "/";
    }

    function scrollToHash(hash: string, immediate = false) {
      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return false;

      if (lenis) {
        lenis.scrollTo(target, {
          offset: getHeaderOffset(),
          duration: immediate ? 0 : 0.78,
          easing,
          immediate,
        });
      } else {
        const top =
          window.scrollY +
          target.getBoundingClientRect().top +
          getHeaderOffset();
        window.scrollTo({
          top,
          behavior: immediate || reduceMotion ? "auto" : "smooth",
        });
      }
      return true;
    }

    function handleAnchorClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const source = event.target;
      if (!(source instanceof Element)) return;

      const anchor = source.closest<HTMLAnchorElement>("a[href*='#']");
      if (!anchor || anchor.target === "_blank" || !anchor.hash) return;

      const destination = new URL(anchor.href, window.location.href);
      const current = new URL(window.location.href);
      const samePage =
        destination.origin === current.origin &&
        normalisePath(destination.pathname) === normalisePath(current.pathname);

      if (!samePage || !scrollToHash(destination.hash)) return;

      event.preventDefault();
      window.history.pushState(null, "", destination.hash);
    }

    function handleHistoryNavigation() {
      if (window.location.hash) scrollToHash(window.location.hash);
    }

    document.addEventListener("click", handleAnchorClick, true);
    window.addEventListener("popstate", handleHistoryNavigation);

    return () => {
      document.removeEventListener("click", handleAnchorClick, true);
      window.removeEventListener("popstate", handleHistoryNavigation);
      lenis?.destroy();
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let observer: IntersectionObserver | null = null;
    const frame = window.requestAnimationFrame(() => {
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>(
          "main > section:not(:first-child) > .luxury-container > *",
        ),
      );

      if (reduceMotion || !("IntersectionObserver" in window)) {
        elements.forEach((element) =>
          element.classList.add("branka-reveal-visible"),
        );
        return;
      }

      const positions = new Map<Element, number>();
      elements.forEach((element) => {
        const container = element.parentElement;
        const position = container ? (positions.get(container) ?? 0) : 0;
        positions.set(container ?? element, position + 1);
        element.classList.add("branka-reveal-item");
        element.style.setProperty(
          "--branka-reveal-delay",
          `${Math.min(position * 65, 160)}ms`,
        );
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("branka-reveal-visible");
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
      );

      elements.forEach((element) => observer?.observe(element));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  return <>{children}</>;
}
