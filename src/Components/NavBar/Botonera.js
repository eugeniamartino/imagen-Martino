import React from 'react'
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import LogoCarrito from './LogoCarrito.js'


function Botonera(){
    return <>
    <ButtonGroup variant="contained">
        <Button href={'/productos/remera'} variant="contained">Remeras</Button>
        <Button href={'/productos/pantalon'} variant="contained">Pantalones</Button>
        <Button href={'/productos/vestido'} variant="contained">Vestidos</Button>
    </ButtonGroup>
    <Button variant="contained"><LogoCarrito variant="contained" color="primary"></LogoCarrito></Button>
</>
}

export default Botonera;