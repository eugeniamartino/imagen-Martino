import { Button, ButtonGroup } from '@mui/material';
import LogoCarrito from './LogoCarrito.js'
import {Link } from 'react-router-dom';
import { CartContext } from '../../CartContext/CartContext.js';
import {React, useContext } from 'react'


function Botonera(){

    const {cart } = useContext(CartContext)


    return <>
    <ButtonGroup variant="contained" >
        <Button component={Link} to={'/productos/remera'} >Remeras</Button>
        <Button component={Link} to={'/productos/pantalon'} >Pantalones</Button>
        <Button component={Link} to={'/productos/vestido'} >Vestidos</Button>
    </ButtonGroup>
    <Button component={Link} to={'/carrito'} variant="contained"  className={`carrito-null ${cart.length > 0 ? 'btn-carrito' :''}`}><LogoCarrito variant="outlined" color="danger"></LogoCarrito></Button>
</>
}

export default Botonera;