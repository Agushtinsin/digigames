import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../CartContext/CartContext";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import db from "../servicios/firebase";

const Checkout = () => {
    const { cart, purchase, clearCart, changeMessage } =
        useContext(CartContext);

    let items = [];

    cart.forEach((p) => {
        items.push({
            id: p.id,
            title: p.title,
            price: p.price,
            quantity: p.quantity,
        });
    });

    const [orderNumber, setOrderNumber] = useState();

    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        items: items,
        date: new Date(),
        total: purchase.total,
    });

    const [lastId, setLastId] = useState("");

    useEffect(() => {
        const reference = collection(db, "orders");

        getDocs(reference).then((querySnapshot) => {
            setOrderNumber(querySnapshot.size + 1);
        });
    }, [orderNumber]);

    const sendData = async () => {
        setData({
            ...data,
            order: orderNumber,
        });
        const db = getFirestore();
        const { id } = await addDoc(collection(db, "orders"), {
            date: data.date,
            email: data.email,
            name: data.name,
            phone: data.phone,
            order: orderNumber,
            total: data.total,
            items: data.items,
        });
        setLastId(id);
        clearCart();
        changeMessage("Datos enviados con éxito");
    };

    function changeData(event) {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <div className="checkoutContainer">
            {cart.length > 0 ? (
                <form>
                    <input
                        className="inputCheckout"
                        onChange={changeData}
                        type="text"
                        name="name"
                        required
                        placeholder="Nombre"
                    ></input>
                    <input
                        className="inputCheckout"
                        onChange={changeData}
                        type="tel"
                        name="phone"
                        required
                        placeholder="Celular"
                    ></input>
                    <input
                        className="inputCheckout"
                        onChange={changeData}
                        type="email"
                        name="email"
                        required
                        placeholder="Correo electrónico"
                    ></input>
                    <button
                        className="botonCheckout"
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            sendData(data);
                        }}
                    >
                        Comprar
                    </button>
                    <h1>{lastId}</h1>
                </form>
            ) : (
                <div className="carrito">
                    <h3>Su pedido a sido realizado con éxito.</h3>
                    <h3>
                        Su código de operación es <span>{lastId}</span> y su
                        número de orden es <span>{data.order}</span>{" "}
                    </h3>
                </div>
            )}
        </div>
    );
};

export default Checkout;
