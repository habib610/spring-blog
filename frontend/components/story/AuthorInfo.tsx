import Image from "next/image";
import { RiMailAddLine } from "react-icons/ri";
import { AVATAR_URL } from "../../constants/common";
import { User } from "../../types/types";
interface IProps {
    data: User;
}
const AuthorInfo = ({ data }: IProps) => {
    return (
        <div className="mb-10 ">
            <div className="">
                <Image
                    src={AVATAR_URL}
                    width={200}
                    height={200}
                    alt={data.name}
                    className="w-[100px] h-[100px] rounded-full bg-cover mb-4"
                />
                <h3 className="mb-4 text-black text-xl font-semibold">
                    {data.name}
                </h3>
            </div>
            <p className="text-gray-600 sm:w-8/12">{data.about}</p>
            <div className="my-3">
                <button className="w-10 h-10 flex items-center justify-center bg-transparent hover:text-white hover:cursor-pointer border hover:bg-black border-black rounded-full text-2xl">
                    <RiMailAddLine />
                </button>
            </div>
        </div>
    );
};

export default AuthorInfo;
