import React from "react";
import {useState} from "react";
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import './ItemCount.css';


function ItemCount({stock}){


const[counter, setCounter] = useState(1);

const sumar = () =>{
    if (counter < stock)setCounter(counter + 1)
    console.log(counter)
}
const restar = () =>{
    if (counter > 1)setCounter(counter - 1)
    console.log(counter)
}

const sumarCarrito = () =>{
    alert("Se sumaron al carrito: " +counter+" elementos")
}

    return<>

        <ButtonGroup variant="contained" className="group">
        <Button variant="contained" onClick={restar} disabled={counter === 1}>-</Button>
        <p className="contador" >{counter}</p>
        <Button variant="contained" onClick={sumar} disabled={counter === stock}>+</Button>
        <Button variant="contained" onClick={sumarCarrito}>Sumar al Carrito</Button>
        </ButtonGroup>
    </>
}

export default ItemCount;