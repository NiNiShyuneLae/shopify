import React from 'react'
import './index.css'
import Nav from './Components/Nav'
import { Routes,Route } from 'react-router-dom'
import Products from './pages/Products'
import ProductsDetail from './pages/ProductsDetail'
import Cart from './pages/Cart'
import Success from './pages/Success'
import 'animate.css';
import Loading from './Components/Loading'

const App = () => {
  return (
    <div className='container mx-auto  font-poppin mt-5 mb-10'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/details/:id' element={<ProductsDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
    </div>
  )
}

export default App