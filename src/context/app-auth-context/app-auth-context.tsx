import { createContext } from "react";
import { AppAuthContextType } from "@/context/app-auth-context/app-auth-context.type";

const defaultState: AppAuthContextType = {
  isLoading: false,
  user: null,
  login: () => {},
  logout: () => {},
};

export const AppAuthContext = createContext<AppAuthContextType>(defaultState);
