import React from 'react';
import './ItemList.css'
import Item from "../Item/Item.js"


const ItemList = ( {productos = []} ) => {

    return (
        <div>
            <h2>Productos</h2>
            <div className="item-list">
            { productos.map((prod) => <Item  producto={prod} key={prod.id}/>)}
            </div>
        </div>
    )
}

export default ItemList