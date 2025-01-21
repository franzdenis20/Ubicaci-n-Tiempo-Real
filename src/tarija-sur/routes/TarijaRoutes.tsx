import { Navigate, Route, Routes } from "react-router"
import { MapPage, Dashboard } from "../pages"

export const TarijaRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/map" element={ <MapPage /> } />
        <Route path="*" element = { <Navigate to={"/panel/dashboard"} /> } />
      </Routes>
    </>
  )
}
