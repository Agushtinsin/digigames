import items from "../../juegos";
import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router";

const ItemList = () => {
    const { categoryId } = useParams();

    const [currentProducts, setCurrentProducts] = useState([]);

    useEffect(() => {
        if (categoryId) {
            const task = new Promise((resolve) => {
                setTimeout(() => {
                    resolve(items);
                }, 1500);
            });

            task.then((result) => {
                setCurrentProducts(result);
            });
        }
    }, [categoryId]);

    useEffect(() => {
        const task = new Promise((resolve) => {
            setTimeout(() => {
                if (categoryId) {
                    resolve(
                        items.filter(
                            (element) => element.category === categoryId
                        )
                    );
                } else {
                    resolve(items);
                }
            }, 1500);
        });

        task.then((result) => {
            setCurrentProducts(result);
        });
    }, [categoryId]);

    return (
        <div className="cards">
            {currentProducts.map((items) => (
                <Item key={items.id} {...items} />
            ))}
        </div>
    );
};

export default ItemList;
