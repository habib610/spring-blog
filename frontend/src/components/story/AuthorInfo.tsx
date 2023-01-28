import { RiMailAddLine } from "react-icons/ri";
import { User } from "../../types/types";
import Avatar from "../global/Avatar";
interface IProps {
    data: User;
}
const AuthorInfo = ({ data }: IProps) => {
    return (
        <div className="mb-10 ">
            <div className="">
                <Avatar
                    size="w-[100px] h-[100px]  bg-rose-700"
                    name={data.name}
                    textSize="text-2xl  lg:text-5xl "
                />
                <h3 className="mb-3 text-black text-xl font-semibold">
                    {data.name}
                </h3>
            </div>
            <p className="text-gray-600 sm:w-8/12">{data.about}</p>
            <div className="my-3">
                <button className="w-10 h-10 flex  items-center justify-center bg-transparent hover:text-white hover:cursor-pointer border hover:bg-black border-black rounded-full text-2xl">
                    <RiMailAddLine />
                </button>
            </div>
        </div>
    );
};

export default AuthorInfo;
