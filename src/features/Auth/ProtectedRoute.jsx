import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLogin } from "./useLogin";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isAuthenticated } = useLogin();
  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate],
  );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
