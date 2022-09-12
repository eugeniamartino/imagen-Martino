import React from 'react'
import ItemCount from '../ItemCount/ItemCount.js'
import { useState}  from "react"


const ItemDetail = ({producto}) => {

    const [cantidad, setCantidad]= useState(1)

    const sumarCarrito = () => {
        const itemCarrito ={
            id: producto.id,
            precio: producto.price,
            nombre: producto.title,
            cantidad
        }
        console.log(itemCarrito)
    }

    return ( 
    <div>
    <img src={producto.img} alt="foto"/>
    <div>
        <h4>{producto.title}</h4>
        <p>Precio: {producto.price}</p>
        <p>{producto.description}</p>
        <p>Stock: {producto.stock}</p>
        <ItemCount 
            stock={producto.stock}
            cantidad={cantidad}
            setCantidad={setCantidad}
            sumarCarrito={sumarCarrito}/>
    </div>
    </div>) 
}


export default ItemDetail