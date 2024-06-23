import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";
export const useAuthStore = create(
  persist(
    (set, get) => ({
      auth: null,
      token: "",
      user: "",
      resetToken: "",
      logout: () => {
        set({ user: "", token: "" });
        localStorage.removeItem("auth-expiry");
      },
      setUser: (user) => set({ user }),
      setToken: (token) => {
        const decodedToken = jwtDecode(token);
        const currentDate = new Date();
        const exp = decodedToken.exp * 1000 < currentDate.getTime();
        if (exp) {
          set({ user: "", token: "" });
        }
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
