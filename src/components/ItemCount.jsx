import React, { Fragment, useState } from "react";

export default function ItemCount({ juego, stock, initial }) {
    const [juegos, setJuegos] = useState(juego);
    const [stocks, setStocks] = useState(stock);
    const [initials, setInitials] = useState(initial);

    const onAdd = () => {
        if (initials <= stocks - 1) {
            setInitials(initials + 1);
        }
    };

    const onReduce = () => {
        if (initials >= 1) {
            setInitials(initials - 1);
        }
    };

    return (
        <Fragment>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h2>{juegos}</h2>
                <h2>Cantidad: {initials}</h2>
                <button onClick={onReduce}>➖</button>
                <button onClick={onAdd}>➕</button>
                <p>(Stock disponible: {stocks})</p>
            </div>
        </Fragment>
    );
}
