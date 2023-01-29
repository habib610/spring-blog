import { motion } from "framer-motion";

import { Link, useLocation } from "react-router-dom";

import { Menu } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { HiMenuAlt4 } from "react-icons/hi";
import images from "../../constants/images";
import {
    authLinks,
    HOME,
    links,
    LOGIN,
    menuLinks,
    REGISTRATION,
} from "../../constants/routes";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import {
    selectAuth,
    userLoggedOut,
} from "../../redux/features/login/loginSlice";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { pathname } = useLocation();
    const isHidden = pathname === LOGIN || pathname === REGISTRATION;
    const { user, token } = useAppSelector(selectAuth);
    const dispatch = useAppDispatch();

    let userAvatar = null;
    if (user?.name) {
        userAvatar = <UserMenu />;
    }
    const navItems = user && token ? authLinks : links;

    return (
        <nav>
            <div
                className={
                    isHidden
                        ? "hidden"
                        : " backdrop-blur-xl fixed top-0 left-0 right-0 bg-gray-700 z-10"
                }
            >
                <div className="flex px-4 md:px-8 justify-between items-center links-center py-3 sm:container mx-auto  ">
                    <div>
                        <Link to={HOME}>
                            <div>
                                <img
                                    src={images.logo}
                                    className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[200px] "
                                    alt="HR_Books"
                                />
                            </div>
                        </Link>
                    </div>

                    <div className="flex items-center md:flex-row-reverse">
                        {userAvatar}
                        <ul className="hidden md:flex flex-end items-center">
                            {navItems.map((link) => (
                                <li key={link.id}>
                                    <Link to={link.link}>
                                        <span className="px-3 py-2 border-1 border-orange-50 font-semibold hover:text-white hover:bg-orange-400 text-white rounded-md">
                                            {link.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="block md:hidden ">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="bg-orange-500 text-white h-[30px] w-[30px] flex items-center  justify-center rounded-full"
                            >
                                <HiMenuAlt4 className="text-xl" />
                            </button>
                            {isOpen && (
                                <motion.div
                                    whileInView={{ x: [300, 0] }}
                                    transition={{
                                        duration: 0.75,
                                        ease: "easeOut",
                                    }}
                                    exit={{ x: [-300, 0] }}
                                    className="fixed top-0 right-0 w-[80%] h-screen bg-orange-300"
                                >
                                    <div className="flex justify-end mt-4 mx-4 m-3">
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="bg-orange-500 text-white h-[30px] w-[30px] flex  items-center justify-center rounded-full"
                                        >
                                            <AiOutlineClose />
                                        </button>
                                    </div>
                                    <ul className="flex flex-col justify-start">
                                        {links.map((link) => (
                                            <li
                                                key={link.id}
                                                className="px-3 py-2 border-1 border-orange-50 font-semibold hover:text-white hover:bg-orange-400 w-100mb-2"
                                            >
                                                <Link to={link.link}>
                                                    <span className="">
                                                        {link.label}
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

function UserMenu() {
    const { user } = useAppSelector(selectAuth);
    const dispatch = useAppDispatch();
    return (
        <div className="relative">
            <Menu as="span" className="z-10 inline-block p-0 mx-2">
                <Menu.Button className="inline-block">
                    <div>
                        <div className="w-8 h-8 md:w-10 md:h-10  text-lg md:text-xl  rounded-full text-white bg-blue-400 flex items-center justify-center  font-bold uppercase ">
                            {user?.name.charAt(0)}
                        </div>
                    </div>
                </Menu.Button>
                <Menu.Items className="flex flex-col absolute right-0  ">
                    {menuLinks.map(({ link, label, id, icon: Icon }) => (
                        /* Use the `active` state to conditionally style the active item. */
                        <Menu.Item key={link} as={Fragment}>
                            {({ active }) => (
                                <Link
                                    to={link}
                                    className={`${
                                        active
                                            ? "bg-blue-500 text-white "
                                            : "bg-white text-black  "
                                    }`}
                                >
                                    <div className="flex items-center py-2 px-3">
                                        <Icon className="mr-2" />
                                        <div className="">{label}</div>
                                    </div>
                                </Link>
                            )}
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
}
