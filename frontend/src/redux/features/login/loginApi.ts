import { ERR_MSG } from "../../../constants/common";
import { LOGIN_ENDPOINT } from "../../../constants/routes";
import axios from "../../../utils/axiosInstance";

export const postUserData = async (data: {
    username: string;
    password: string;
}) => {
    try {
        return await (
            await axios.post(LOGIN_ENDPOINT, data, {
                headers: {
                    Accept: "*",
                    "Content-Type": "application/json",
                },
            })
        ).data;
    } catch (error: any) {
        throw new Error(
            error?.response?.data?.message || error?.message || ERR_MSG
        );
    }
};
