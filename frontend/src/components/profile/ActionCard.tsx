import { Link } from "react-router-dom";
import { BLOG_IMAGE_ENDPOINT } from "../../constants/routes";
import { Post } from "../../types/types";
import Button from "../global/Button";
interface IProps {
    data: Post;
    onUpdate: any;
    onDelete: any;
}
const ActionCard = ({ data, onUpdate, onDelete }: IProps) => {
    return (
        <div className="mt-2 border-t py-1 border-gray-10">
            <div className="flex items-start justify-between gap-3 mt-2">
                <div className="w-4/5">
                    <Link to={`/story/${data.id}`}>
                        <h3 className="font-bold text-gray-600 hover:text-gray-800 hover:underline cursor-pointer line-clamp-2">
                            {data.title}
                        </h3>
                    </Link>
                </div>

                <img
                    src={BLOG_IMAGE_ENDPOINT + data.imageName}
                    className=" w-16 h-16 sm:w-18 sm:h-18 lg:w-16 lg:h-16 object-cover "
                    alt={data.title}
                />
            </div>

            <div>
                <Button
                    title="Update"
                    bg="bg-blue-500"
                    className=" mr-2  w-min"
                    onClick={() => onUpdate(data)}
                />
                <Button
                    title="Delete"
                    bg="bg-rose-500"
                    className=" mr-2 w-min "
                    onClick={() => onDelete(data.id)}
                />
            </div>
        </div>
    );
};

export default ActionCard;
