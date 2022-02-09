import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

const CartContainer = () => {
    const { itemsCart, clear } = useContext(CartContext);

    const clearItems = () => {
        clear();
    };
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Carrito</h1>
            {itemsCart.length > 0 ? (
                <>
                    <Cart items={itemsCart} />
                    <button className="button-4" onClick={clearItems}>
                        Limpiar carrito
                    </button>
                </>
            ) : (
                <>
                    <h2 style={{ textAlign: "center" }}>
                        No hay items en el carrito
                    </h2>
                    <Link to="/">
                        <p style={{ textAlign: "center" }}>Ir a comprar</p>
                    </Link>
                </>
            )}
        </div>
    );
};

export default CartContainer;
