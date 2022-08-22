import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';



function Botonera(){
    return <>
    <ButtonGroup variant="contained" aria-label="outlined primary button group" >
        <Button variant="contained">Remeras</Button>
        <Button variant="contained">Pantalones</Button>
        <Button variant="contained">Vestidos</Button>
    </ButtonGroup>
        <Button variant="contained">Carrito de compra</Button>
</>
}

export default Botonera;