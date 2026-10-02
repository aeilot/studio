"use client";

import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";
const storageKey = "inspirplanet-theme";
function applyTheme(theme: Theme) {
  document.documentElement.dataset.ipTheme = theme;
}

export function ThemeControl({ labels }: { labels: string[] }) {
  const [ready, setReady] = useState(false);
  const [theme, setTheme] = useState<Theme>("system");
  useEffect(() => {
    function readPreference() {
      let next: Theme = "system";
      try {
        const saved = localStorage.getItem(storageKey);
        if (saved === "light" || saved === "dark") next = saved;
      } catch { /* Theme selection still works when storage is unavailable. */ }
      setTheme(next);
      applyTheme(next);
    }
    readPreference();
    setReady(true);
    function onStorage(event: StorageEvent) {
      if (event.key === storageKey || event.key === null) readPreference();
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return <label className="ip-theme-control">
    <span>{labels[0]}</span>
    <select aria-label={labels[1]} disabled={!ready} value={theme} onChange={(event) => {
      const next = event.target.value as Theme;
      setTheme(next);
      applyTheme(next);
      try { localStorage.setItem(storageKey, next); } catch { /* Optional persistence. */ }
    }}>
      <option value="system">{labels[2]}</option>
      <option value="light">{labels[3]}</option>
      <option value="dark">{labels[4]}</option>
    </select>
  </label>;
}
