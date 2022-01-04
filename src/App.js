import react from "react";
import "./assets/main.css";
import Navbar from "./components/Navbar";

class App extends react.Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1 className="digigames">DIGIGAMES...</h1>
            </div>
        );
    }
}
export default App;
