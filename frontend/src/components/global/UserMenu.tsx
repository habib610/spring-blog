import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { IconType } from "react-icons";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { menuLinks, ROLE_ADMIN } from "../../constants/routes";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import {
    selectAuth,
    userLoggedOut,
} from "../../redux/features/login/loginSlice";
const UserMenu = () => {
    const { user } = useAppSelector(selectAuth);
    const dispatch = useAppDispatch();

    const checkRole = () => {
        const role = user?.roles?.find((role) => role.name === ROLE_ADMIN);
        if (role) return true;
        return false;
    };

    const getLink = (
        link: string,
        isAdmin: boolean,
        active: boolean,
        label: string,
        icon: IconType
    ) => {
        let Icon = icon;
        let className = "";
        let activeClass = "bg-blue-500 text-white";
        let inActiveClass = "bg-white text-black ";
        if (isAdmin && !checkRole()) className = "hidden";
        else if (isAdmin && checkRole() && active) className = activeClass;
        else if (isAdmin && checkRole() && !active) className = inActiveClass;
        else if (!isAdmin && !active) className = inActiveClass;
        else if (!isAdmin && active) className = activeClass;
        return (
            <Link to={link} className={className}>
                <div className="flex items-center py-2 px-3">
                    <Icon className="mr-2" />
                    <div className="">{label}</div>
                </div>
            </Link>
        );
    };
    return (
        <div className="relative ">
            <Menu as="span" className="z-10 inline-block p-0 mx-2 w-max">
                <Menu.Button className="inline-block">
                    <div>
                        <div className="w-8 h-8 md:w-10 md:h-10  text-lg md:text-xl  rounded-full text-white bg-blue-400 flex items-center justify-center  font-bold uppercase ">
                            {user?.name.charAt(0)}
                        </div>
                    </div>
                </Menu.Button>
                <Menu.Items className="flex flex-col absolute right-0 top-12 min-w-max">
                    {menuLinks.map(({ link, label, id, icon, isAdmin }) => (
                        /* Use the `active` state to conditionally style the active item. */
                        <Menu.Item key={id} as={Fragment}>
                            {({ active }) =>
                                getLink(link, isAdmin, active, label, icon)
                            }
                        </Menu.Item>
                    ))}

                    <Menu.Item>
                        <div
                            onClick={() => dispatch(userLoggedOut())}
                            role="button"
                            className="flex items-center py-2 px-3 bg-white text-black hover:bg-rose-500 border-b hover:text-white hover:cursor-pointer"
                        >
                            <CiLogout className="mr-2" />
                            <div className="">Signout</div>
                        </div>
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        </div>
    );
};
export default UserMenu;
