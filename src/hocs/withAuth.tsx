import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export function withAuth<P extends Record<string, unknown>>(
  Component: React.ComponentType<P>
) {
  const Wrapped: React.FC<P> = (props: P) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
      return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return <Component {...props} />;
  };

  return Wrapped;
}

export default withAuth;
