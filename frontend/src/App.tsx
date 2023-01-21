import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import { HOME, LOGIN, REGISTRATION, WRITE } from "./constants/routes";
import Home from "./pages/home";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Write from "./pages/write";
function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path={HOME} element={<Home />} />
                        <Route path={LOGIN} element={<Login />} />
                        <Route path={REGISTRATION} element={<Registration />} />
                        <Route path={WRITE} element={<Write />} />
                        <Route path="*" element={<h1>404</h1>} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
