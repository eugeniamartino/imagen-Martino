import React from 'react'   
import NavBar from './Components/NavBar/Navbar'
import Contenedor from './Components/contenedor/Contenedor'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Carrito from './Components/Carrito/Carrito'
import { CartProvider } from './CartContext/CartContext'

const App =() => {
 return (
    <div>
        <CartProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Contenedor/>} />
                <Route path="/productos/:categoryId" element={<Contenedor/>} />
                <Route path="/producto/:itemId" element={<ItemDetailContainer/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
            </Routes>
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