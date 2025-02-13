"use client";

import { useEffect, useState } from "react";
import { User } from "@/types/user.type";
import { AppAuthContext } from "@/context";
import { UserProviderProp } from "@/providers/user-provider/user-provider.type";
import { Spinner } from "@/shared";
import { getStoredUser, removeUserFromStorage, saveUserToStorage } from "@/utils/user-storage";
import {delayCall} from "@/utils/delay-call";

export const UserProvider = ({ children }: UserProviderProp) => {
  const [user, setUser] = useState<User | null>(null);
  const [isDataReady, setIsDataReady] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setUser(getStoredUser());
    delayCall(setIsDataReady)(true);
  }, []);

  const login = (userData: User) => {
    setIsLoading(true);
    setUser(userData);
    saveUserToStorage(userData);
    delayCall(setIsLoading)(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUser(null);
    removeUserFromStorage();
    delayCall(setIsLoading)(false);
  };

  return (
    <AppAuthContext.Provider value={{ user, login, logout, isLoading }}>
      {!isDataReady ? <Spinner /> : <>{children}</>}
    </AppAuthContext.Provider>
  );
};
