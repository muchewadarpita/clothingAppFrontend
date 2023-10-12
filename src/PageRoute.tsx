import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './Components/ProductList';


import Dashboard from './Components/Dashboard';
const PageRoute = () => {
  return (
    <Router>
        <Routes>
            <Route element={<Dashboard/>} path=''/>
            <Route element={<ProductList/>} path='/ProductsList'/>
        </Routes>
    </Router>
  )
}

export default PageRoute