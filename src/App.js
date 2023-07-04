import './App.css';
import { ItemListcontainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListcontainer greetings={"Bienvenidos a BOLDY"}/>
    </>
  );
}

export default App;
