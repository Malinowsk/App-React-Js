import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail';
import './style.css';
import { useParams } from 'react-router';
import { getDoc, doc } from "firebase/firestore"
import { productsCollection } from '../../firebaseConfig';

const ItemDetailContainer = () => {

  const { id } = useParams()
    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true);

    const getDetail = async() =>{
      try {
        const referenciaDoc = doc(productsCollection,id)
        const resultado = await getDoc(referenciaDoc);
        const data = { id : resultado.id , ...resultado.data() }

        setDetail(data);
      } catch (error) {
        console.error(error);
      }
      finally {
        setLoading(false);
      }
     }

    useEffect(() => {
      setLoading(true);
      getDetail();
      // eslint-disable-next-line
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