import { motion } from "framer-motion";
import moment from "moment";
import { Link } from "react-router-dom";
import { AVATAR_URL } from "../../constants/common";
import { BLOG_IMAGE_ENDPOINT, STORY } from "../../constants/routes";
import { PRIMARY } from "../../constants/theme";
import { Post } from "../../types/types";
import CategoryBtn from "./CategoryBtn";
import UserInfo from "./UserInfo";
interface IProps {
    data: Post;
}

const VerticalCard = ({ data }: IProps) => {
    const addedDate = moment(data.addedDate).format("DD MMM, YY");

    return (
        <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Link to={`${STORY}/${data.id}`}>
                <div className=" bg-gray-50 rounded-md  shadow-md overflow-hidden">
                    <img
                        alt="blog_image"
                        className="hover:scale-110  transition duration-200 h-[200px] sm:h-[300px] object-cover w-full rounded-lg "
                        src={BLOG_IMAGE_ENDPOINT + data?.imageName}
                    />
                    <div className=" px-3 pt-4 pb-2">
                        <div className=" flex flex-col items-start ">
                            <UserInfo
                                name={data.users.name}
                                avatar={AVATAR_URL}
                            />
                            <div>
                                <h2 className="my-2 text-xl hover:underline hover:cursor-pointer text-gray-700 font-semibold">
                                    {data.title}
                                </h2>
                            </div>
                            {/* bottom Text */}
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: data.content,
                                }}
                                style={{ fontSize: "16px" }}
                                className="text-md text-gray-500 mb-2 line-clamp-2"
                            ></div>

                            <button className="bg-transparent outline-none border-none cursor-pointer text-rose-500  hover:cursor-pointer hover:underline transition-all my-3">
                                Read more..
                            </button>
                        </div>
                        <div className="mt-auto flex items-end justify-between">
                            <div className="">
                                <CategoryBtn
                                    name={data.category.categoryTitle}
                                    color={PRIMARY}
                                />
                            </div>
                            <p className="text-gray-400  text-sm ">
                                Published:{" "}
                                <span className="font-semibold">
                                    {addedDate}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default VerticalCard;
