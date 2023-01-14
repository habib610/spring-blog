type ErrorProps = {
    message?: string;
};
const ErrorMessage = ({ message }: ErrorProps) => {
    return (
        <div>
            {message && (
                <p className="mt-1 mb-2 text-rose-500  text-sm">{message}</p>
            )}
        </div>
    );
};

export default ErrorMessage;
