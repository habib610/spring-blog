interface IProps {
    name?: string;
    size?: string;
    className?: string;
    textSize?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Avatar = ({
    name,
    className = "",
    size = "w-8 h-8 md:w-10 md:h-10",
    textSize = " text-lg md:text-xl ",
    onClick,
}: IProps) => {
    return (
        <button
            onClick={onClick}
            className={
                " rounded-full text-white bg-blue-400 flex items-center justify-center  font-bold uppercase   " +
                size +
                " " +
                className +
                " " +
                textSize
            }
        >
            {name?.charAt(0)}
        </button>
    );
};

export default Avatar;
