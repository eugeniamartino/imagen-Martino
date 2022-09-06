import React from 'react';
import { pedirDatos } from "../../helpers/pedirDatos.js"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material';


function Contenedor(){

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then( (res) => {
                if(!categoryId){
                    setProductos(res)
                } else{
                    setProductos(res.filter((item) => item.category === categoryId))
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)

            })
    }, [categoryId]) 


    return (
        <div>
            {
                loading 
                ? <p className="progress">Loading..<br/><CircularProgress color="secondary" /></p>
                : <ItemList productos={productos}/>

            }
        </div>
    )


}

export default Contenedor;


