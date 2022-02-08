import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import Cart from "../Cart/Cart";

const CartContainer = () => {
    const { itemsCart, clear } = useContext(CartContext);

    const clearItems = () => {
        clear();
    };
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Carrito</h1>
            <button className="button-4" onClick={clearItems}>
                Limpiar carrito
            </button>
            <Cart items={itemsCart} />
        </div>
    );
};

export default CartContainer;
