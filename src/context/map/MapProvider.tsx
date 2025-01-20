import { Map, Marker, Popup } from "mapbox-gl"
import { MapContext } from "./MapContext"
import { useReducer } from "react"
import { MapReducer } from "./MapReducer"




export interface MapState {
    isMapReady: boolean,
    map?: Map,
}


const INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined,
}

interface Props {
    children: JSX.Element | JSX.Element[];
}


export const MapProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(MapReducer, INITIAL_STATE);


    const setMap = (map: Map) => {


        // Creamos una ventana emergente para poner datos extras
        const myLocationPopup = new Popup()
            .setHTML(
                `<h1>Tarija Del Sur</h1> 
                <p>Estoy Aqui</p>
                `


            )
        //Creamos el marcador en el mapa

        new Marker({ color: 'red' })
            .setLngLat(map.getCenter())
            .setPopup(myLocationPopup)
            .addTo(map);


        dispatch({ type: 'setMap', payload: map })
    }

    return (
        <MapContext.Provider value={{
            ...state,
            //Methodos

            setMap,
        }}>
            {children}

        </MapContext.Provider>
    )
}


