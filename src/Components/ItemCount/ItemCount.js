import React from "react";
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import './ItemCount.css';


function ItemCount({stock, cantidad, setCantidad, sumarCarrito}){

const sumar = () =>{
    if (cantidad < stock)setCantidad(cantidad + 1)
}
const restar = () =>{
    if (cantidad > 1)setCantidad(cantidad - 1)
}

    return<>

        <ButtonGroup variant="contained" className="group">
        <Button variant="contained" onClick={restar} disabled={cantidad === 1}>-</Button>
        <p className="contador">{cantidad}</p>
        <Button variant="contained" onClick={sumar} disabled={cantidad >= stock}>+</Button>
        <Button  variant="contained" onClick={sumarCarrito} disabled={cantidad > stock}>Sumar al Carrito</Button>
        </ButtonGroup>
    </>
}

export default ItemCount;