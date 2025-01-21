import type React from "react";
import { Navigate } from "react-router";
import type { PublicRouteProps } from "./interfaces/PublicRouteProps";
import { useAppSelector } from "../store/hooks/useSlice";

export const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { status } = useAppSelector((state) => state.auth);

  if (status === "checking") {
    return <div>Loading...</div>;
  }

  return status === "not-authenticated" ? children : <Navigate to="/panel" />;
};