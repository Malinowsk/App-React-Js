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

  return (
    // <div>
      <>
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
        <button className='addCarrito' onClick={onAdd}> Agregar al carrito </button>
      </div>
      {/* <h2>{contador}</h2>
      <button onClick={suma}>Sumar</button>
      <button onClick={resta}>Restar</button>
      <br/>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div> */}
    </>
  );
}

export default ItemCount;