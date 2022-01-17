import react from "react";
import "./assets/main.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

class App extends react.Component {
    render() {
        return (
            <div>
                <Navbar />
                <ItemListContainer greeting="Digigames..." />
            </div>
        );
    }
}
export default App;
