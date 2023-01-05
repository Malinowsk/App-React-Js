import './style.css';
import CartWidget from '../CartWidget';    
import logo from '../../assets/logo.png';          // LOGO DE LA PAG
import { MenuOutlined } from '@ant-design/icons'; //ICONO DEL BOTON HAMBURGUESA
import { Link, NavLink } from 'react-router-dom';


function NavBar() {
    
    return (
        <header className="header"> 
            {/* BOTON PARA MOVIL */}
            <div  className="button-hamb" onClick={toggerInvi}>
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
                    <li className='item-nav ' id="#home"><NavLink to='/'>Home</NavLink></li>
                    <li className='item-nav' id="#artesanales"><NavLink to='/categoria/artesanales'>Artesanales</NavLink></li>
                    <li className='item-nav' id="#comerciales"><NavLink to='/categoria/comerciales'>Comerciales</NavLink></li>
                    <li className='item-nav' id="#importadas"><NavLink to='/categoria/importadas'>Importadas</NavLink></li>
                </ul>
            </nav>

            {/* CARRITO Y CONTADOR */}
            <div className="space-between">
                <CartWidget cantidad="0"/>
            </div>

        </header>
    );
}

/* FUNCION QUE HACE VISIBLE E INVISIBLE EL MENU PARA MOBILE*/
function toggerInvi(){
    document.querySelector("#menu").classList.toggle("invisibilidad");
}



export default NavBar;