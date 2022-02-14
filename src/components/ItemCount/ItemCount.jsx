import React from "react";
import { useState } from "react";
import Message from "../Message/Message";

const ItemCount = ({ stock, onAdd }) => {
    const [quantity, setQuantity] = useState(1);
    const [active, setActive] = useState(false);
    const [message, setMessage] = useState("");

    function modifyAmount(e) {
        if (e.target.id === "increase") {
            setQuantity(quantity + 1);
        } else if (e.target.id === "decrease") {
            setQuantity(quantity - 1);
        }
    }
    function activate() {
        setActive(true);
        setTimeout(() => {
            setActive(false);
        }, 3000);
    }
    return (
        <>
            <div>
                <p>Stock: {stock}</p>
                <div>
                    {quantity <= 1 ? (
                        <button
                            className="button-4"
                            onClick={() => {
                                setMessage(
                                    "La cantidad no puede ser inferior a uno"
                                );
                                activate();
                            }}
                        >
                            -
                        </button>
                    ) : (
                        <button
                            className="button-4"
                            onClick={modifyAmount}
                            id="decrease"
                        >
                            -
                        </button>
                    )}
                    <span>{quantity}</span>
                    {quantity >= stock ? (
                        <button
                            className="button-4"
                            onClick={() => {
                                setMessage(
                                    "La cantidad no puede superar el stock disponible"
                                );
                                activate();
                            }}
                        >
                            +
                        </button>
                    ) : (
                        <button
                            className="button-4"
                            onClick={modifyAmount}
                            id="increase"
                        >
                            +
                        </button>
                    )}
                </div>
                <button className="button-4" value={quantity} onClick={onAdd}>
                    Agregar al carrito
                </button>
            </div>
            {active ? <Message message={message} /> : ""}
        </>
    );
};

export default ItemCount;
