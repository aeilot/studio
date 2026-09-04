"use client";

import { useEffect } from "react";

export function Motion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".rd");
    if (!root) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      const hero = root.querySelector<HTMLElement>(".rd-hero-art");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const progress = Math.max(
          0,
          Math.min(1, (innerHeight - rect.top) / (innerHeight + rect.height)),
        );
        hero.style.setProperty("--device-rise", `${(0.5 - progress) * 45}px`);
      }
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const configure = () => {
      observer?.disconnect();
      window.removeEventListener("scroll", scroll);
      cancelAnimationFrame(frame);
      frame = 0;
      root
        .querySelectorAll<HTMLElement>(".rd-reveal")
        .forEach((el) => el.classList.remove("rd-reveal"));
      root
        .querySelector<HTMLElement>(".rd-hero-art")
        ?.style.removeProperty("--device-rise");
      if (preference.matches) return;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries)
            if (entry.isIntersecting) {
              entry.target.classList.add("rd-visible");
              observer?.unobserve(entry.target);
            }
        },
        { threshold: 0.12 },
      );
      root
        .querySelectorAll<HTMLElement>(
          ".rd-cloud-copy, .rd-cloud-devices, .rd-manifesto, .rd-story-intro, .rd-feature-shot, .rd-reading, .rd-radar-art, .rd-radar-copy, .rd-extensions, .rd-feedback, .rd-end",
        )
        .forEach((el) => {
          if (el.getBoundingClientRect().top > innerHeight * 0.95) {
            el.classList.add("rd-reveal");
            observer?.observe(el);
          }
        });
      window.addEventListener("scroll", scroll, { passive: true });
      update();
    };
    configure();
    preference.addEventListener("change", configure);
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll);
      preference.removeEventListener("change", configure);
      root
        .querySelectorAll(".rd-reveal")
        .forEach((el) => el.classList.remove("rd-reveal"));
    };
  }, []);
  return null;
}
