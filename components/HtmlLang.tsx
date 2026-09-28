"use client";

import { htmlLang } from "@/lib/html-lang";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function HtmlLang() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lang = htmlLang(pathname, searchParams.get("lang"));

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
