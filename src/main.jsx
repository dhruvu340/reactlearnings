import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Globalcontext from './useeffect/usecontext/globalcontext.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Globalcontext>
      <App/>
    </Globalcontext>
    </BrowserRouter>
      
    
  </StrictMode>,
)
