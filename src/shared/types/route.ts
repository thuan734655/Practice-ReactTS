import { JSX } from "react";

export interface RouteConfig {
  path: string;
  element: JSX.Element;
  protected?: boolean;
}

export interface ProtectedRouteProps {
  children: JSX.Element;
  isAuthenticated: boolean;
}