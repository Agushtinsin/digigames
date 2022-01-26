import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core";
import { itemDetailContainerStyle } from "./ItemDetailContainerStyle";
import { ItemDetail } from "./ItemDetail";
import CircularProgress from "@material-ui/core/CircularProgress";

const mockCall = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                {
                    id: 0,
                    titulo: "Fifa 22",
                    precio: 5499,
                    imgurl: "https://i.ibb.co/3rmLFkg/FIFA22.webp",
                },
                {
                    id: 1,
                    titulo: "Metro Exodus",
                    precio: 1124,
                    imgurl: "https://i.ibb.co/qgRvNqt/METROEXODUS.webp",
                },
                {
                    id: 2,
                    titulo: "Overwatch",
                    precio: 765,
                    imgurl: "https://i.ibb.co/t83HSs4/OVERWATCH.webp",
                },
                {
                    id: 3,
                    titulo: "Battlefield 2042",
                    precio: 5499,
                    imgurl: "https://i.ibb.co/tJsVVSP/BATTLEFIELD-2042.webp",
                }
            );
        }, 2000);
    });
};

const useStyles = makeStyles((theme) => itemDetailContainerStyle(theme));

export default function ItemDetailContainer() {
    const classes = useStyles();
    const [item, setItem] = useState([]);

    useEffect(() => {
        mockCall().then((data) => {
            setItem(data);
        });
    }, []);
    console.log(item);
    return (
        <>
            {item.length === 0 ? (
                <div className={classes.preloaderContainer}>
                    <CircularProgress size="6rem" color="inherit" />
                </div>
            ) : (
                <div className={classes.itemDetailContainer}>
                    <ItemDetail {...item} />
                </div>
            )}
        </>
    );
}
