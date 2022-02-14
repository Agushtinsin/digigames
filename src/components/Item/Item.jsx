import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <div className="card" key={product.id}>
            <Link to={`details/${product.id}`}>
                <img
                    src={[product.pictureUrl]}
                    style={{ height: "450px" }}
                    alt={product.title}
                />
                <h1>{product.title}</h1>
                <p className="price">${product.price}</p>
            </Link>
        </div>
    );
};

export default Item;
