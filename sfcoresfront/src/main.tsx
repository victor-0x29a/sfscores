import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './style/global'
import Rotas from './routes'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
      <Rotas/>
    </BrowserRouter>
  </React.StrictMode>,
)
