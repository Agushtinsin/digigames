import react, { Fragment } from "react";
import ItemCount from "./ItemCount";

export default function ItemListContainer(props) {
    return (
        <Fragment>
            <ItemCount juego={"Dark Souls III"} stock={5} initial={1} />
        </Fragment>
    );
}
