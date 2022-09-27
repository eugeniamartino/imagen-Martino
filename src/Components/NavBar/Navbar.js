import React from 'react'
import './imagen.png';
import Botonera from'./Botonera.js';
import './NavBar.css';
import { Link } from 'react-router-dom';


function NavBar(){
    return <nav className="nav">
            <img src={require('./imagen.png')} alt="logo" />
            <Link to={"/"} href="#/" className='titulo'>IMAGEN ROPA</Link>
            <Botonera className="Button"/>

    </nav>
}

export default NavBar;

