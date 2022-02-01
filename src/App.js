import react from "react";
import "./assets/main.css";
import Routes from "./routes/Routes";

class App extends react.Component {
    render() {
        return (
            <div className="App">
                <Routes />
            </div>
        );
    }
}
export default App;
