import './style.css'
import { ShoppingCartOutlined } from '@ant-design/icons'; //ICONO DEL CARRITO


function CartWidget(props) {
  return (
    <div className='cart-container'><ShoppingCartOutlined className="cartWidget-container"/>{props.cantidad}</div>
  )
}

export default CartWidget