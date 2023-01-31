import { React , useState , useContext} from "react"
import ItemCount from '../ItemCount'
import './style.css'
import { contexto } from "../../Context/CustomProvider";

const ItemDetail = ({item}) => {
  
  const {agregarProducto} = useContext(contexto)

    
  const { id, name, description, tipo, price, img, stock } = item;

  const [confirmado, setConfirmado] = useState(false);

  const onAdd = (amount) => {
    const product = {id,name,price,img,amount}
    agregarProducto(product)
    setConfirmado(true)
  }

  return (

    <div className='detail-container'>
      <div className='grid-container'>
        <div className='image-container'>  
          <img src={img} alt="Cerveza"/>  
        </div>
        <div className='data-container'>
          <h1> {name} </h1>
          <div className='descripcion-container'>
            <p> {description} </p>
            <p> Estilo : {tipo} </p>
            <p> Precio : $ {price} </p>
            <p> Stock : {stock} unidades</p>
          </div>
          <div className='Itemcount-container'>
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
          </div>
          
          {confirmado && <p className="mensaje"> Se agregó exitosamente! </p>}
        </div>
      </div>
    </div>
  )
}

export default ItemDetail