import { User } from "@/types/user.type";

export interface AppAuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isLoading: boolean;
}
