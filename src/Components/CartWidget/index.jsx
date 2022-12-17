import './style.css'
import { FaCartArrowDown } from "react-icons/fa";

function CartWidget(props) {
  return (
    <div><FaCartArrowDown className="cartWidget-container"/>{props.cantidad}</div>
  )
}

export default CartWidget