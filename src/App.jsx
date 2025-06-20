import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './welcome'

function App() {

  return (
    <>
      <Welcome name='shandeep' country='India'/>
      <h1>Hello World</h1>
      <Skills skill={['React','Node','Express','MongoDb']}/> 
    </>
  )
}

export default App

