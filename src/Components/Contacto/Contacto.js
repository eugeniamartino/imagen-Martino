import {Facebook, Twitter, Instagram} from '@mui/icons-material';
import { Button, ButtonGroup, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import './Contacto.css'
import { db } from "../../Firebase/Config"
import { addDoc, collection, writeBatch} from 'firebase/firestore'
import { useForm } from "../../hooks/useForm"
import { useState } from "react"
import { Link } from "react-router-dom";


const Contacto = () =>{

    const { values, handleInputChange } = useForm({
        nombre: '',
        email: '',
        asunto: '',
    })

    const [enviado, setEnviado] = useState(false);

    const consulta =()=>{
        setEnviado(true)

        const batch = writeBatch(db)
        const consultasRef = collection(db, 'consultas')

        const consult = {
            nombre: values,
            email: values,
            asunto: values
        }

        batch.commit()
                .then(() => {
                    addDoc(consultasRef, consult)
                })


    }
    if (enviado === true) {
        return(
            <>
                <h2>Consulta enviada</h2>
                <div className="contacto">
                    <p>Gracias por tu consulta. Te contestaremos a la brevedad</p>
                    <Button variant="contained" style={{margin:"25px"}} component={Link} to="/">Volver al inicio</Button>
                </div>
            </>
        )
    }


    return(
        <>
        <h2>Contacto</h2>
        <div className="contacto">
            <Box
                component="form"
                sx={{'& .MuiTextField-root': { m: 1, width: '25ch' }}}
                autoComplete="off"
                
            >
                <TextField
                    required="true"
                    label="Nombre"
                    name="nombre"
                    type={'nombre'} 
                    onChange={handleInputChange}
                    value={values.nombre}
                /><br/>
                <TextField
                    required="true"
                    label="Email"
                    name="email"
                    type={'email'} 
                    onChange={handleInputChange}
                    value={values.email}
                /><br/>
                <TextField
                    required="true"
                    label="Asunto"
                    name="asunto"
                    type={'asunto'} 
                    multiline={true}
                    rows="4"
                    onChange={handleInputChange}
                    value={values.asunto}

                /><br/>
                <div className="enviar">
                <Button variant="contained"
                onClick={consulta} >Enviar</Button>
                </div>
            </Box>

            <ButtonGroup variant="font">
                <Button size="large" href="https://www.facebook.com/" target="_blank"><Facebook/></Button>
                <Button size="large" href="https://twitter.com/" target="_blank"><Twitter/></Button>
                <Button size="large" href="https://www.instagram.com/" target="_blank"><Instagram/></Button>
            </ButtonGroup>
        </div>
        </>
    )
}

export default Contacto;