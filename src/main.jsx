import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { IndexComponent } from './components/IndexComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IndexComponent />
  </StrictMode>,
)
