import React from 'react'
import ItemCount from '../ItemCount'
// import { arrayProductos } from "../../ArrayProductos/data.js";
import './style.css'


const ItemDetail = ({item}) => {

  const { name, description, tipo, price, img } = item;

  const onAdd = (count) => {
    alert(`Agregaste ${count} productos`);
  };

  return (

    <div className='detail-container'>
      <div className='grid-container'>
        <div className='image-container'>  
          <img src={img} alt="SDFS"/>  
        </div>
        <div className='data-container'>
          <h1> {name} </h1>
          <div className='descripcion-container'>
            <p> {description} </p>
            <p> {tipo} </p>
            <p> {price} </p>
          </div>
          <div className='Itemcount-container'>
            <ItemCount className='itemcount' onAdd={onAdd} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail