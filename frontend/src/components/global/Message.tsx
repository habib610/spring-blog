interface IProps {
    message: string | undefined;
    error?: boolean;
}
const Message = ({ message, error }: IProps) => {
    const style = error
        ? "border p-3 rounded-md bg-rose-500  border-rose-500 text-rose-500 bg-opacity-5 text-center  my-4"
        : "border p-3 rounded-md bg-green-500 border-green-500 text-green-500 bg-opacity-5 text-center  my-4";
    return (
        <div className={style}>
            <p className="text-sm">{message}</p>
        </div>
    );
};

export default Message;
