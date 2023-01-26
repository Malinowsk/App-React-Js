import { useContext } from "react";
import { contexto } from "../../Context/CustomProvider";
import CartItemList from '../CartItemList';
import { Link } from "react-router-dom";
import "./style.css";

const Cart = () => {
    
    const {carrito,total,cantidad,vaciarCarrito} = useContext(contexto)

    return (
        <main>
            { (carrito.length > 0) ? 
                <>
                    <h1>Este es su Carrito:</h1>
                    <CartItemList items={carrito}/>
                    <h2>Cantidad total de cervezas: <span>{cantidad}</span></h2>
                    <h2>Total a pagar es : <span>$ {total}</span></h2>
                    <button className='button-comprar' onClick={vaciarCarrito}>Vaciar carrito</button>
                </> : 
                <>
                    <p>Su carrito esta vacio </p>
                    <button><Link to="/" className='button-comprar'>Volver a inicio</Link></button>
                </>
            }
        </main>
    );
};

export default Cart;