import { ChangeEventHandler } from "react";
import ErrorMessage from "./ErrorMessage";

interface IProps {
    label?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    value?: string;
    message?: string;
}

const Input = ({ label, onChange, placeholder, value, message }: IProps) => {
    const errorStyle =
        "border border-rose-500 py-2 px-4 w-full outline-none bg-transparent text-gray-600 shadow-none focus:border-blue-500 rounded-md focus:shadow-md shadow-rose-500";
    const regularStyle =
        "border border-gray-200 py-2 px-4 w-full outline-none bg-transparent text-gray-600 shadow-none focus:border-blue-500 rounded-md focus:shadow-md shadow-blue-500 ";
    return (
        <div>
            {label && <label className="text-black mb-1">{label}</label>}
            <input
                className={message ? errorStyle : regularStyle}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <ErrorMessage message={message} />
        </div>
    );
};

export default Input;
