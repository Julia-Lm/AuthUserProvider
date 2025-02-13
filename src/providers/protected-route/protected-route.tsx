"use client";

import { useAuth } from "@/hook/useAuth";
import { redirect, usePathname } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { ProtectedRouteProps } from "@/providers/protected-route/protected-route.type";
import { useEffect } from "react";
import { Spinner } from "@/shared";

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, isLoading } = useAuth();
  const pathname = usePathname();
  const protectedPathList = [ROUTES.BASE_ROUTE, `${ROUTES.DASHBOARD}/`, ROUTES.DASHBOARD];

  useEffect(() => {
    if (!user && protectedPathList.includes(pathname)) {
      redirect(ROUTES.LOGIN);
    }
  }, [user]);

  return isLoading ? <Spinner /> : <>{children}</>;
};
