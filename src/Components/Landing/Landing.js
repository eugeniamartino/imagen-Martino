import portada from './Portada.png'
import './Landing.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link } from 'react-router-dom';
import { CardContent,  Card, CardMedia} from '@mui/material';



const Landing = () =>{
    


    return(
        <div className='Landing'>
                <CardMedia component="img" image={portada} title="Portada" alt="Portada"/>
                <div className="Bienvenida" style={{left: "50%", transform: "translateX(-50%)"}}> 
                    <h1>Temporada Verano 2022
                    </h1>
                    <Button 
                    variant="outlined" 
                    color="primary" 
                    disableElevation 
                    className="btn-ingresar"
                    component={Link} to={'/productos'}
                    style={{ fontSize: "25px",
                        fontFamily: 'Raleway',
                        background: "rgba(0, 0, 0, 0.5)"}}>Comprar</Button>
                </div>
        </div>
    )
}

export default Landing;