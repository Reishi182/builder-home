// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import Router from "./routes/Router.jsx";
import { useAuthStore } from "./features/Auth/AuthSlice.js";
import { jwtDecode } from "jwt-decode";

export default function App() {
  const { token, logout } = useAuthStore((state) => state);

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const currentDate = new Date();
      const exp = decodedToken.exp * 1000 < currentDate.getTime();
      if (exp) {
        logout();
      }
    } catch (error) {
      console.error("Invalid token:", error);
      logout();
    }
  }
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "1.6rem",
              maxWidth: "50rem",
              padding: "1.6rem 2.4rem",
            },
          }}
        />
      </QueryClientProvider>
    </NextUIProvider>
  );
}
