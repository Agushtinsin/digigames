import react from "react";
import logo from "../assets/logo.png";

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
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Navbar;
