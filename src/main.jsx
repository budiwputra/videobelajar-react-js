import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Header from './Header.jsx'
import Home from './Home.jsx'
import HeaderHome from './HeaderHome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home  />
  </StrictMode>,
)
