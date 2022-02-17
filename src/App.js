import "./assets/main.css";
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./components/CartContext/CartContext";
import Checkout from "./components/Checkout/Checkout";

function App() {
    return (
        <CartContextProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="products" element={<ItemListContainer />} />
                    <Route
                        path="products/:categoryId"
                        element={<ItemListContainer />}
                    />
                    <Route
                        path="products/details/:productId"
                        element={<ItemDetailContainer />}
                    />
                    <Route path="checkout" element={<Checkout />} />
                </Routes>
            </Router>
        </CartContextProvider>
    );
}

export default App;
