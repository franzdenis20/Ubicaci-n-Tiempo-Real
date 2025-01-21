import { Route, Routes } from "react-router"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { TarijaRoutes } from "../tarija-sur/routes/TarijaRoutes"
import { PublicRoute } from "./PublicRoute"
import { PrivateRoute } from "./PrivateRoute"

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <PublicRoute>
              <AuthRoutes />
          </PublicRoute>
        }
      />

      <Route
        path="/panel/*"
        element={
          <PrivateRoute>
            <TarijaRoutes />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

