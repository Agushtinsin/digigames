import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const Cart = ({ items }) => {
    return (
        <div>
            {items.map((currentItem) => {
                const { item } = currentItem;
                return <ItemDetail {...item} cantidad={currentItem.cantidad} />;
            })}
        </div>
    );
};

export default Cart;
