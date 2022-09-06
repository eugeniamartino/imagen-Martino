import React from 'react'
import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemDetail from '../ItemDetail/ItemDetail.js'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material';


const ItemDetailContainer = ( ) => {

    const [producto, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()



    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if(!itemId){
                    console.log("ERROR")
                }else{setItem( res.find((prod) => prod.id === Number(itemId)) )}

            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])

    return (
        <div className="ItemDetailContainer">
            {
                loading
                ? <p className="progress">Loading..<br/><CircularProgress color="secondary" /></p>
                : <ItemDetail producto={producto}/>
            }
            

        </div>
    )
}


export default ItemDetailContainer

