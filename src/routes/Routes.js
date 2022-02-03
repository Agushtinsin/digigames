import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";
const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer />
                    </Route>
                    <Route path="/item/:itemId">
                        <ItemDetailContainer />
                    </Route>
                    <Route path="/category/:categoryId">
                        <ItemListContainer />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Routes;
