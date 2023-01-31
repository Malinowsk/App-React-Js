import React, { useEffect, useState } from "react";
import './style.css';
import ItemList from "../ItemList";
import { useParams } from "react-router";
import { productsCollection } from '../../firebaseConfig';
import { getDocs , query , where } from "firebase/firestore";
import { toast } from "react-toastify";

function ItemListContainer() {
  
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

    const getProducts = async() => {
      try {
        const filtro = id ? query(productsCollection,where("category","==",id)) : productsCollection;

         const pedido = await getDocs(filtro);
         const value = pedido.docs.map((doc) => {return { id : doc.id , ...doc.data() }});
         setProductos(value);
       } 
       catch (error) {
         toast.error("Hubo un error, vuelva a intentarlo!");
       }
       finally {
         setLoading(false);
       }
     };

    useEffect(() => {
      setLoading(true);
      getProducts();
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