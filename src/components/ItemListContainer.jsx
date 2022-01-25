import react, { Fragment } from "react";

import Item from "./Item";
import ItemList from "./ItemList";

export default function ItemListContainer(props) {
    return (
        <Fragment>
            <ItemList />
        </Fragment>
    );
}
