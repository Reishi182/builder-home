import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export const useAuthStore = create(
  persist(
    (set) => ({
      auth: null,
      token: "",
      user: "",
      resetToken: "",
      logout: () => {
        set({ user: "", token: "" });
        localStorage.removeItem("auth-expiry");
        toast.error("Session is Over, please login again");
      },
      setUser: (user) => set({ user }),
      setToken: (token) => {
        set({ token: token });
      },
      setResetToken: (token) => set({ resetToken: token }),
    }),
    {
      name: "auth-storage",
      getStorage: () => createJSONStorage(() => localStorage),
    },
  ),
);
