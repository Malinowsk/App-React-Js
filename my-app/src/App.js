import "./App.css";
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Cart from './Components/Cart';
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>   
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:id' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/carrito' element={<Cart/>}/>
      </Routes>
    </div>
  );
} 