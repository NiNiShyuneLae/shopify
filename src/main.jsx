import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import {StateContextProvider} from './Context/StateContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <StateContextProvider>
      <App/>
    </StateContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
