import './style.css';
import CartWidget from '../CartWidget';
import logo from '../../assets/logo.png';
import { MenuOutlined } from '@ant-design/icons';


function toggerInvi(){
    document.querySelector("#uno").classList.toggle("invisibilidad");

}


function NavBar() {
    return (
        <header className="header"> 
            <div  class="button-hamb" onClick={toggerInvi}>
                <MenuOutlined />
            </div>
            <div className="space-between">
                <img className="imagen-logo" src={logo} alt="logo-cerveza"/>
                <p className="titulo-logo">VIVA<br/>LA BIRRA</p>
            </div>
            <nav className='content'>  
                <ul id='uno' className='space-between menu invisibilidad' >
                    <li className='item-nav'><a href='http:/'>Home</a></li>
                    <li className='item-nav'><a href='http:/'>Artesanales</a></li>
                    <li className='item-nav'><a href='http:/'>Comerciales</a></li>
                    <li className='item-nav'><a href='http:/'>Importadas</a></li>
                </ul>
            </nav>
            <div className="space-between">
                <CartWidget cantidad="10"></CartWidget>
            </div>
        </header>
    );
}

export default NavBar;