import React from 'react'
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../CartContext/CartContext"
import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { db } from "../../Firebase/Config"
import { useForm } from "../../hooks/useForm"
import TextField from '@mui/material/TextField';
import './Checkout.css';
import {Box, Alert, Button} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Link } from "react-router-dom";

const Checkout = () =>{

    const [loading, setLoading] = useState(false);

    const { cart, cartTotal, emptyCart} = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const { values, handleInputChange } = useForm({
        nombre: '',
        email: '',
        direccion: '',
    })

    const[error, setError]= useState("")

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }
        
        const errorDatos = []
        
        if (values.nombre.length < 2) {
            errorDatos.push("errorNombre")    
            setError("errorDatos")
        }
    
        if (values.email.length < 2) { 
            errorDatos.push("errorEmail")    
            setError("errorDatos")
        }


        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos')
    
        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))

        const productos = await getDocs(q)

        const outOfStock = []


        productos.docs.forEach((doc) => {
            const itemInCart = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.cantidad
                })
            } else {
                outOfStock.push(itemInCart)
            }
        })

        if (outOfStock.length === 0 && errorDatos.length === 0) {

            batch.commit()
                .then(() => {
                    addDoc(ordenesRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            emptyCart()
                        })
                })
        } else if(outOfStock.length !== 0 && errorDatos.length === 0){
            setError("noStock")
        } else{
            console.log("carga de datos mal")
        }

    }

    if (orderId) {
        return (
            <>
                <h2>Gracias por comprar aquí!</h2>
                <Alert severity="success"  variant="outlined" sx={{ width: '80%' }} style={{margin:"15px"}}>Tu número de orden es: <strong>{orderId}</strong></Alert>
                <Button variant="contained" style={{margin:"25px"}} component={Link} to="/">Volver al inicio</Button>
            </>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }
    
    if(error === "noStock"){
        return(
            <>
            <Alert severity="error"  variant="outlined" sx={{ width: '80%' }} style={{margin:"15px"}}>No hay Stock</Alert>
            <Button variant="contained" style={{margin:"25px"}} component={Link} to="/carrito">Volver al carrito</Button>
            </>
        )
    }

    if(error === "errorDatos"){
        return(
            <>
            <Alert severity="warning" variant="outlined" sx={{ width: '80%' }} style={{margin:"15px"}}>Datos no cargados</Alert>
            <Button variant="contained" style={{margin:"25px"}} component={Link} to="/carrito">Volver al carrito</Button>
            </>
        )
    }

    return(
        <>
            <h2>Terminar mi compra</h2>
            <div className="checkout">
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }}}
                autoComplete="off"
            >
                <TextField
                    required="true"
                    label="Nombre"
                    name="nombre"
                    onChange={handleInputChange}
                    error={values.nombre.length < 3}
                    value={values.nombre}
                    type={'text'} 
                /><br/>
                <TextField
                    required="true"
                    label="Email"
                    name="email"
                    onChange={handleInputChange}
                    error={values.email.length < 3}
                    value={values.email}
                    type={'email'} 
                /><br/>
                <TextField
                    required="true"
                    label="Dirección"
                    name="direccion"
                    onChange={handleInputChange}
                    error={values.direccion.length < 3}
                    value={values.direccion}
                    type={'text'} 
                /><br/>
                {   loading
                ?<LoadingButton  
                    loading={true}/>
                :<LoadingButton 
                type="submit" 
                variant="contained"     
                loading={false}
                onClick={handleSubmit}
                >Enviar</LoadingButton>}
            </Box>
            </div>
        </>

    )
}

export default Checkout;