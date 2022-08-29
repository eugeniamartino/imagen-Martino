import React from 'react';
import ItemCount from './../ItemCount/ItemCount.js';

function Contenedor(){



    return <>
        <div>
            <h2>Productos</h2>
            <ItemCount stock={5}/><br/>
            <ItemCount stock={9}/><br/>
            <ItemCount stock={15}/>

       
        </div>
    </>
}

export default Contenedor;