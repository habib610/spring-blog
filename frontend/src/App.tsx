import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import {
    HOME,
    LOGIN,
    REGISTRATION,
    ROLE_USER,
    UNAUTHORIZED,
    WRITE,
} from "./constants/routes";
import useAuth from "./hooks/useAuth";
import Home from "./pages/home";
import Login from "./pages/login";
import Registration from "./pages/registration";
import UnAuthorized from "./pages/UnAuthorized";
import Write from "./pages/write";
import PrivateOutlet from "./routes/PrivateOutlet";
import PublicOutlet from "./routes/PublicOutlet";
function App() {
    const checkAuth = useAuth();
    return !checkAuth ? (
        <div className="min-h-screen flex items-center justify-center text-center">
            <h1 className="text-lg ">Checking Auth...</h1>
        </div>
    ) : (
        <div className="App">
            <Router>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path={HOME} element={<Home />} />

                        {/* DESC:: PUBLIC ROUTE <!NOT SHOWN FOR AUTHENTIC USER */}
                        <Route element={<PublicOutlet />}>
                            <Route path={LOGIN} element={<Login />} />
                            <Route
                                path={REGISTRATION}
                                element={<Registration />}
                            />
                        </Route>

                        {/* DESC:: PRIVATE USER ROUTES */}
                        <Route element={<PrivateOutlet allowed={ROLE_USER} />}>
                            <Route path={WRITE} element={<Write />} />
                        </Route>

                        <Route path={UNAUTHORIZED} element={<UnAuthorized />} />
                        <Route path="*" element={<h1>404</h1>} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
