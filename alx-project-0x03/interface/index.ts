export interface PageRouteProps {
  pageRoute: string;
}
export interface ButtonProps {
  action: () => void;
  buttonLabel: string;
  buttonBackgroundColor?: string;
}
import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}
