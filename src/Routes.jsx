import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Drinks from './Pages/Drinks'

const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/drinks' element={<Drinks />} />
        </Routes>
    </>
  )
}

export default Routing