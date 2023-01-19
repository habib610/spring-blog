import { Link } from "react-router-dom";
import { AVATAR_URL } from "../../constants/common";
import { PRIMARY } from "../../constants/theme";
import { POST } from "../../pages/story";
import { Post } from "../../types/types";
import CategoryBtn from "./CategoryBtn";
import UserInfo from "./UserInfo";
interface IProps {
    data: Post;
}

const VerticalCard = () => {
    const data = POST;
    return (
        <div className=" bg-gray-50 rounded-md  shadow-md">
            <img
                alt="blog_image"
                className=" h-[200px] sm:h-[300px] object-cover w-full rounded-lg "
                src={data.imageName}
            />
            <div className=" px-3 pt-4 pb-2">
                <div className=" flex flex-col items-start ">
                    <UserInfo name={data.users.name} avatar={AVATAR_URL} />
                    <div>
                        <Link to={`story/${data.id}`}>
                            <h2 className="my-2 text-xl hover:underline hover:cursor-pointer text-gray-700 font-semibold">
                                {data.title}
                            </h2>
                        </Link>
                    </div>
                    {/* bottom Text */}
                    <p className="text-md text-gray-500 mb-2 line-clamp-2">
                        {data.content}
                    </p>

                    <button className="bg-transparent outline-none border-none cursor-pointer text-rose-500  hover:cursor-pointer hover:underline transition-all my-3">
                        Read more..
                    </button>
                </div>
                <div className="mt-auto flex items-end justify-between">
                    <div className="">
                        <CategoryBtn name="Programming" color={PRIMARY} />
                    </div>
                    <p className="text-gray-400  text-sm ">
                        Published:{" "}
                        <span className="font-semibold">25 Jun 2022</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VerticalCard;
