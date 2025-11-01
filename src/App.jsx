import React from 'react'
import RecipeMain from './components/RecipeMain'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/recipes' element={<RecipeMain/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
