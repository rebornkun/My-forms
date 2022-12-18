import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ColorModeContext, useMode } from '../theme'
import Dashboard from '../pages/Dashboard/Dashboard'
import Signin from '../pages/SignIn/Signin'
import './App.css'
import LightDarkBtn from '../components/LightDarkBtn'

function App() {
  const [theme , colorMode] = useMode()

  // console.log(theme)
  // console.log(colorMode)
  return (
    <ColorModeContext.Provider value={{theme, colorMode}}>
      <div className="App">
        <LightDarkBtn />
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/signup' element={<Signin />}/>
        </Routes>
      </div>
    </ColorModeContext.Provider>
  )
}

export default App
