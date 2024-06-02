import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestOnlyGuard(props) {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
