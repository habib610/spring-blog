import Image from "next/image";
import Link from "next/link";
import { AVATAR_URL } from "../../constants/common";
import { Post } from "../../types/types";

interface IProps {
    data: Post;
}
const MoreFromAuthor = ({ data }: IProps) => {
    return (
        <div className="mt-4">
            <div className="flex items-center">
                <div className="flex items-center">
                    <Image
                        src={AVATAR_URL}
                        width={200}
                        height={200}
                        className="w-8 h-8 object-cover rounded-full mr-2"
                        alt={data.title}
                    />
                    <p className="font-semibold text-gray-600">
                        {data.users.name}
                    </p>
                </div>
            </div>
            <div className="flex items-start justify-between gap-3 mt-2">
                <div className="w-4/5">
                    <Link href={`/story/${data.id}`}>
                        <h3 className="font-bold text-gray-600 hover:text-gray-800 hover:underline cursor-pointer line-clamp-2">
                            {data.title}
                        </h3>
                    </Link>
                </div>
                <Image
                    src={data.imageName}
                    width={200}
                    height={200}
                    className=" w-16 h-16 sm:w-18 sm:h-18 lg:w-16 lg:h-16 object-cover "
                    alt={data.title}
                />
            </div>
        </div>
    );
};

export default MoreFromAuthor;
