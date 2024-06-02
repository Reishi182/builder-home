import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      auth: false,
      loading: false,
      isAuth: () => set({ auth: true }),
      logout: () => set({ auth: false }),
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    },
  ),
);
