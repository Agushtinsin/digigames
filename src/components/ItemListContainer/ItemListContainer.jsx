import React from "react";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where, orderBy } from "firebase/firestore";
import db from "../servicios/firebase";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(async () => {
        const myProducts = categoryId
            ? query(
                  collection(db, "items"),
                  where("category", "==", categoryId)
              )
            : query(collection(db, "items"));

        const querySnapshot = await getDocs(myProducts);

        setProducts(
            querySnapshot.docs.map((e) => {
                return { ...e.data(), id: e.id };
            })
        );
        setLoading(false);
    }, [categoryId]);

    return (
        <div>{isLoading ? <Loading /> : <ItemList products={products} />}</div>
    );
};

export default ItemListContainer;
