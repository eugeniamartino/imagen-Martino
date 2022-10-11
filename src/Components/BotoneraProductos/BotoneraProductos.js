import { Button, ButtonGroup } from '@mui/material';
import {Link } from 'react-router-dom';


const BotoneraProductos = () =>{

    return(
        <ButtonGroup variant="outlined" orientation="vertical" style={{margin:"10px", paddingTop:"50px", position:"fixed", fontFamily:"Roboto"}} size="large">
            <Button component={Link} to={'/productos/remera'}>Remeras</Button>
            <Button component={Link} to={'/productos/pantalon'} >Pantalones</Button>
            <Button component={Link} to={'/productos/vestido'} >Vestidos</Button>
            <Button component={Link} to={'/productos'} >Ver todo</Button>
        </ButtonGroup>
    )
}


export default BotoneraProductos;

