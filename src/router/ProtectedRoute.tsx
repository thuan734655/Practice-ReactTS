import React from "react";
import { Navigate } from "react-router-dom";
import { ProtectedRouteProps } from "../types/route";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

export default ProtectedRoute;