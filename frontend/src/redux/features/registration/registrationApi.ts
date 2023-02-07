import { ERR_MSG } from "../../../constants/common";
import { REGISTRATION_ENDPOINT } from "../../../constants/routes";
import { User } from "../../../types/types";
import axios from "../../../utils/axiosInstance";

export const createNewUser = async (data: User) => {
    try {
        let res = await (
            await axios.post(REGISTRATION_ENDPOINT, JSON.stringify(data))
        ).data;

        return res;
    } catch (error: any) {
        throw new Error(
            error?.response?.data?.message || error?.message || ERR_MSG
        );
    }
};
