import { User } from "@/types/user.type";
import { STORE_NAME } from "@/constants/general-data";

export const getStoredUser = (): User | null => {
  const storedUser = localStorage.getItem(STORE_NAME);
  return storedUser ? JSON.parse(storedUser) : null;
};

export const saveUserToStorage = (user: User) => {
  localStorage.setItem(STORE_NAME, JSON.stringify(user));
};

export const removeUserFromStorage = () => {
  localStorage.removeItem(STORE_NAME);
};
