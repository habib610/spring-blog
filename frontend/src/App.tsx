import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import Home from "./pages";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Home />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
