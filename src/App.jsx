import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationDrawer from './components/NavigationDrawer.jsx'
import RightPanel from './components/RightPanel.jsx'

function App() {

  return (
    <>
      <NavigationDrawer/>
      <RightPanel/>
    </>
  )
}

export default App
