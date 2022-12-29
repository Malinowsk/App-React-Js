import React, { useEffect, useState } from "react";
import './style.css';
import { arrayProductos } from "../../ArrayProductos/data.js";
import ItemList from "../ItemList";
import { useParams } from "react-router";

function ItemListContainer() {
  
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

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
  
  const getsProducts = async() =>{
    try {
      const value = await getsProductsPromise;
      setProductos(value);
    } catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }
   }

    useEffect(() => {
      getsProducts();
      // eslint-disable-next-line
      }, [id]);

  return (
    <main>
      <h1>
        {id ? `Cervezas ${id}` : "Todas las cervezas"}
      </h1>
      <div>
        {loading ? 
        (
          <p>Cargando, espere un momento...</p>
        ) : productos.length > 0 ? 
          (
            <ItemList items={productos}/>
          ) : 
            (
              <p>No hay cervezas de esta categoria</p>
            )
        }
      </div>
    </main>
  );

};

export default ItemListContainer;