import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BLOG_IMAGE_ENDPOINT, STORY } from "../../constants/routes";
import { Post } from "../../types/types";
interface IProps {
    data?: Post;
}
const RecommendedCard = ({ data }: IProps) => {
    const router = useNavigate();
    return (
        <motion.div
            initial={{ y: 100, z: 100 }}
            whileInView={{ opacity: [0, 1], y: 0, z: 0 }}
            transition={{ duration: 0.5 }}
            role="button"
            onClick={() => router(`${STORY}/${data?.id}`)}
            className="flex flex-col  md:flex-row justify-start md:justify-center bg-gray-50 mb-8  "
        >
            <div
                className="bg-gray-500 h-[250px]   md:w-[35%] lg:w-[40%] md:h-auto bg-no-repeat bg-cover bg-center rounded-md"
                style={{
                    backgroundImage: `url(${
                        BLOG_IMAGE_ENDPOINT + data?.imageName
                    }) `,
                }}
            ></div>
            <div className="px-4 py-2 md:px-8  bg-gray-100 flex-1 flex flex-col items-start">
                <h1 className="text-left text-gray-600 font-bold mt-2 mb-3 line-clamp-2 text-2xl sm:text-3xl md:text-2xl  hover:underline hover:cursor-pointer lg:pr-8">
                    {data?.title}
                </h1>

                {/* AVATAR  */}

                {/* bottom Text */}
                <p className="text-md text-gray-500 my-2 line-clamp-2">
                    {data?.content}
                </p>

                <button className="bg-transparent outline-none border-none cursor-pointer text-rose-500 mt-2 hover:cursor-pointer hover:underline transition-all ">
                    Read more..
                </button>
            </div>
        </motion.div>
    );
};

export default RecommendedCard;
