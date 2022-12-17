import './style.css';
import CartWidget from '../CartWidget';
import logo from '../../assets/logo.png';

function NavBar() {
    return (
        <header className="header"> 
            <div className="space-between">
                <img className="imagen-logo" src={logo} alt="logo-cerveza"/>
                <p className="titulo-logo">VIVA<br/>LA BIRRA</p>
            </div>
            <div className="space-between">
                <nav>  
                    <ul className='space-between nav'>
                        <li className='item-nav'><a>Home</a></li>
                        <li className='item-nav'><a>Artesanales</a></li>
                        <li className='item-nav'><a>Comerciales</a></li>
                        <li className='item-nav'><a>Importadas</a></li>
                    </ul>
                </nav>
                <CartWidget cantidad= "2"></CartWidget>
            </div>
        </header>
    );
}

export default NavBar;