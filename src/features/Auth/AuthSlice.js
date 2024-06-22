import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      auth: null,
      token: "",
      user: "",
      resetToken: "",
      logout: () => set({ user: {}, token: "" }),
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      setResetToken: (token) => set({ resetToken: token }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
