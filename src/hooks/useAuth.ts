import create from "zustand";
import { loginRequest } from "../api";

export type UserType = {
  id: number;
  name: string;
  email: string;
};

export interface AuthStoreType {
  user: UserType | null;
  isLoggedIn: boolean;
  error: boolean | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const useAuth = create<AuthStoreType>((set) => ({
  isLoggedIn: false,
  error: null,
  user: {
    id: -1,
    name: "",
    email: "",
  },
  login: async (email: string, password: string) => {
    try {
      const response = await loginRequest(email);

      if (response.password !== password) {
        set((state) => ({ ...state, error: true }));
      } else {
        set((state) => ({
          ...state,
          isLoggedIn: true,
          error: false,
          user: {
            id: response.id,
            email,
            name: response.name,
          },
        }));
      }
    } catch (error) {
      set((state) => ({ ...state, error: true }));
    }
  },
  logout: () =>
    set((state) => ({
      ...state,
      isLoggedIn: false,
      error: null,
      user: { id: -1, name: "", email: "" },
    })),
}));
