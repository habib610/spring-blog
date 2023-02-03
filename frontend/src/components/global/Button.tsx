import { IconType } from "react-icons";

interface IProps {
    title?: string;
    className?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
    loading?: boolean;
    component?: any;
    bg?: string;
    rest?: any;
    disabled?: boolean;
    icon?: IconType;
}
const Button = ({
    title,
    className = " ",
    onClick,
    loading = false,
    component: Component,
    disabled = false,
    icon: Icon,
    bg = "  bg-gray-700",
    ...rest
}: IProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            {...rest}
            disabled={disabled || loading}
            className={
                "disabled:bg-gray-100  disabled:text-gray-700 hover:cursor-pointer disabled:cursor-not-allowed shadow shadow-blue-400    my-4 w-full hover:shadow-none disabled:shadow-none hover:bg-black text-white py-2 px-4 font-bold rounded-md disabled:border disabled:border-gray-200 flex  items-center justify-center " +
                bg +
                " " +
                className
            }
        >
            {Icon && <Icon className="mr-1" />}
            {loading ? (
                <div className="flex gap-2 items-center justify-center">
                    <div className="w-5 h-5 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
                    {title && " Loading..."}
                </div>
            ) : title ? (
                title
            ) : (
                <Component />
            )}
        </button>
    );
};

export default Button;
