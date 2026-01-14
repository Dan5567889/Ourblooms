import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'



import {BrowserRouter, Routes, Route} from 'react-router-dom'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/gallery' element ={<Gallery />} />
      <Route path = '/about' element={<About />}  />
    </Routes>
    </BrowserRouter>

     
     
    </>
  )
}

export default App
