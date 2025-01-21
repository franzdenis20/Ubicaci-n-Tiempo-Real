import type React from "react";
import { Navigate } from "react-router";
import type { PrivateRouteProps } from "./interfaces/PrivateRouteProps";
import { useAppSelector } from "../store/hooks/useSlice";

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { status } = useAppSelector((state) => state.auth);

  if (status === "checking") {
    return <div>Loading...</div>;
  }

  return status === "authenticated" ? children : <Navigate to="/" />;
};