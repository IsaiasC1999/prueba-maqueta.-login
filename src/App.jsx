import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Contenido from './components/Main/Contenido'
import Aside from './components/Aside/Aside'
import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu'

function App() {


  return (
    <>
    <Header/>
    <div className="content-main">
        <Menu/>  
        <Contenido/>
        <Aside/>
        <Footer/>        
    </div>
    </>
  )
}

export default App
