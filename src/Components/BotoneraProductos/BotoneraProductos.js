import { Button, ButtonGroup } from '@mui/material';
import {Link } from 'react-router-dom';


const BotoneraProductos = () =>{

    return(
        <ButtonGroup variant="outlined" >
            <Button component={Link} to={'/productos/remera'} >Remeras</Button>
            <Button component={Link} to={'/productos/pantalon'} >Pantalones</Button>
            <Button component={Link} to={'/productos/vestido'} >Vestidos</Button>
        </ButtonGroup>
    )
}


export default BotoneraProductos;

