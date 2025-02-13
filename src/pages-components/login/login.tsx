"use client";

import { useRouter } from "next/navigation";
import { mockUserData } from "@/constants/mock-user-data";
import { ROUTES } from "@/constants/routes";
import { useAuth } from "@/hook/useAuth";
import { AppLink, Button } from "@/shared";
import { useMemo } from "react";
import { LStepName } from "@/pages-components/login/login.type";

export const Login = () => {
  const { user, login, logout } = useAuth();
  const router = useRouter();

  const stepName = useMemo(() => {
    return user ? LStepName.logout : LStepName.login;
  }, [user]);

  const handleLogin = () => {
    login(mockUserData);
    router.push(ROUTES.DASHBOARD);
  };

  const handleLogout = () => logout();

  const stepContent = {
    [LStepName.login]: (
      <>
        <h1 className="main-title">Log In Page</h1>
        <p className="text-info">Please log in to continue.</p>
        <Button onClick={handleLogin}>Log In</Button>
      </>
    ),
    [LStepName.logout]: (
      <>
        <h1 className="main-title">Log Out Page</h1>
        <AppLink href={ROUTES.DASHBOARD}>Back to Dashboard</AppLink>
        <p className="text-info">Hello, {user?.name}</p>
        <p className="text-info">Please press the button to continue logging out.</p>
        <Button onClick={handleLogout}>Log Out</Button>
      </>
    ),
  };

  return <>{stepContent[stepName]}</>;
};
