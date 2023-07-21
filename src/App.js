import './App.css';
import { ItemListcontainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import TarjetaDePresentacion from "../src/Props";
import "./estilos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar/>
      <ItemListcontainer greetings={"BOLDY 74, es una marca que nacio en el año 2023, recientemente lanzamos los primeros proyectos a la sociedad, con fines de complacer al cliente en cuanto a sus deseos, los cuales le hicieron llegar a esta pagina. En esta pagina lo que buscamos lograr es ser el mediador entre un cliente que busca determinada zapatilla exclusiva y otra persona que la posee, nosotros nos encargamos de buscar, armar y entregar el pedido a nuestros clientes en el mejor de los estados. El proyecto BOLDY 74 abarca cualquier tipo de zapatillas, de cualquier marca, que no son facil de conseguir en terminos generales, nosotros vamos a poner en la pagina las zapatillas que nosotros sabemos que tenemos o que podemos tener, ya que ya hay un proveedor de esas zapatillas."}/>
      <div className='divCard'>
        <TarjetaDePresentacion imagen="/images/air-jordan-1.jpg" modelo="Air Jordan 1" marca="Nike" precio="$30.000"/>
        <TarjetaDePresentacion imagen="/images/air-max-97.jpg" modelo="Air Max 97" marca="Nike" precio="$32.000"/>
        <TarjetaDePresentacion imagen="/images/air-max-bolt(1).jpg" modelo="Air Max Bolt" marca="Nike" precio="$40.000"/>
        <TarjetaDePresentacion imagen="/images/air-max-force-1-hich-07.jpg" modelo="Air Force 1 High 07" marca="Nike" precio="$35.000"/>
        <TarjetaDePresentacion imagen="/images/adidas-all-star.jpg" modelo="Adidas All Star" marca="Adidas" precio="$29.000"/>
        <TarjetaDePresentacion imagen="/images/adidas-ozelia.jpg" modelo="Adidas Ozelia" marca="Adidas" precio="$40.000"/>
        <TarjetaDePresentacion imagen="/images/adidas-x9000l4-blancas.jpg" modelo="Adidas X9000L4" marca="Adidas" precio="$37.000"/>
        <TarjetaDePresentacion imagen="/images/Forum-Mid-GW2857.jpg" modelo="Adidas Forum" marca="Adidas" precio="$31.000"/>
        <TarjetaDePresentacion imagen="/images/Beige-New-Balance-373.jpg" modelo="New Balance 373" marca="New balance" precio="$28.000"/>
        <TarjetaDePresentacion imagen="/images/Beige-New-Balance-530.jpg" modelo="New Balance 530" marca="New Balance" precio="$30.000"/>
        <TarjetaDePresentacion imagen="/images/Beige-New-Balance-550.jpg" modelo="New Balance 550" marca="New Balance" precio="$29.000"/>
        <TarjetaDePresentacion imagen="/images/Beige-New-Balance-990-V5.jpg" modelo="New Balance 990 V5" marca="New Balance" precio="$32.000"/>
        <TarjetaDePresentacion imagen="/images/PUMA-19486201.jpg" modelo="Puma 19486201" marca="Puma" precio="$27.000"/>
        <TarjetaDePresentacion imagen="/images/puma-basket-classic-xxi.jpg" modelo="Puma Basquet Classic XXI" marca="Puma" precio="$31.000"/>
        <TarjetaDePresentacion imagen="/images/puma-ca-pro-classic.jpg" modelo="Puma Ca Pro Classic" marca="Puma" precio="$35.000"/>
        <TarjetaDePresentacion imagen="/images/puma-trc-blaze.jpg" modelo="PumaTRC Blaze" marca="Puma" precio="$32.000"/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
