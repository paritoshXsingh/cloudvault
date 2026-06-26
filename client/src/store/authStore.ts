import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthStore {
  token: string | null;
  user: User | null;

  setAuth: (token: string, user: User) => void;

  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  token: localStorage.getItem("token"),
  user: null,

  setAuth: (token, user) => {
    localStorage.setItem("token", token);

    set({
      token,
      user,
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
