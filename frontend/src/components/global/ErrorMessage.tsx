type ErrorProps = {
    message?: string;
};
const ErrorMessage = ({ message }: ErrorProps) => {
    return (
        <div>
            <p className="mt-1 mb-2 text-rose-500 bg-opacity-20  text-sm">
                {message}
            </p>
        </div>
    );
};

export default ErrorMessage;
