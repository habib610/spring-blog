import Image from "next/image";
import { Post } from "../types/types";

interface IProps {
    data: Post;
}
const BlogCard = ({ data }: IProps) => {
    const image = data.imageName;
    return (
        <div>
            <div className="flex flex-col  md:flex-row justify-start md:justify-center bg-gray-100  ">
                <div
                    className="bg-gray-500 h-[300px]   md:w-[35%] lg:w-[40%] md:h-auto bg-no-repeat bg-cover bg-center rounded-md"
                    style={{ backgroundImage: `url(${data.imageName}) ` }}
                ></div>
                <div className="px-4 py-2 md:px-8  bg-gray-100 flex-1 flex flex-col items-start">
                    <div className="tag flex mb-3">
                        <div className="text-blue-600 bg-blue-500 bg-opacity-10 px-3 py-1 rounded-full mt-2 mr-2 font-semibold text-sm">
                            {data.category.categoryTitle}
                        </div>
                    </div>
                    <h1 className="text-left text-gray-700 font-bold mt-2 mb-3 line-clamp-2 text-2xl sm:text-3xl md:text-2xl  hover:underline hover:cursor-pointer">
                        {data.content}
                    </h1>
                    {/* AVATAR  */}
                    <div>
                        <div className="flex items-center my-3">
                            <div className="w-12 h-12 sm:w-14 sm:h-14  mr-2">
                                <Image
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                    alt="author_profile"
                                    className="w-full h-full rounded-full"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <h4 className="text-gray-600 text-lg font-semibold">
                                {data.users.name}
                            </h4>
                        </div>
                    </div>
                    {/* bottom Text */}
                    <p className="text-lg text-gray-600 my-2 line-clamp-2">
                        {data.content}
                    </p>

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

export default BlogCard;
