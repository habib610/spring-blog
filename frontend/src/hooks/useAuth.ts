import { useEffect, useState } from "react";
import { localUser } from "../constants/routes";
import { useAppDispatch } from "../redux/app/hooks";
import { userLoggedIn } from "../redux/features/login/loginSlice";

const useAuth = () => {
    const [authChecked, setAuthChecked] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const localAuth = localStorage?.getItem(localUser);

        if (localAuth) {
            dispatch(userLoggedIn(JSON.parse(localAuth)));
        }
        setAuthChecked(true);
    }, [dispatch]);

    return authChecked;
};

export default useAuth;
