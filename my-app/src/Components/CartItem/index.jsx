import { React, useContext } from "react";
import "./style.css";
import { contexto } from "../../Context/CustomProvider";

const CartItem = ({producto}) => {

  const {eliminarProducto} = useContext(contexto)

  const onRemove = () => {
    eliminarProducto(producto.id)
  }

  return (
  <div className='card-container'>
    <div className='item-container'>
      <h2> {producto.name} </h2>
      <img src={producto.img} alt="error"/> 
      <p> $ {producto.price} </p>
      <p> Cantidad: {producto.amount} </p>
      <button onClick={onRemove}>  Eliminar del Carrito </button>
    </div>
  </div> )
};

export default CartItem;
