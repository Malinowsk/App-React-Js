import './style.css';
import CartWidget from '../CartWidget';    
import logo from '../../assets/logo.png';        
import { MenuOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';


function NavBar() {
    
    return (
        <header className="header"> 
            
            <div  className="button-hamb" onClick={toggerInvi}>
                <MenuOutlined />
            </div>
    
            <div className="space-between">
                <img className="imagen-logo" src={logo} alt="logo-cerveza"/>
                <Link to='/'><p className="titulo-logo">VIVA<br/>LA BIRRA</p></Link>
            </div>
        
            <nav className='content'>  
                <ul id='menu' className='space-between menu invisibilidad' >
                    <li className='item-nav ' id="#home"><NavLink to='/'>Home</NavLink></li>
                    <li className='item-nav' id="#artesanales"><NavLink to='/categoria/artesanales'>Artesanales</NavLink></li>
                    <li className='item-nav' id="#comerciales"><NavLink to='/categoria/comerciales'>Comerciales</NavLink></li>
                    <li className='item-nav' id="#importadas"><NavLink to='/categoria/importadas'>Importadas</NavLink></li>
                </ul>
            </nav>

            <NavLink to="/carrito">
                <div className="space-between">
                    <CartWidget/>
                </div>
            </NavLink>
        </header>
    );
}

function toggerInvi(){
    document.querySelector("#menu").classList.toggle("invisibilidad");
}

export default NavBar;