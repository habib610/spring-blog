import { LOGIN_ENDPOINT } from "../../../constants/routes";
import axios from "../../../utils/axiosInstance";

export const postUserData = async (data: {
    username: string;
    password: string;
}) => {
    return await (
        await axios.post(LOGIN_ENDPOINT, JSON.stringify(data))
    ).data;
};
