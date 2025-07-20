import { useState } from 'react'
import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Edit from './pages/Edit'
import Diary from './pages/Diary'
import NotFound from './pages/NotFound' 
function App() {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }
  return (
    <>
     <Link to={'/'}>Home</Link>
     <Link to={'/new'}>New</Link>
     <Link to={'/diary'}>Diary</Link>
     <button onClick={goHome}>Home 으로...</button>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='*' element={<NotFound />} />
      </Routes> 
    </>
  )
}

export default App
