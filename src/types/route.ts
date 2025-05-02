import { JSX } from "react";

export interface RouteConfig {
  path: string;
  element: JSX.Element;
  protected?: boolean;
}
