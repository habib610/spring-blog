import { useEffect } from "react";

interface IProps {
    children?: JSX.Element | JSX.Element[];
    isOpen: any;
}

const Modal = ({ children, isOpen }: IProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);
    let className = isOpen
        ? "fixed top-0 right-0 left-0 bottom-0 bg-gray-600 bg-opacity-40 z-40"
        : "hidden";
    return <div className={className}>{children}</div>;
};

export default Modal;
