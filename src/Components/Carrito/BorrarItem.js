import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import {IconButton, Button} from '@mui/material';
import { useCartContext } from "../../CartContext/CartContext"
import DeleteIcon from '@mui/icons-material/Delete';


const BorrarItem = (prod) => {

    const { removeItem } = useCartContext()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleBorrarItem = (prod) => {
        removeItem(prod.prod);
        setOpen(false);
    };


    return(
        <>
            <IconButton onClick={handleClickOpen} variant="outlined" size="large"><DeleteIcon/></IconButton>
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"¿Quiere borrar este producto del carrito?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={() => handleBorrarItem(prod)} variant="contained">Borrar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}


export default BorrarItem;