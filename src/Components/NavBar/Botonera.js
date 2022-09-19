import { Button, ButtonGroup } from '@mui/material';
import LogoCarrito from './LogoCarrito.js'
import {Link } from 'react-router-dom';
import { CartContext } from '../../CartContext/CartContext.js';
import {React, useContext } from 'react'


function Botonera(){

    const {cart } = useContext(CartContext)


    return <>
    <ButtonGroup variant="contained">
        <Button component={Link} to={'/productos/remera'} variant="contained">Remeras</Button>
        <Button component={Link} to={'/productos/pantalon'} variant="contained">Pantalones</Button>
        <Button component={Link} to={'/productos/vestido'} variant="contained">Vestidos</Button>
    </ButtonGroup>
    <Button component={Link} to={'/carrito'}variant="contained" className={`carrito-null ${cart.length > 0 ? 'btn-carrito' :''}`}><LogoCarrito variant="contained" color="primary"></LogoCarrito></Button>
</>
}

export default Botonera;