import React, { useState } from "react";

function ItemCount({ stock, inicial }) {
    let [count, setCount] = useState(inicial);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="contador">
            <p id="numero">Total a comprar: {count}</p>
            <div>
                <button id="restar" onClick={decrement} disabled={count === 1}>
                    ➖
                </button>
                <button
                    onClick={increment}
                    disabled={count === stock ? true : false}
                >
                    ➕
                </button>
                <button>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;