import { useContext , useState } from "react";
import { contexto } from "../../Context/CustomProvider";
import CartItemList from '../CartItemList';
import { Link } from "react-router-dom";
import "./style.css";
import { serverTimestamp, addDoc } from "firebase/firestore";
import { ventasCollection } from "../../firebaseConfig";
import { toast } from "react-toastify";

const Cart = () => {
    
    const {carrito,total,cantidad,vaciarCarrito} = useContext(contexto);
    const [loading, setLoading] = useState(false);
    
    const fill = (number, len) => "0".repeat(len - number.toString().length) + number.toString();
    
    const hacerPedido = async(pedido) =>{
        try {
          await addDoc(ventasCollection,pedido);
          vaciarCarrito();
          toast.success("La compra fue realizada exitosamente!");
          
        } catch (error) {
          toast.error("Hubo un error con su compra, vuelva a intentarlo!");
        }
        finally {
            setLoading(false);
        }
    }
    
    const hacerComprar = () => {
        setLoading(true);
        const compra = {
            usuario: {
                nombre: "Juan Ignacio Rago",
                email: "juan2015@gmail.com",
                telefono: "2494542375"
            },
            carrito: carrito.map((itm) => ({
                id: itm.id,
                amount: itm.amount,
                price: itm.price 
              })),
            nroToken: fill( Math.floor(Math.random() * 100000000000) + 1 , 12),
            fecha: serverTimestamp(),
        }
        hacerPedido(compra);
    }


    return (
        <main>
            {loading ?
                (
                <p>Cargando, espere un momento...</p>
                ) :
                <> {(carrito.length > 0) ? 
                    <>
                        <h1>Este es su Carrito:</h1>
                        <CartItemList items={carrito}/>
                        <div className='contain'>
                            <button className='button' onClick={vaciarCarrito}>Vaciar carrito</button>
                        </div>
                        <h2>Cantidad total de cervezas: <span>{cantidad}</span></h2>
                        <h2>Total a pagar es : <span>$ {total}</span></h2>
                        <button className='button' onClick={hacerComprar}>Finalizar Compra</button>
                    </> : 
                    <>
                        <p>Su carrito esta vacio </p>
                        <button><Link to="/" className='button'>Volver a inicio</Link></button>
                    </>}
                </>
        }
        </main>
    );
};

export default Cart;