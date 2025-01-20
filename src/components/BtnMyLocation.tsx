import { useContext } from "react"
import { MapContext, PlacesContext } from "../context"




export const BtnMyLocation = () => {


    const {map,isMapReady} = useContext(MapContext);
    const {userLocation} = useContext(PlacesContext);

    const onUbicacion = ()=>{
        if(!isMapReady) throw new Error('El mapa no esta listo');
        if(!userLocation) throw new Error('No hay Ubicaicon del Usuario');

        map?.flyTo({
            zoom: 16,
            center:userLocation
        })
    }
    return (
        <div>

            <button type="button" 
            onClick={onUbicacion}
                    className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    style={{
                        position: 'fixed',
                        top: '20px',
                        right:'20px',
                        zIndex:999
                    }}
            >
                Mi Ubicacion
            </button>

        </div>
    )
}


