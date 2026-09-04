"use client";
import { useEffect, useId, useRef, useState } from "react";
import { rediscoverLanguages, type Language } from "@/lib/rediscover-languages";

export function LanguageMenu({
  lang,
  label,
}: {
  lang: Language;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const items = useRef<(HTMLButtonElement | null)[]>([]);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const menuId = useId();
  const openingIndex = useRef(0);
  useEffect(() => {
    if (!open) return;
    let innerFrame = 0;
    const frame = requestAnimationFrame(() => {
      innerFrame = requestAnimationFrame(() =>
        items.current[openingIndex.current]?.focus(),
      );
    });
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(innerFrame);
    };
  }, [open]);
  const count = rediscoverLanguages.length;
  const selected = rediscoverLanguages.findIndex(
    (locale) => locale.code === lang,
  );
  function close(restoreFocus = false) {
    setOpen(false);
    setClosing(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setClosing(false), 150);
    if (restoreFocus) trigger.current?.focus();
  }
  function show(index = selected) {
    clearTimeout(timer.current);
    setClosing(false);
    openingIndex.current = index;
    setOpen(true);
    if (open) items.current[index]?.focus();
  }
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) close();
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [open]);
  function choose(code: Language) {
    close(true);
    if (code === lang) return;
    const url = new URL(window.location.href);
    if (code === "en") url.searchParams.delete("lang");
    else url.searchParams.set("lang", code);
    window.location.assign(url.href);
  }
  return (
    <div
      className="rd-language"
      ref={root}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) close();
      }}
    >
      <button
        className="rd-language-trigger"
        ref={trigger}
        type="button"
        aria-label={`${label}: ${rediscoverLanguages[selected].label}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => (open ? close() : show())}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            show(event.key === "ArrowUp" ? count - 1 : selected);
          }
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="10" cy="10" r="8" />
          <ellipse cx="10" cy="10" rx="3.5" ry="8" />
          <path d="M2 10h16" />
        </svg>
        <span>{rediscoverLanguages[selected].label}</span>
        <svg
          className="rd-language-chevron"
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path d="m2 4 4 4 4-4" />
        </svg>
      </button>
      <div
        id={menuId}
        role="menu"
        aria-label={label}
        aria-hidden={!open}
        inert={!open}
        className={`rd-language-menu${open ? " is-open" : ""}${closing ? " is-closing" : ""}`}
        onKeyDown={(event) => {
          const index = items.current.indexOf(
            document.activeElement as HTMLButtonElement,
          );
          let next: number | undefined;
          if (event.key === "ArrowDown") next = (index + 1) % count;
          if (event.key === "ArrowUp") next = (index + count - 1) % count;
          if (event.key === "Home") next = 0;
          if (event.key === "End") next = count - 1;
          if (next !== undefined) {
            event.preventDefault();
            items.current[next]?.focus();
          }
          if (event.key === "Escape") {
            event.preventDefault();
            event.stopPropagation();
            close(true);
          }
          const letter = event.key.toLowerCase();
          if (
            event.key.length === 1 &&
            !event.ctrlKey &&
            !event.metaKey &&
            !event.altKey
          ) {
            const match = Array.from(
              { length: count },
              (_, offset) => (index + 1 + offset) % count,
            ).find((i) =>
              rediscoverLanguages[i].label
                .toLocaleLowerCase()
                .startsWith(letter),
            );
            if (match !== undefined) {
              event.preventDefault();
              items.current[match]?.focus();
            }
          }
        }}
      >
        {rediscoverLanguages.map((locale, index) => (
          <button
            key={locale.code}
            type="button"
            role="menuitemradio"
            aria-checked={locale.code === lang}
            tabIndex={-1}
            ref={(element) => {
              items.current[index] = element;
            }}
            onClick={() => choose(locale.code)}
          >
            <span>{locale.label}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              style={{
                visibility: locale.code === lang ? "visible" : "hidden",
              }}
            >
              <path d="m3 8 3 3 7-7" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
