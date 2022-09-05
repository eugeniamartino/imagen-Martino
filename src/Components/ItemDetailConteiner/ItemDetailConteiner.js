import React from 'react'
import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemDetail from './../ItemDetail/ItemDetail.js'
import './ItemDetailContainer.css'


const ItemDetailConteiner = ( ) => {

    const [producto, setItem] = useState(null)
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem( res.find((prod) => prod.id === Number(2)) )
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <div className="ItemDetailContainer">
            {
                loading
                ? <h2>Loading...</h2>
                : <ItemDetail producto={producto}/>
            }
            

        </div>
    )
}


export default ItemDetailConteiner