import React, { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useLocation } from "react-router";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({
    id,
    title,
    pictureUrl,
    price,
    description,
    category,
    stock,
    cantidad,
    setCantidad,
}) => {
    const location = useLocation();

    const { addItem, removeItem, isInCart } = useContext(CartContext);

    const handleAddItem = () => {
        const item = {
            title,
            pictureUrl,
            price,
            description,
            category,
            id,
            stock,
        };
        addItem({ item, cantidad });
    };

    const handleRemoveItem = () => {
        removeItem(id);
    };

    const handleIsInCart = () => {
        isInCart(id);
    };

    return (
        <div>
            <div className="card">
                <img src={pictureUrl} alt={title} />
                <div>
                    <h2>{title}</h2>
                    <p className="precio">${price}</p>

                    {location.pathname === "/cart" ? null : (
                        <>
                            <p>Plataforma: {category}</p>
                            <p>Stock: {stock}</p>
                            <ItemCount
                                stock={stock}
                                cantidad={cantidad}
                                setCantidad={setCantidad}
                            />
                            <button onClick={handleAddItem}>
                                Agregar al carrito
                            </button>
                            <button onClick={handleIsInCart}>
                                ¿Esta en el carrito?
                            </button>
                        </>
                    )}

                    {location.pathname === "/cart" && (
                        <>
                            <p>Cantidad seleccionada: {cantidad}</p>
                            <p>Precio total de ${price * cantidad}</p>
                            <button onClick={handleRemoveItem}>
                                Remover item
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
export default ItemDetail;
