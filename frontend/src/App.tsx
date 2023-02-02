import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/global/Navbar";
import {
    ADD_CATEGORY,
    CATEGORY,
    DASHBOARD,
    HOME,
    LOGIN,
    PROFILE,
    REGISTRATION,
    ROLE_ADMIN,
    ROLE_USER,
    SEARCH,
    STORY,
    UNAUTHORIZED,
    USERS,
    WRITE,
} from "./constants/routes";
import useAuth from "./hooks/useAuth";
import AddCategory from "./pages/admin/AddCategory";
import Dashboard from "./pages/admin/Dashboard";
import UsersList from "./pages/admin/UsersList";
import Category from "./pages/category/Category";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Registration from "./pages/registration";
import Search from "./pages/search";
import Story from "./pages/story";
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
            <ToastContainer
                hideProgressBar
                limit={1}
                position="bottom-left"
                theme="dark"
                autoClose={3000}
                closeButton={false}
                // icon={false}
            />

            <Router>
                <div>
                    <ScrollToTop />
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
                            <Route path={PROFILE} element={<Profile />} />
                            <Route
                                path={`${CATEGORY}/:catId`}
                                element={<Category />}
                            />
                            <Route path={WRITE} element={<Write />} />
                            <Route path={`${STORY}/:id`} element={<Story />} />
                            <Route path={SEARCH} element={<Search />} />
                        </Route>
                        {/* DESC:: PRIVATE USER ROUTES */}
                        <Route element={<PrivateOutlet allowed={ROLE_ADMIN} />}>
                            <Route
                                path={ADD_CATEGORY}
                                element={<AddCategory />}
                            />
                            <Route path={USERS} element={<UsersList />} />
                            <Route path={DASHBOARD} element={<Dashboard />} />
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

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
