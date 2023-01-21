interface IProps {
    name: string;
    size?: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Avatar = ({
    name,
    className = "",
    size = "w-8 h-8 md:w-10 md:h-10",
    onClick,
}: IProps) => {
    return (
        <button
            onClick={onClick}
            className={
                " rounded-full text-white bg-blue-400 flex items-center justify-center  font-bold uppercase text-lg md:text-xl   " +
                size +
                " " +
                className
            }
        >
            {name.charAt(0)}
        </button>
    );
};

export default Avatar;
