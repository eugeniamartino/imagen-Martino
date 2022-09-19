import React from 'react'
import { CartContext } from '../../CartContext/CartContext'
import { useContext } from 'react'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function LogoCarrito(){

    const { cartQuantity, cart } = useContext(CartContext)

    
    return <>
        <div className={`carrito-null ${cart.length > 0 ? 'btn-carrito' :''}`}>
            <ShoppingCartIcon />
            <span className='numero-cantidad'>{cartQuantity()}</span>
        </div>
    </>
}

export default LogoCarrito;