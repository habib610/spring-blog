import { Navigate, Outlet, useLocation } from "react-router-dom";
import { HOME } from "../constants/routes";
import { useAppSelector } from "../redux/app/hooks";
import { selectAuth } from "../redux/features/login/loginSlice";

const PublicOutlet = () => {
    const location = useLocation();
    const auth = useAppSelector(selectAuth);

    return !auth?.user ? (
        <Outlet />
    ) : (
        <Navigate to={HOME} state={{ from: location }} replace />
    );
};

export default PublicOutlet;
