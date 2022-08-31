import React from 'react';
import { pedirDatos } from "../../helpers/pedirDatos.js"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"


function Contenedor(){

    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then( (res) => {
                setProductos(res)
            })
            .catch( (error) => {
                console.log(error)
            })
    }, [])


    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )


}

export default Contenedor;
