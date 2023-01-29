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
const HorizontalCard = () => {
    const data = POST;
    return (
        <div>
            <div className="flex flex-col  md:flex-row justify-start md:justify-center bg-gray-100  ">
                <div
                    className="bg-gray-500 h-[300px]   md:w-[35%] lg:w-[40%] md:h-auto bg-no-repeat bg-cover bg-center rounded-md"
                    style={{ backgroundImage: `url(${data.imageName}) ` }}
                ></div>
                <div className="px-4 py-2 md:px-8  bg-gray-50 flex-1 flex flex-col items-start">
                    <CategoryBtn name="Programming" color={PRIMARY} />
                    <Link to={`story/${data.id}`}>
                        <h1 className="text-left text-gray-600 font-bold mt-2 mb-3 line-clamp-2 text-2xl sm:text-3xl md:text-2xl  hover:underline hover:cursor-pointer lg:pr-8">
                            {data.title}
                        </h1>
                    </Link>

                    {/* AVATAR  */}

                    <div>
                        <div className="flex items-center my-3">
                            <UserInfo
                                name={data.users.name}
                                avatar={AVATAR_URL}
                            />
                        </div>
                    </div>
                    {/* bottom Text */}
                    <div
                        dangerouslySetInnerHTML={{ __html: data.content }}
                        className="text-md text-gray-500 my-2 line-clamp-2"
                    ></div>

                    <button className="bg-transparent outline-none border-none cursor-pointer text-rose-500 mt-2 hover:cursor-pointer hover:underline transition-all ">
                        Read more..
                    </button>

                    <div className="mt-auto">
                        <p className="text-gray-400 mt-3 text-sm ">
                            Published:{" "}
                            <span className="font-semibold">25 Jun 2022</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalCard;
