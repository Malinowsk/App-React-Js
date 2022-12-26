import React, {useState} from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [contador, setContador] = useState(initial);

  const resta = () => {
    if (contador > 0) setContador(contador - 1);
  };

  const suma = () => {
    if (contador < stock) setContador(contador + 1);
  };

  return (
    <div>

      <h2>{contador}</h2>
      <button onClick={suma}>Sumar</button>
      <button onClick={resta}>Restar</button>
      <br/>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;