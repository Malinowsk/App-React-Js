import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router';
import { getDoc, doc } from "firebase/firestore"
import { productsCollection } from '../../firebaseConfig';
import { toast } from "react-toastify";

const ItemDetailContainer = () => {

  const { id } = useParams()
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);

      const getDetail = async() =>{
        try {
          const referenciaDoc = doc(productsCollection,id)
          const resultado = await getDoc(referenciaDoc);
          const data = { id : resultado.id , ...resultado.data() }
  
          setDetail(data);
        } catch (error) {
          toast.error("Hubo un error, vuelva a intentarlo!");
        }
        finally {
          setLoading(false);
        }
      };

      getDetail();

    },[id])

  return (
    <div className='itemdetail-container'>
      {loading ?
        (
          <p>Cargando, espere un momento...</p>
        ) : detail ?
          (
            <ItemDetail item={detail} />
          ) :
            (
              <p>No se encuentra disponible</p>
            )
        }
    </div>
  )
}

export default ItemDetailContainer