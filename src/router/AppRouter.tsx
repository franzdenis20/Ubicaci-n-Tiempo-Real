import { Route, Routes } from "react-router"
import { AuthRoutes } from "../auth/routes/AuthRoutes"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element = { <AuthRoutes /> } />
      </Routes>
    </>
  )
}
