import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/About'
import PortFolio from './components/PortFolio'
import Experiance from './components/Experiance'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'


function App() {
  return (
  <>
  <div>
  <Navbar/>
  <Home/>
  <About/>
  <PortFolio/>
  <Experiance/>
  <Contact/>
  <Footer/>
  </div>
  <Toaster/>
  </>
  )
  
}

export default App