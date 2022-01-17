import react, { Fragment } from "react";

export default function ItemListContainer(props) {
    return (
        <Fragment>
            <h1 className="digigames">Hola bienvenido a {props.greeting}</h1>
        </Fragment>
    );
}
