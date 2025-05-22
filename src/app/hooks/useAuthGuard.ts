"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useAuthGuard(redirectTo = "/login") {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("session");
    if (!token) {
      router.push(redirectTo);
    }
  }, [router, redirectTo]);
}
