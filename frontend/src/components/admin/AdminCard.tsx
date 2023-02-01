import { Link } from "react-router-dom";
interface IProps {
    src: string;
    title: string;
    link: string;
}
const AdminCard = ({ src, title, link }: IProps) => {
    return (
        <Link to={link}>
            <div className="flex justify-center items-center bg-white shadow-md rounded-md p-4 hover:shadow-none cursor-pointer border border-gray-200">
                <div className="flex flex-col items-center justify-center">
                    <img
                        src={src}
                        alt="user"
                        className="w-28 sm:w-40 md:w-48 h-28 sm:h-40 md:h-48 rounded-full bg-gray-50"
                    />
                    <p className="text-body text-lg mt-2">{title}</p>
                </div>
            </div>
        </Link>
    );
};

export default AdminCard;
