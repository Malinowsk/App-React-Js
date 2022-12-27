import "./App.css";
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer/nuevo';
import { Routes, Route } from "react-router-dom";
import LadingPage from "./Components/LadingPage";

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>   
          <Route path='/' element={<LadingPage/>} />
          <Route path='/catalogo' element={<ItemListContainer />} />
      </Routes>
    </div>
  );
} 
