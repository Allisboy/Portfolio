import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import NavBar from './components/NavBar'
import MainSection from './components/MainSection'
import CodeList from './components/CodeList'
import ThreeScene from './components/ThreeScene'
import Project from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-900 min-h-screen'>
        <NavBar/>
        <MainSection/>
        <CodeList/>
        {/* <ThreeScene/> */}
        <Project/>
        <Contact/>
      </div>
    </>
  )
}

export default App
