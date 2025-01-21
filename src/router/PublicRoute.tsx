import type React from "react"
import { useEffect } from "react"
import { Navigate } from "react-router"
import type { PublicRouteProps } from "./interfaces/PublicRouteProps"
import { useAppSelector, useAppDispatch } from "../store/hooks/useSlice"
import { checkAuthStatus } from "../store/auth/thunks"

export const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const dispatch = useAppDispatch()
  const { status } = useAppSelector((state) => state.auth)
  console.log(status)
  useEffect(() => {
    dispatch(checkAuthStatus())
  }, [dispatch])

  if (status === "checking") {
    return <div>Loading...</div>
  }

  return status === "not-authenticated" ? children : <Navigate to="/panel" />
}

