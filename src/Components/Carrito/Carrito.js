import { useCartContext } from "../../CartContext/CartContext"
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";


const Carrito = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

    if (cart.length === 0) {
        return (
            <div className="carrito-vacio">
                <h2>Tu carrito está vacío</h2>
                <Button component={Link} to="/" variant="contained">Ir a comprar</Button>
            </div>
        )
    }
    
    return (
        <div>
        <h2>Tu Carrito</h2>

            <div className="item-list-cart">

            { cart.map((producto) => (
                <div key={producto.id} className="cards-cart">
                    <div className="card-text">
                        <h3>{producto.nombre}</h3>
                        <p>Precio: {producto.precio}</p>
                        <p>Cantidad: {producto.cantidad}</p>

                        <Button onClick={() => removeItem(producto.id)} variant="contained"><DeleteIcon/></Button>
                    </div>
                    <img src={producto.img} className="card-img" alt="foto"/>

                </div>
                
            ))}
            </div>
            <div className="boton-Vaciar">
            <h4>Total: ${cartTotal()}</h4>
            <Button onClick={emptyCart} variant="contained">Vaciar carrito</Button>
            
            </div>
        </div>
    )
}

export default Carrito