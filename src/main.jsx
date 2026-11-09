import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Enable entrance animations only when scroll detection is available. Without this class,
// all content renders fully visible (see the Motion section in index.css).
if ('IntersectionObserver' in window) document.documentElement.classList.add('motion-ready')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
