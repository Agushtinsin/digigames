import react from "react";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";

class Navbar extends react.Component {
    render() {
        return (
            <header>
                <div className="logo-header">
                    <a href="">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li>
                            <a href="#">Tienda</a>
                        </li>
                        <li>
                            <a href="#">Acerca De</a>
                        </li>
                        <li>
                            <a href="#">Soporte</a>
                        </li>
                        <li>
                            <CartWidget />
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Navbar;
