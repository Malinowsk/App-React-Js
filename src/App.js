import "./App.css";
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer title="Bienvenido!!!"></ItemListContainer>
    </div>
  );
} 
