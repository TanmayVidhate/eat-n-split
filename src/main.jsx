import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Components/index.css'
import App from './Views/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
