import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './Components/ProductList';
// import { Dashboard } from '@mui/icons-material';
import ProductDetails from './Components/ProductDetails';
import Dashboard from './Components/Dashboard';
const PageRoute = () => {
  return (
    <Router>
        <Routes>
            <Route element={<Dashboard/>} path=''/>
            <Route element={<ProductList/>} path='/ProductsList'/>
            {/* <Route element={<ProductDetails imageUrl={''} name={''} originalPrice={''} discountedPrice={''} ratings={''}/>} path='/ProductsDetails'/> */}
        </Routes>
    </Router>
  )
}

export default PageRoute