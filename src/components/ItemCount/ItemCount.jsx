import React, { useState } from "react";
import { Link } from "react-router-dom";

function ItemCount({ stock, cantidad, setCantidad }) {
    const increment = () => {
        setCantidad(cantidad + 1);
    };

    const decrement = () => {
        setCantidad(cantidad - 1);
    };

    return (
        <div className="contador">
            <p id="numero">Total a comprar: {cantidad}</p>
            <div>
                <button
                    id="restar"
                    onClick={decrement}
                    disabled={cantidad === 0}
                >
                    ➖
                </button>
                <button
                    onClick={increment}
                    disabled={cantidad === stock ? true : false}
                >
                    ➕
                </button>
                {cantidad > 0 && (
                    <Link to="/cart">
                        <button>Ir al carrito</button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default ItemCount;
