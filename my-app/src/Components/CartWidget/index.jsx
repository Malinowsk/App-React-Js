import './style.css'
import { ShoppingCartOutlined } from '@ant-design/icons'; //ICONO DEL CARRITO
import { useContext } from "react";
import { contexto } from "../../Context/CustomProvider";
    
function CartWidget() {
  
  const {cantidad} = useContext(contexto)
  
  return (
    <div className='cart-container'><ShoppingCartOutlined className="cartWidget-container"/><span className='cant-carrito'>{cantidad}</span></div>
  )
}

export default CartWidget