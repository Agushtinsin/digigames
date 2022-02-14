import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({ product }) => {
    const [added, setAdded] = useState(false);

    const { addToCart, productIsInCart } = useContext(CartContext);

    function onAdd(props) {
        product.quantity = parseInt(props.target.value);
        if (productIsInCart(product) === true) {
            console.log("El producto ya se encuentra en el carrito");
        } else {
            addToCart(product);
        }
        setAdded(true);
    }
    return (
        <div className="itemDetailContainer">
            <div className="itemDetailPhoto">
                <img
                    className="photo"
                    src={product.pictureUrl}
                    alt={product.title}
                />
            </div>
            <div className="BigItemDetail">
                <div className="ItemDetail">
                    <h2 className="product-title">{product.title}</h2>
                    <span className="product-price">$ {product.price}</span>
                    <h2>Acerca de:</h2>
                    <p>{product.description}</p>
                    <ul>
                        <li>
                            Plataforma: <span>{product.category}</span>
                        </li>
                    </ul>
                </div>
                {added === true || productIsInCart(product) === true ? (
                    <div className="buttonsContainer">
                        <Link to="/cart">
                            <button className="button-4">Ir al carrito</button>
                        </Link>
                        <Link to="/products">
                            <button className="button-4">Volver</button>
                        </Link>
                    </div>
                ) : (
                    <ItemCount onAdd={onAdd} stock={product.stock} />
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
