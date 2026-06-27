import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RaicesHorizontes } from './RaicesHorizontes.tsx'
import './styles/app.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RaicesHorizontes />
  </StrictMode>,
)
