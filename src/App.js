import react from "react";
import "./assets/main.css";
import Routes from "./routes/Routes";
import CartProvider from "./components/CartContext/CartContext";

class App extends react.Component {
    render() {
        return (
            <div className="App">
                <CartProvider>
                    <Routes />
                </CartProvider>
            </div>
        );
    }
}
export default App;
