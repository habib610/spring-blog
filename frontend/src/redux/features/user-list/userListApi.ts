import { USER_LIST_ENDPOINT } from "../../../constants/routes";
import axios from "../../../utils/axiosInstance";

export const fetchUserList = async () => {
    return await (
        await axios.get(USER_LIST_ENDPOINT)
    ).data;
};
