import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Contenido from './components/Main/Contenido'
import Aside from './components/Aside/Aside'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <div className="Layout-app">
        <Header/>
        <Contenido/>
        <Aside/>
        <Footer/>        
    </div>
  )
}

export default App
