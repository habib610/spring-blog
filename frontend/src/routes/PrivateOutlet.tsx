import { Navigate, Outlet, useLocation } from "react-router-dom";
import { LOGIN, UNAUTHORIZED } from "../constants/routes";
import { useAppSelector } from "../redux/app/hooks";
import { selectAuth } from "../redux/features/login/loginSlice";

interface IProps {
    allowed: string;
}
const PrivateOutlet = ({ allowed }: IProps) => {
    const location = useLocation();
    const auth = useAppSelector(selectAuth);
    const userRoles = auth?.user?.roles?.map((role) => role.name);

    return auth?.user && userRoles?.includes(allowed) ? (
        <Outlet />
    ) : auth?.user ? (
        <Navigate to={UNAUTHORIZED} state={{ from: location }} replace />
    ) : (
        <Navigate to={LOGIN} state={{ from: location }} replace />
    );
};

export default PrivateOutlet;
