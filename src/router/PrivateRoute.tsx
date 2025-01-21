import type React from "react"
import { useEffect } from "react"
import { Navigate } from "react-router"
import type { PrivateRouteProps } from "./interfaces/PrivateRouteProps"
import { useAppSelector, useAppDispatch } from "../store/hooks/useSlice"
import { checkAuthStatus } from "../store/auth/thunks"

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const dispatch = useAppDispatch()
  const { status } = useAppSelector((state) => state.auth)

  useEffect(() => {
    dispatch(checkAuthStatus())
  }, [dispatch])

  if (status === "checking") {
    return <div>Loading...</div>
  }

  return status === "authenticated" ? children : <Navigate to="/" />
}

