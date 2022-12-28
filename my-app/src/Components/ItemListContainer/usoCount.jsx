import './style.css';
import ItemCount from '../ItemCount'

function ItemListContainer({ title }) {
    return (
      <main>
        {title}
        <ItemCount stock={5} initial={0} onAdd={() => alert('Agregado al carrito')}/>
      </main>
    );
}

export default ItemListContainer;