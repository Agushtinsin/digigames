import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import db from "../servicios/firebase";
import { doc, getDoc } from "firebase/firestore";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const { productId } = useParams();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const reference = doc(db, "items", productId);

        getDoc(reference).then((querySnapshot) => {
            setProduct({ ...querySnapshot.data(), id: querySnapshot.id });
            setLoading(false);
        });

        setLoading(false);
    }, [productId]);

    return (
        <div>{isLoading ? <Loading /> : <ItemDetail product={product} />}</div>
    );
};

export default ItemDetailContainer;
