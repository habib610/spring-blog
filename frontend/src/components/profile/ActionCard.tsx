import { FiTrash } from "react-icons/fi";
import { RxUpdate } from "react-icons/rx";
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
            <div className="flex  justify-between gap-3 mt-2 min-h-[100px] lg:min-h-[150px]">
                <div className="w-4/5">
                    <Link to={`/story/${data.id}`}>
                        <h3 className="font-bold text-gray-600 hover:text-gray-800 hover:underline cursor-pointer line-clamp-2">
                            {data.title}
                        </h3>
                    </Link>
                </div>

                <div
                    className=" flex-1 md:h-auto bg-no-repeat bg-cover bg-center rounded-md"
                    style={{
                        backgroundImage: `url(${
                            BLOG_IMAGE_ENDPOINT + data.imageName
                        }) `,
                    }}
                ></div>
            </div>

            <div className="flex  items-center gap-2">
                <Button
                    title="Update"
                    bg="bg-blue-500"
                    className=" mr-2  w-min font-normal py-1 shadow-none hover:bg-blue-700"
                    onClick={() => onUpdate(data)}
                    icon={RxUpdate}
                />
                <Button
                    title="Delete"
                    bg="bg-rose-500"
                    className=" mr-2 w-min font-normal py-1 shadow-none hover:bg-rose-700"
                    onClick={() => onDelete(data.id)}
                    icon={FiTrash}
                />
            </div>
        </div>
    );
};

export default ActionCard;
