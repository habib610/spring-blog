import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BLOG_IMAGE_ENDPOINT } from "../../constants/routes";
import { Post } from "../../types/types";
import Avatar from "../global/Avatar";
interface IProps {
    data: Post;
}
const MoreFromAuthor = ({ data }: IProps) => {
    return (
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="mt-2 border-t py-1 border-gray-10"
        >
            <div className="flex items-center">
                <div className="flex items-center">
                    <Avatar
                        name={data.users.name}
                        size="w-8 h-8"
                        className="bg-rose-700"
                    />
                    <p className="font-semibold text-gray-600 ml-2">
                        {data.users.name}
                    </p>
                </div>
            </div>
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
        </motion.div>
    );
};

export default MoreFromAuthor;
