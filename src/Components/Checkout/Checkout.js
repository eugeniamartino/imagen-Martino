import React from 'react'
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../CartContext/CartContext"
import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { db } from "../../Firebase/Config"
import { useForm } from "../../hooks/useForm"
import TextField from '@mui/material/TextField';
import './Checkout.css';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';

const Checkout = () =>{

    const [loading, setLoading] = useState(true);

    const { cart, cartTotal, terminarCompra} = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const { values, handleInputChange } = useForm({
        nombre: '',
        email: '',
        direccion: '',
    })


    const handleSubmit = async (e) => {
        setLoading(false);
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }
        

        if (values.nombre.length < 2) {
            alert("Nombre incorrecto")
            return
        }

        if (values.email.length < 2) { 
            alert("Email incorrecto")
            return 
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

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordenesRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            terminarCompra()
                        })
                })
        } else {
            
            alert("Hay items sin stock")
        }

    }

    if (orderId) {
        return (
            <>
                <h2>Gracias por comprar aquí!</h2>
                <p className="checkout">Tu número de orden es: <strong>{orderId}</strong></p>
            </>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return(
        <>
            <h2>Terminar mi compra</h2>
            <div className="checkout">
            
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
                autoComplete="off"
            >

           
                <TextField
                    required
                    id="outlined-required"
                    label="Nombre"
                    name="nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                    type={'text'} 
                    className="my-3 form-control" 
                /><br/>
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    name="email"
                    onChange={handleInputChange}
                    value={values.email}
                    type={'email'} 
                    className="my-3 form-control" 
                /><br/>
                <TextField
                    required="true"
                    id="outlined-required"
                    label="Dirección"
                    name="direccion"
                    onChange={handleInputChange}
                    value={values.direccion}
                    type={'text'} 
                    className="my-3 form-control" 
                /><br/>

                {
                    loading
                ?<LoadingButton 
                    type="submit" 
                    variant="contained"     
                    loading={false}
                    onClick={handleSubmit}

                    >Enviar</LoadingButton>
                :<LoadingButton     
                    variant="contained" 
                    loading={true}>Enviar</LoadingButton>
                }
            </Box>
            </div>
        </>

    )
}

export default Checkout;