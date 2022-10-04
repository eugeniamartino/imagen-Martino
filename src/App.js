import React from 'react'   
import NavBar from './Components/NavBar/Navbar'
import Contenedor from './Components/contenedor/Contenedor'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Carrito from './Components/Carrito/Carrito'
import { CartProvider } from './CartContext/CartContext'
import  Checkout from './Components/Checkout/Checkout'
import Nosotros from './Components/Nosotros/Nosotros'
import Contacto from './Components/Contacto/Contacto'
import Landing from './Components/Landing/Landing'


const App =() => {
 return (
    <div>
        <CartProvider>
        <BrowserRouter>
            <NavBar />
            <div className="page">
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/productos" element={<Contenedor/>} />
                <Route path="/productos/:categoryId" element={<Contenedor/>} />
                <Route path="/producto/:itemId" element={<ItemDetailContainer/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/nosotros" element={<Nosotros/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
            </Routes>
            </div>
        </BrowserRouter>
        </CartProvider>
    </div>
 )
}


export default App



/*
            <Router>
                <Route path='/'element={<Contenedor/>}/> 
                <Route path='/Remeras' element={<Remeras />}/>
                <Route path='/Pantalones' element={<Pantalones />}/>
                <Route path='/Vestodos' element={<Vestidos />}/>
            </Router>
            */