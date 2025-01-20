import { MapProvider, PlacesProvider } from "./context"
import {HomeScreen} from "./screens"

const MapsApp = () => {
  return (
    <PlacesProvider>

      <MapProvider>

        <HomeScreen></HomeScreen>
      </MapProvider>
        
    </PlacesProvider>
  )
}

export default MapsApp
