import React from "react";
import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({ title, pictureUrl, price, id, stock }) => {
    return (
        <div>
            <div className="card">
                <img src={pictureUrl} className="card-img-top" alt={title} />
                <div>
                    <h2>{title}</h2>
                    <p className="precio">${price}</p>
                    <p>Stock: {stock}</p>
                    <ItemCount stock={stock} inicial={1} />
                </div>
            </div>
        </div>
    );
};
export default ItemDetail;
