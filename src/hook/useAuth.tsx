import { useContext } from "react";
import { AppAuthContext } from "@/context";

export const useAuth = () => {
  const context = useContext(AppAuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside a AppAuthContext Provider");
  }
  return context;
};
