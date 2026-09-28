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
          ".rd-cloud-copy, .rd-cloud-devices, .rd-manifesto, .rd-story-intro, .rd-feature-shot, .rd-reading, .rd-save-copy, .rd-save-art, .rd-extension-grid, .rd-radar-art, .rd-radar-copy, .rd-shared-copy, .rd-shared-art, .rd-pocket-inner, .rd-plan-grid, .rd-end",
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
    const jump = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element).closest<HTMLAnchorElement>("a[href]");
      if (!link || !root.contains(link)) return;
      const url = new URL(link.href);
      if (!url.hash || url.pathname !== location.pathname || url.search !== location.search) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({
        behavior: preference.matches ? "auto" : "smooth",
        block: "start",
      });
      history.pushState(history.state, "", url.hash);
    };
    configure();
    preference.addEventListener("change", configure);
    root.addEventListener("click", jump);
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll);
      preference.removeEventListener("change", configure);
      root.removeEventListener("click", jump);
      root
        .querySelectorAll(".rd-reveal")
        .forEach((el) => el.classList.remove("rd-reveal"));
    };
  }, []);
  return null;
}
