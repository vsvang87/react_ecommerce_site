import { useState } from 'react'
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop';
import LoginSignup from './pages/LoginSignup';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from "./pages/Cart";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
    
    <Route path='/' element={<Shop/>}/>
    <Route path="/login" element={<LoginSignup/>}/>
    <Route path='/men' element={<ShopCategory category="mens"/>}/>
    <Route path='/women' element={<ShopCategory category="womens"/>}/>
    <Route path='/kids' element={<ShopCategory category="kids"/>}/>
    <Route path='/product' element={<Product/>} />
    <Route path=":productId" element={<Product/>}/>
    <Route path='/cart' element={<Cart/>} />
    </Routes>
     
    </>
  )
}

export default App
