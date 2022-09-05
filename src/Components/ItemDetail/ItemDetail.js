import React from 'react'
import ItemCount from '../ItemCount/ItemCount.js'


const ItemDetail = ({producto}) => {

    return ( 
    <div>
    <img src={producto.img} alt="foto"/>
    <div>
        <h4>{producto.title}</h4>
        <p>Precio: {producto.price}</p>
        <p>{producto.description}</p>
        <p>Stock: {producto.stock}</p>
        <ItemCount stock={producto.stock}/>
    </div>
    </div>) 
}


export default ItemDetail