import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'


import { TarijaSur } from './TarijaSur'
import { store } from './store'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <TarijaSur />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
