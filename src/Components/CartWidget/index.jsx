import './style.css'
import { FaCartArrowDown } from "react-icons/fa";

function CartWidget(props) {
  return (
    <div id="cartWidget-container"> <FaCartArrowDown />  {props.cantidad}</div>
  )
}

export default CartWidget