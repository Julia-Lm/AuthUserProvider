"use client";

import { useAuth } from "@/hook/useAuth";
import { ROUTES } from "@/constants/routes";
import { AppLink } from "@/shared";
import "./dashboard.styles.scss";

export const Dashboard = () => {
  const { user } = useAuth();

  return (
    <>
      <h1 className="main-title">Welcome to Dashboard!</h1>

      <AppLink href={ROUTES.LOGIN}>Go to Log Out</AppLink>

      <div className="dashboard-content">
        <p className="text-info">
          <span>User name:</span> {user?.name || "---"}
        </p>
        <p className="text-info">
          <span>Email:</span> {user?.email || "---"}
        </p>
      </div>
    </>
  );
};
