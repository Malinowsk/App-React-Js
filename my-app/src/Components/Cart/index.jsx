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
    const [username, setUsername] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    
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
                nombre: username + " " + lastname,
                email: email,
                telefono: phone
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

                        <h2> Completá tu información para finalizar la compra</h2>


                        <form class="form" onSubmit={hacerComprar}>
                            <div class="contenedor-contacto">
                                <div class="cont-interno">
                                    <label>Nombre <strong>(*)</strong></label>
                                    <input type="text" placeholder="Nombre" value={username}
                                    onChange={event=>{setUsername(event.target.value);}} required/>
                            </div>
                            <div class="cont-interno">
                                    <label >Apellido <strong>(*)</strong></label>
                                    <input type="text" placeholder="Apellido" value={lastname}
                                    onChange={event=>{setLastname(event.target.value);}} required/>
                                </div>
                                <div class="cont-interno">
                                    <label>Email  <strong>(*)</strong></label>
                                    <input type="email" placeholder="Email" value={email}
                                    onChange={event=>{setEmail(event.target.value);}} required/>
                                </div>
                                <div class="cont-interno">
                                    <label>Telefono <strong>(*)</strong></label>
                                    <input type="text" placeholder="Telefono" value={phone}
                                    onChange={event=>{setPhone(event.target.value);}} required/>
                                </div> 
                            </div>
                            <button className='button'>Finalizar Compra</button>
                        </form>
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