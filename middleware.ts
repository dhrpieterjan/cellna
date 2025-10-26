import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Handle image optimization requests
  if (request.nextUrl.pathname.startsWith("/_next/image")) {
    // Allow image optimization requests to pass through
    return NextResponse.next();
  }

  // Handle media file requests
  if (request.nextUrl.pathname.startsWith("/api/media/file")) {
    // Allow media file requests to pass through
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
