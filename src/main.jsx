import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Globalcontext from './useeffect/usecontext/globalcontext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Globalcontext>
      <App/>
    </Globalcontext>
      
    
  </StrictMode>,
)
