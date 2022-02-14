import react from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [categories, setCategories] = useState([]);
    const data = ["ps4", "pc"];

    const getCategories = () => {
        const promise = new Promise((resolved, rejected) => {
            setTimeout(() => {
                resolved(data);
                rejected("La obtención de datos falló.");
            }, 0);
        });
        promise
            .then((resolved) => {
                /* const filteredCategories = []
                resolved.forEach(product => {
                    if (!filteredCategories.includes(product.category)) {
                        filteredCategories.push(product.category)
                    }
                });
                filteredCategories.sort() */
                setCategories(resolved);
            })
            .catch((rejected) => alert(rejected));
    };

    useEffect(() => {
        getCategories();
    }, []);

    console.log(categories);

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
                        <Link to="products">Tienda</Link>
                    </li>
                    <li>
                        {categories.map((category) => (
                            <NavLink to={`products/${category}`} key={category}>
                                {category}
                            </NavLink>
                        ))}
                    </li>
                    <li>
                        <NavLink to="/cart">
                            <CartWidget />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;

// import React from "react";
// import CartWidget from "../CartWidget/CartWidget";
// import { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";

//     return (
//         <div className="NavBar">
//             <div className="logo">
//                 <Link to="">Basics Store</Link>
//             </div>
//             <div className="links">
{
    /* <NavLink to="products">Todos</NavLink>;
{
    categories.map((category) => (
        <NavLink to={`products/${category.toLowerCase()}`} key={category}>
            {category}
        </NavLink>
    ));
} */
}
//             </div>
//             <Link to="cart">
//                 <CartWidget />
//             </Link>
//         </div>
//     );
// };

// export default NavBar;
