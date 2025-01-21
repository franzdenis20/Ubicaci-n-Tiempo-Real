import { Route, Routes } from "react-router"
import { MapPage, Dashboard } from "../pages"

export const TarijaRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path="/map" element={ <MapPage /> } />
      </Routes>
    </>
  )
}
