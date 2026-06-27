import { create } from "zustand";

import {
  login as loginService,
  register as registerService,
  type User,
} from "@/services/auth.service";

interface AuthState {
  token: string | null;
  user: User | null;

  login: (email: string, password: string) => Promise<void>;

  register: (name: string, email: string, password: string) => Promise<void>;

  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token"),
  user: null,

  login: async (email, password) => {
    const response = await loginService({
      email,
      password,
    });

    localStorage.setItem("token", response.token);

    set({
      token: response.token,
      user: response.user,
    });
  },

  register: async (name, email, password) => {
    const response = await registerService({
      name,
      email,
      password,
    });

    localStorage.setItem("token", response.token);

    set({
      token: response.token,
      user: response.user,
    });
  },

  logout: () => {
    localStorage.removeItem("token");

    set({
      token: null,
      user: null,
    });
  },
}));
