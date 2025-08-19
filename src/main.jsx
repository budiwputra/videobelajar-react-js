import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Header from './components/Header.jsx'
import Home from './Home.jsx'
import HeaderHome from './components/HeaderHome.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home  />
  </StrictMode>,
)
