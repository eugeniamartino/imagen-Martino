import React from 'react'
import ItemCount from '../ItemCount/ItemCount.js'
import { useState}  from "react"
import { useCartContext } from "../../CartContext/CartContext"
import { Button, ButtonGroup } from '@mui/material';
import {Link} from 'react-router-dom'

const ItemDetail = ({producto}) => {

    const { addToCart, isInCart } = useCartContext()

    const [cantidad, setCantidad]= useState(1)

    const sumarCarrito = () => {
        const itemCarrito ={
            img: producto.img,
            id: producto.id,
            precio: producto.price,
            nombre: producto.title,
            cantidad
        }
        addToCart(itemCarrito)
    }

    return ( 
    <div>
    <img src={producto.img} alt="foto"/>
    <div>
        <h4>{producto.title}</h4>
        <p>Precio: {producto.price}</p>
        <p>{producto.description}</p>
        <p>Stock: {producto.stock}</p>

            {
                isInCart(producto.id)
                ?   <ButtonGroup variant="contained">
                    <Button component={Link} to={"/carrito"} >Terminar mi compra</Button>
                    <Button component={Link} to={"/"}>Seguir navegando</Button></ButtonGroup>
                :   <ItemCount 
                stock={producto.stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                sumarCarrito={sumarCarrito}/>
            }
    </div>
    </div>) 
}


export default ItemDetail