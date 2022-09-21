import React from 'react'
import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemDetail from '../ItemDetail/ItemDetail.js'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material';
import {doc, getDoc} from 'firebase/firestore'
import { db } from '../../Firebase/Config'

const ItemDetailContainer = ( ) => {

    const [producto, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()



    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
            .then((doc) => {
                
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(()=>{
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

