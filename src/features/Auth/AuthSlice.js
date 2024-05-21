import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      auth: false,
      loading: false,
      login: () => set({ auth: true }),
      logout: () => set({ auth: false }),
      setLoading: (load) => set({ loading: load }),
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);
