import { htmlLang, htmlLangHeader } from "@/lib/html-lang";
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set(
    htmlLangHeader,
    htmlLang(
      request.nextUrl.pathname,
      request.nextUrl.searchParams.get("lang"),
    ),
  );
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)",
  ],
};
