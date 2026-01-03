import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // If not authenticated, redirect to login and preserve attempted location
  if (!isAuthenticated)
    return <Navigate to="/login" replace state={{ from: location }} />;

  // Authorized — render nested routes
  return <Outlet />;
};

export default ProtectedRoute;
