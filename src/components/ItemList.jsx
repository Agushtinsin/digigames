import React, { Fragment } from "react";
import Item from "./Item";
import juegos from "../juegos";

export default function ItemList() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([juegos, juegos, juegos]);
        }, 2000);
    });

    promise
        .then((value) => console.log(value))
        .catch((reason) => console.log("Error :("))
        .finally((info) => console.log("Exito :D"));
    return juegos.map((juego) => {
        return (
            <div className="containerjuegos">
                <Item juego={juego} key={juego.titulo} />
            </div>
        );
    });
}
