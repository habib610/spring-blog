import { AiOutlineMail } from "react-icons/ai";
import { MdSystemUpdateAlt } from "react-icons/md";
import { useAppSelector } from "../../redux/app/hooks";
import { selectAuth } from "../../redux/features/login/loginSlice";

const UserDetails = () => {
    const { user } = useAppSelector(selectAuth);
    return (
        <div className="relative w-full">
            <div className="-mt-14  lg:-mt-14 -top-14  w-full ">
                <div className=" w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] bg-gradient-to-b from-orange-500 to-rose-400  flex items-center justify-center rounded-md shadow-sm">
                    <p className=" text-4xl  lg:text-6xl text-white uppercase font-semibold ">
                        {user?.name?.charAt(0)}
                    </p>
                </div>

                <div className="mt-3">
                    <h2 className=" text-xl  lg:text-2xl font-bold text-gray-600 my-1">
                        @{user?.name}
                    </h2>
                    <div className="flex gap-2 mt-3 items-center text-lg text-gray-600">
                        <AiOutlineMail size={25} /> <span>{user?.email}</span>
                    </div>
                    <p className="mt-3 lg:w-[80%] text-gray-600">
                        {user?.about}
                    </p>
                </div>

                <div className="">
                    <button className=" font-semibold bg-blue-600 text-white flex items-center gap-3 py-2 px-4 shadow-sm  rounded-lg mt-6 hover:bg-blue-800">
                        <MdSystemUpdateAlt size={25} />{" "}
                        <span>Update Profile</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
