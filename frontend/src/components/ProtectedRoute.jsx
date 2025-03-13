import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ allowedRoles, alertMessage }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || !allowedRoles.includes(user.role)) {
    alert(alertMessage);
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
