import React from 'react'
import {HashRouter, Route, Routes } from 'react-router-dom';
import ProductList from './Components/ProductList';


import Dashboard from './Components/Dashboard';
const PageRoute = () => {
  return (
    <HashRouter>
        <Routes>
            <Route element={<Dashboard/>} path=''/>
            <Route element={<ProductList/>} path='/ProductsList'/>
        </Routes>
    </HashRouter>
  )
}

export default PageRoute