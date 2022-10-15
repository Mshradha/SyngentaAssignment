import React from 'react';
import {Routes, Route} from "react-router-dom"
import Form from './Form';
import HomePage from './HomePage';

const MainRoutes = () => {
  return (
  <Routes>
    <Route  path='/' element={<HomePage/>}   />

    <Route  path='/add' element={<Form/>}   />

  </Routes>
  )
}

export default MainRoutes
