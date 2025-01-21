import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import MapsApp from './MapsApp.tsx'
import mapboxgl from 'mapbox-gl'; 
import { BrowserRouter } from 'react-router';
import { TarijaSur } from './TarijaSur.tsx';

mapboxgl.accessToken = 'pk.eyJ1IjoiZnJhbnpiaXRsb3ZlciIsImEiOiJjbTYzNjJqdDgxNzdiMmtvNnY4ejI0bjZjIn0.IIYXClQFm2l-npxubHe4Ew';

if(!navigator.geolocation){

  alert('Tu navegador no tiene activador la Geolocalizacion');
  throw new Error('Tu navegador no tiene activador la Geolocalizacion');

}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TarijaSur />
      {/* <MapsApp /> */}
    </BrowserRouter>
  </StrictMode>,
)
