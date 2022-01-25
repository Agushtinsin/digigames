import React, { Fragment } from "react";
import juegos from "../juegos";
import OVERWATCH from "../assets/OVERWATCH.webp";
import METROEXODUS from "../assets/METROEXODUS.webp";
import FIFA22 from "../assets/FIFA22.webp";

export default function Item(props) {
    return (
        <div className="card">
            <img src={require(`../assets/${props.juego.img}`)} />
            <h1>{props.juego.titulo}</h1>
            <p className="price">${props.juego.precio}</p>
            <p>
                <button>Añadir al carro</button>
            </p>
        </div>
    );
}
