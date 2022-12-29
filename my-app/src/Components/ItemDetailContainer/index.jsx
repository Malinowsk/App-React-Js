import React, { useEffect, useState } from 'react';

import { arrayProductos } from '../ArrayProductos/data.js';
import ItemDetail from '../ItemDetail';
import './style.css';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([])

    const { itemId } = useParams()


    useEffect(() => {
        getDetailPromise      
        .then(data => setDetail(data)) 
        .catch(err =>   console.log(err) )
        
    },[])

    const getDetailPromise = new Promise((res,rej) => {
        setTimeout(() => {
          const productoFiltrado = arrayProductos.find(e => e.id == itemId)
          res(productoFiltrado)
        }, (2000));
    })
  


  return (
     
    <div className='itemdetail-container'>
        <ItemDetail item={detail} />  
    </div>

  )
}

export default ItemDetailContainer