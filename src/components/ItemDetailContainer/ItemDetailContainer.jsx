import items from "../../juegos";
import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";

export const ItemDetailContainer = () => {
    const { itemId } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        if (itemId) {
            const task = new Promise((resolve) => {
                setTimeout(() => {
                    resolve(items[itemId]);
                }, 2000);
            });

            task.then((result) => {
                setItem(result);
            });
        }
    }, [itemId]);

    return (
        <div>
            <ItemDetail {...item} />
        </div>
    );
};
