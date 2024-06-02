import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "./AuthSlice";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { auth } = useAuthStore((state) => state);
  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!auth) navigate("/login");
    },
    [auth, navigate],
  );

  // 3. While loading, show a spinner

  // 4. If there IS a user, render the app
  if (auth) return children;
}

export default ProtectedRoute;
