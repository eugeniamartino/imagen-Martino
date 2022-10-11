import { useCartContext } from "../../CartContext/CartContext"
import { Button, ButtonGroup } from '@mui/material';
import { Link } from "react-router-dom";
import Borrar from "./Borrar";
import BorrarItem from "./BorrarItem";


const Carrito = () => {

    const { cart, cartTotal} = useCartContext()


    if (cart.length === 0) {
        return (
            <div className="carrito-vacio">
                <h2>Tu carrito está vacío</h2>
                <Button component={Link} to="/productos" variant="contained">Ir a comprar</Button>
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
                        <BorrarItem prod={producto.id}/>
                    </div>
                    <img src={producto.img} className="card-img" alt="foto"/>
                </div>
                
            ))}
            </div>
            <div className="boton-Vaciar">
            <h4>Total: ${cartTotal()}</h4>
            <ButtonGroup variant="outlined" color="secondary">
                <Borrar/>
                <Button component={Link} to="/checkout" >Terminar mi compra</Button>
            </ButtonGroup>
            </div>
        </div>
    )


}

export default Carrito