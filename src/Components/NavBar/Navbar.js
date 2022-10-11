import React from 'react'
import './1.png';
import Botonera from'./Botonera.js';
import './NavBar.css';
import { Link } from 'react-router-dom';


function NavBar(){
    return <nav className="nav">
            <div className='logo'>
                <Link to={"/"} href="#/">
                    <img src={require('./1.png')} alt="logo"/><p className='titulo'>mogen Ropa</p>
                </Link>
            </div>
            <Botonera className="Button"/>

    </nav>
}

export default NavBar;

