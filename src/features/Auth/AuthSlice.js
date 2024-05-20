import { create } from "zustand";

export const useAuthStore = create((set) => ({
  auth: false,
  loading: false,
  login: (setAuth) => set({ auth: setAuth }),
  logout: () => set({ auth: false }),
  setLoading: (load) => set({ loading: load }),
}));
