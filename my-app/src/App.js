import "./App.css";
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer/nuevo';
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>   
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:id' element={<ItemListContainer/>} />
      </Routes>
    </div>
  );
} 
