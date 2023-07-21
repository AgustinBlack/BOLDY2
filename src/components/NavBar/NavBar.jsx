import { CartWidget } from "../CartWidget/CartWidget"
import { Contacto } from "../Contacto/Contacto"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <div className="divNavBar">
            <div>
                <img className="divNavBarLogo" src="/images/BOLDY-74-recortado.png" alt="" />
            </div>

            <ul className="divNavBarProds">
                <li>Zapatillas</li>
                <li>Remeras</li>
                <a href={Contacto}>Contacto</a>
                <CartWidget/>
            </ul>

        </div>
    )
}