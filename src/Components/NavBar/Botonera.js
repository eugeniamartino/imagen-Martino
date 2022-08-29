import React from 'react'
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import LogoCarrito from './LogoCarrito.js'

function Botonera(){
    return <>
    <ButtonGroup variant="contained" aria-label="outlined primary button group" >
        <Button variant="contained">Remeras</Button>
        <Button variant="contained">Pantalones</Button>
        <Button variant="contained">Vestidos</Button>
    </ButtonGroup>
    <Button variant="contained"><LogoCarrito variant="contained" color="primary"></LogoCarrito></Button>
</>
}

export default Botonera;