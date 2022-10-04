import React from 'react';
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material';
import {collection, getDocs, query, where} from "firebase/firestore"
import { db} from '../../Firebase/Config.js';
import BotoneraProductos from '../BotoneraProductos/BotoneraProductos';

function Contenedor(){


    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'productos')
        const q = categoryId 
            ? query(productosRef, where("category", "==", categoryId))
            : productosRef

        getDocs(q)
            .then((snapshot) => {
                const productosDB =snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))

                setProductos(productosDB)
            })
            .finally(()=> {
                setLoading(false)
            })
    }, [categoryId]) 


    return (
        <div>
            <BotoneraProductos/>
            {
                loading 
                ? <p className="progress">Loading..<br/><CircularProgress color="secondary" /></p>
                : <ItemList productos={productos}/>

            }
        </div>
    )


}

export default Contenedor;


