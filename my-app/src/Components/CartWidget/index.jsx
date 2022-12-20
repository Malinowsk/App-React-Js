import './style.css'
import { ShoppingCartOutlined } from '@ant-design/icons'; //ICONO DEL CARRITO


function CartWidget(props) {
  return (
    <div className='cart-container'><ShoppingCartOutlined className="cartWidget-container"/><span className='cant-carrito'>{props.cantidad}</span></div>
  )
}

export default CartWidget