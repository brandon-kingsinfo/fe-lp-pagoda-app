import useAuth from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  console.log(`RequireAuth: ${JSON.stringify(auth)}`);
  return auth.user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
