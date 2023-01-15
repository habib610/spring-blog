import Image from "next/image";
import { AVATAR_URL } from "../../constants/common";
import { PRIMARY } from "../../constants/theme";
import { Post } from "../../types/types";
import CategoryBtn from "../global/CategoryBtn";
import Comment from "../global/Comment";
import RecommendedCard from "./RecommendedCard";

interface IProps {
    data: Post;
}

const StoryPage = ({ data }: IProps) => {
    return (
        <div className="min-h-screen  p-4 lg:pr-12">
            <div className=" flex justify-between items-end border-b-2 border-gray-400  pb-4 mb-8">
                <div className="flex items-center ">
                    <div className="h-16 w-16 md:h-16 md:w-16 rounded-full mr-3 ">
                        <Image
                            src={AVATAR_URL}
                            alt={data.title}
                            width={400}
                            height={400}
                            className="rounded-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold  text-gray-500">
                            @{data.users.name}
                        </h3>
                        {/* Todo: Change to published Date */}
                        <p className="text-gray-400  text-sm ">
                            Published:{" "}
                            <span className="font-semibold">25 Jun 2022</span>
                        </p>
                    </div>
                </div>
                <CategoryBtn
                    color={PRIMARY}
                    name={data.category.categoryTitle}
                />
            </div>

            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl mt-4 mb-8">
                {data.title}
            </h1>
            <div className="w-full bg-gray-500">
                <Image
                    src={data.imageName}
                    alt={data.title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-[55vh]"
                />
            </div>

            <div className="pb-12 ">
                <p className="text-xl leading-10 font-normal text-gray-600 mt-8">
                    {data.content}
                </p>
            </div>
            {/* Comment Box */}
            <div className="bg-gray-100 p-8">
                <div className=" w-4/4 sm:w-3/4 ">
                    <div className="h-[100px]  ">
                        <textarea
                            placeholder="Write your opinion"
                            className="w-full h-full outline-none rounded-md  shadow-sm border-2 border-gray-200 px-2 py-3  appearance-none focus-within:border-blue-600"
                        />
                    </div>
                    <button className="bg-transparent hover:bg-gray-700 border border-gray-700 hover:text-white transition-all py-1 px-3 rounded-full my-3 w-6/6  sm:w-2/6 ">
                        Comment
                    </button>
                </div>
            </div>

            {/* Comments */}
            <div className="my-8 border-b border-gray-300">
                <h2 className="text-xl bl-2 font-semibold">Comments</h2>
                <div className="ml-8 mt-4">
                    <Comment
                        content={data.comments[0].content}
                        name={data.users.name}
                    />
                    <Comment
                        content={data.comments[0].content}
                        name={data.users.name}
                    />
                </div>
            </div>

            {/* Related Blogs */}
            <h1 className="text-2xl font-semibold mt-16 my-4">
                Recommended For You
            </h1>
            <RecommendedCard data={data} />
            <RecommendedCard data={data} />
            <RecommendedCard data={data} />
        </div>
    );
};

export default StoryPage;
