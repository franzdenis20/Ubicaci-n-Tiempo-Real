import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'


import { TarijaSur } from './TarijaSur'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TarijaSur />
      {/* <MapsApp /> */}
    </BrowserRouter>
  </StrictMode>,
)
