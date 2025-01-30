import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import Navbar from './Components/Layouts/Navbar.jsx'
import Footer from './Components/Layouts/Footer.jsx'
import Header from './Components/Layouts/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Header />
    <Footer />
  </StrictMode>,
)
