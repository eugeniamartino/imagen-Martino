import { Button, ButtonGroup } from '@mui/material';
import LogoCarrito from './LogoCarrito.js'
import {Link } from 'react-router-dom';
import { CartContext } from '../../CartContext/CartContext.js';
import {React, useContext } from 'react'


function Botonera(){

    const {cart } = useContext(CartContext)


    return <>
    <ButtonGroup variant="contained" >
        <Button component={Link} to={'/productos'} >Productos</Button>
        <Button component={Link} to={'/nosotros'} >Nosotros</Button>
        <Button component={Link} to={'/contacto'} >Contacto</Button>
    </ButtonGroup>
    <Button component={Link} to={'/carrito'} variant="contained"  className={`carrito-null ${cart.length > 0 ? 'btn-carrito' :''}`}><LogoCarrito variant="outlined" color="danger"></LogoCarrito></Button>
</>
}

export default Botonera;