import { decrypt } from "@/app/lib/session";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/admin"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = req.cookies.get("session")?.value;

  let decoded: unknown = null;
  try {
    decoded = await decrypt(token);
  } catch {
    return;
  }

  const isProtectedRoute = protectedRoutes.includes(path);

  // Redireciona para login se rota for protegida e o usuário não tiver token
  if (isProtectedRoute && !decoded) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Evita rodar o middleware em rotas estáticas, api, imagens etc.
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
