import './style.css';
import CartWidget from '../CartWidget'

function NavBar() {
    return (
        <header className="header"> 
            <div className="logo space-between">
                <img src="shop.png" alt="logo"/>
                <p>VIVA<br/>LA BIRRA</p>
            </div>
            <div className="space-between">
                <nav>  
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Artesanales</a></li>
                        <li><a>Comerciales</a></li>
                        <li><a>Importadas</a></li>
                    </ul>
                </nav>
                <CartWidget cantidad= "2"></CartWidget>
                {/* <div>
                    <img className="carrito" src="ruta2.png" alt="carrito"/>
                    <span class="carrito">2</span>
                </div> */}
            </div>
        </header>
    );
}

export default NavBar;