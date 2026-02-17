import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./lib/i18n-config";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignore next internals, api routes, and files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if the pathname already has a locale prefix
  const hasLocale = i18n.locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  // Redirect to the default locale (Arabic)
  const url = req.nextUrl.clone();
  const newPathname = `/ar${pathname === "/" ? "/start" : pathname}`;
  url.pathname = newPathname;
  
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\..*).*)"],
};
