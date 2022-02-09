import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const Cart = ({ items }) => {
    const total = items.map((currentItem) => {
        return currentItem.item.price * currentItem.cantidad;
    });

    function sumar() {
        let count = 0;
        total.forEach((element) => {
            count += element;
        });
        return count;
    }

    return (
        <div>
            <div className="cards">
                {items.map((currentItem) => {
                    const { item } = currentItem;
                    return (
                        <ItemDetail {...item} cantidad={currentItem.cantidad} />
                    );
                })}
            </div>
            <div style={{ textAlign: "center" }}>
                <h2>Su total es de: {sumar()}</h2>
            </div>
        </div>
    );
};

export default Cart;
