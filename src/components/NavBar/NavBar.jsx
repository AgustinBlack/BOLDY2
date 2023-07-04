import { CartWidget } from "../CartWidget/CartWidget"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <div className="divNavBar">
            <div className="divNavBarLogo">BOLDY</div>
            <ul className="divNavBarProds">
                <li>Zapatillas</li>
                <li>Remeras</li>
                <li>Contacto</li>
            </ul>
            <CartWidget/>
        </div>
    )
}