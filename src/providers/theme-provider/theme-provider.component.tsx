"use client";

import { ReactNode } from "react";
import "@/styles/global.styles.scss";

export const ThemeProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};
