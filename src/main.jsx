import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MAQUETACION from './MAQUETACION'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MAQUETACION></MAQUETACION>
  </StrictMode>,
)
