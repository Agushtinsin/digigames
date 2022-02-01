import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, title, pictureUrl, price }) => {
    return (
        <div className="card" key={id}>
            <img src={[pictureUrl]} style={{ height: "450px" }} alt={title} />
            <h1>{title}</h1>
            <p className="precio">${price}</p>
            <p>
                <button className="boton">
                    <Link to={`item/${id}`}>Ver Detalle</Link>
                </button>
            </p>
        </div>
    );
};

export default Item;
