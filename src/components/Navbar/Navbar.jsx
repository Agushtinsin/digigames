import react from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

class Navbar extends react.Component {
    render() {
        return (
            <header>
                <div className="logo-header">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li>
                            <Link to="/">Tienda</Link>
                        </li>
                        <li>
                            <NavLink to="/category/pc">Juegos PC</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category/ps4">Juegos PS4</NavLink>
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
