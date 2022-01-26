import React from "react";

export const ItemDetail = (juegos) => {
    return (
        <>
            <div className={juegos.id}>
                <img src={juegos.imgurl} />
                <div className="itemText">
                    <h1>{juegos.titulo}</h1>
                    <bdi>
                        <p>${juegos.precio}</p>
                    </bdi>
                </div>
                <p>
                    <button className="boton">Añadir al carro</button>
                </p>
            </div>
        </>
    );
};
