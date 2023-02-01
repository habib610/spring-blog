import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { ERR_MSG } from "../../constants/common";
import { ROLE_ADMIN, USER_LIST_ENDPOINT } from "../../constants/routes";
import { useAppDispatch } from "../../redux/app/hooks";
import { removeUserFromList } from "../../redux/features/user-list/userListSlice";
import { User } from "../../types/types";
import axios from "../../utils/axiosInstance";
interface IProps {
    data: User;
}
function TableRow({ data }: IProps) {
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();

    const handleDelete = async (id: number | undefined) => {
        try {
            setLoading(true);
            await (
                await axios.delete(`${USER_LIST_ENDPOINT}${id}`)
            ).data;
            toast.success("User has been deleted");
            dispatch(removeUserFromList(id));
        } catch (error: any) {
            setLoading(false);
            toast.error(error?.message || ERR_MSG);
        }
    };
    return (
        <div>
            <div>
                <div className="grid grid-cols-3   lg:grid-cols-5">
                    <div className="border border-white bg-gray-100 text-gray-700 py-3 text-center overflow-auto">
                        <p>{data.id}</p>
                    </div>
                    <div className=" hidden lg:block border border-white bg-gray-100 text-gray-700 py-3 text-center overflow-auto">
                        <p>{`${data.name}`}</p>
                    </div>
                    <div className="border border-white bg-gray-100 text-gray-700 py-3 text-center  overflow-auto">
                        <p>{data.email}</p>
                    </div>
                    <div
                        className={`border hidden lg:block border-white bg-opacity-70 ${
                            data.roles?.find((item) => item.name === ROLE_ADMIN)
                                ? " bg-green-500  text-white "
                                : " bg-blue-500 text-white "
                        } py-3 text-center overflow-auto`}
                    >
                        <p>
                            {data.roles?.find(
                                (item) => item.name === ROLE_ADMIN
                            )
                                ? "Admin"
                                : "User"}
                        </p>
                    </div>

                    <div className="border border-white bg-gray-100 text-gray-700 py-3 text-center overflow-auto  flex justify-center ">
                        <button
                            disabled={loading}
                            className="p-0 flex items-center gap-2 bg-rose-500 text-white py-1 px-2 rounded hover:bg-red-700 disabled:bg-gray-200"
                            // loading={loading}
                            onClick={() => handleDelete(data.id)}
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-4 border-rose-500 border-dotted rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    <span>
                                        <FaTrashAlt />
                                    </span>
                                    <span>Delete</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableRow;
