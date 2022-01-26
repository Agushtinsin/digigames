import react from "react";
import "./assets/main.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer";

class App extends react.Component {
    render() {
        return (
            <div>
                <Navbar />
                {/* <ItemListContainer greeting="Digigames..." /> */}
                <ItemDetailContainer />
            </div>
        );
    }
}
export default App;
