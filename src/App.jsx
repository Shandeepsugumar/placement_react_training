import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Welcome from './welcome'
import Skills from './skills'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Services from './Pages/Services'
import About from './Pages/About'
import Navbar from './components/Navbar'
import State from './hooks/State'
import Form from './hooks/Form'
import Effect from './hooks/Effect'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Welcome' element={<Welcome name='shandeep' country='India'/>}/>
        <Route path='/Skills' element={<Skills skill={['React','Node','Express','MongoDb']}/>}/>
        <Route path='/state' element={<State/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/effect' element={<Effect/>}/>
      </Routes>
      <h1>Hello World</h1> 
    </>
  )
}

export default App

