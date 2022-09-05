import React from 'react';
import { Button } from '@mui/material';


const Item = ( {producto} ) => {

    return (
        <div className="cards">
            <img src={producto.img} alt="foto"/>
            <div className="card-text">
                <h4>{producto.title}</h4>
                <p>Precio: {producto.price}</p>
                <Button variant="contained">Ver más</Button><br/>
            </div>
        </div>
    )
}

export default Item

