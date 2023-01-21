import { motion } from "framer-motion";

import { Link, useLocation } from "react-router-dom";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import images from "../../constants/images";
import { HOME, links, LOGIN, REGISTRATION } from "../../constants/routes";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import {
    selectAuth,
    userLoggedOut,
} from "../../redux/features/login/loginSlice";
import Avatar from "./Avatar";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { pathname } = useLocation();
    const isHidden = pathname === LOGIN || pathname === REGISTRATION;
    const { user } = useAppSelector(selectAuth);
    const dispatch = useAppDispatch();

    let userAvatar = null;
    if (user?.name) {
        userAvatar = (
            <Avatar
                name={user?.name}
                className="mx-2"
                onClick={() => dispatch(userLoggedOut())}
            />
        );
    }

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
                            {links.map((link) => (
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
