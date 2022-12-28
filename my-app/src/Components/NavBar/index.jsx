import './style.css';
import CartWidget from '../CartWidget';            

import logo from '../../assets/logo.png';          // LOGO DE LA PAG
import { MenuOutlined } from '@ant-design/icons'; //ICONO DEL BOTON HAMBURGUESA
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <header className="header"> 
            {/* BOTON PARA MOVIL */}
            <div  class="button-hamb" onClick={toggerInvi}>
                <MenuOutlined />
            </div>
        
            {/* LOGO Y NOMBRE DE WEB */}
            <div className="space-between">
                <img className="imagen-logo" src={logo} alt="logo-cerveza"/>
                <Link to='/'><p className="titulo-logo">VIVA<br/>LA BIRRA</p></Link>
            </div>
        
            {/* MENU DE NAVEGACION */}
            <nav className='content'>  
                <ul id='menu' className='space-between menu invisibilidad' >
                    <li className='item-nav'><Link to='/'>Home</Link></li>
                    <li className='item-nav'><Link to='/categoria/artesanales'>Artesanales</Link></li>
                    <li className='item-nav'><Link to='/categoria/comerciales'>Comerciales</Link></li>
                    <li className='item-nav'><Link to='/categoria/importadas'>Importadas</Link></li>
                </ul>
            </nav>

            {/* CARRITO Y CONTADOR */}
            <div className="space-between">
                <CartWidget cantidad="8"/>
            </div>
        </header>
    );
}

    /* FUNCION QUE HACE VISIBLE E INVISIBLE EL MENU PARA MOBILE*/
function toggerInvi(){
    document.querySelector("#menu").classList.toggle("invisibilidad");

}

export default NavBar;