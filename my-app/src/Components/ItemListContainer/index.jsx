import React, { useEffect, useState } from "react";
import './style.css';
import { arrayProductos } from "../../ArrayProductos/data.js";
import ItemList from "../ItemList";
import { useParams } from "react-router";

function ItemListContainer() {
  
  const { id } = useParams();

  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
    getsProductsPromise 
      .then((arrayp) => setProductos(arrayp))
      .catch((err) => console.log(err));
  });

  const getsProductsPromise = new Promise((res, rej) => {
    setTimeout(() => {
      if(id){
        const productosFiltrados = arrayProductos.filter(e => e.tipo === id);
        res(productosFiltrados);
      }
      else{
        res(arrayProductos)
      }  
    }, 2000);
  });

  return (
    <main>
      <h1> Productos Destacados </h1>
      <ItemList items={productos}/>
    </main>
  );
};

export default ItemListContainer;