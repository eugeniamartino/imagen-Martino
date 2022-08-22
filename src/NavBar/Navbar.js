import './imagen.png';
import Botonera from'./Botonera.js';
import './NavBar.css';


function App(){
    return <nav className="nav">
            <img src={require('./imagen.png')} alt="logo" />
            <a href="#/">IMAGEN ROPA</a>
            <Botonera />

    </nav>
}

export default App;