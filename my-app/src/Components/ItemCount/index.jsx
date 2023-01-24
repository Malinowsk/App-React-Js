import React, {useState} from "react";
import './style.css'

function ItemCount({ stock, initial, onAdd }) {

  const [contador, setContador] = useState(initial);
  const resta = () => {
    if (contador > 0) setContador(contador - 1);
  };

  const suma = () => {
    if (contador < stock) setContador(contador + 1);
  };

  const onConfirm = () => {
    onAdd(contador)
  }

  return (
      <div className="Itemcount">
        <div className='ItemCount-add'>
          <button className="removeButton" onClick={resta}>  
            {" "}-{" "} 
          </button>
          <strong className="count"> {contador} </strong>
          <button className="addButton"  onClick={suma} 
            //utilizo disable propiedad del buttom para desabilitar boton cuando llega al limite de stock
            disabled={contador === stock ? true : null }>
              {" "}+{" "}
          </button>
        </div>
        <button className='addCarrito' onClick={onConfirm}> Agregaral carrito </button>
      </div>
  );
}

export default ItemCount;