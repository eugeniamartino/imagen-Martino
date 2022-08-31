import React from 'react';
import { Button } from '@mui/material';
import ItemCount from './../ItemCount/ItemCount.js';


const Item = ( {producto} ) => {

    return (
        <div className="cards">
            <img src={producto.img} alt="foto"/>
            <div className="card-text">
                <h4>{producto.title}</h4>
                <p>Precio: {producto.price}</p>
                <p>{producto.description}</p>
                <p>Stock: {producto.stock}</p>
                <Button variant="contained">Ver más</Button><br/>
                <ItemCount stock={producto.stock}/>
            </div>
        </div>
    )
}

export default Item

