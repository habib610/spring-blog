import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import images from "../../constants/images";
import { HOME, links } from "../../constants/routes";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav>
            <div className=" backdrop-blur-xl fixed top-0 left-0 right-0 bg-gray-700 z-10">
                <div className="flex px-4 md:px-8 justify-between items-center links-center py-3 sm:container mx-auto  ">
                    <div>
                        <Link href={HOME}>
                            <div>
                                <Image
                                    src={images.logo}
                                    className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[200px] "
                                    alt="HR_Books"
                                />
                            </div>
                        </Link>
                    </div>
                    <ul className="hidden md:flex flex-end items-center">
                        {links.map((link) => (
                            <li key={link.id}>
                                <Link href={link.link}>
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
                                transition={{ duration: 0.75, ease: "easeOut" }}
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
                                            <Link href={link.link}>
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
        </nav>
    );
};

export default Navbar;
