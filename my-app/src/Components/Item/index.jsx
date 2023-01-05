import React from "react";
 import { Link } from 'react-router-dom';
import "./style.css";

const Item = ({producto}) => {
  return (
  <div className='card-container'>
    <div className='item-container'>
      <h2> {producto.name} </h2>
      <img src={producto.img} alt="error"/> 
      <p> $ {producto.price} </p>
      <button> <Link  className='button-comprar'  to={`/item/${producto.id}`}> Detalles </Link> </button>
    </div>
  </div> )
};

export default Item;
