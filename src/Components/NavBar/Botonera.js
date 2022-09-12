import React from 'react'
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import LogoCarrito from './LogoCarrito.js'
import {Link } from 'react-router-dom';

function Botonera(){
    return <>
    <ButtonGroup variant="contained">
        <Button component={Link} to={'/productos/remera'} variant="contained">Remeras</Button>
        <Button component={Link} to={'/productos/pantalon'} variant="contained">Pantalones</Button>
        <Button component={Link} to={'/productos/vestido'} variant="contained">Vestidos</Button>
    </ButtonGroup>
    <Button component={Link} to={'/carrito'}variant="contained"><LogoCarrito variant="contained" color="primary"></LogoCarrito></Button>
</>
}

export default Botonera;