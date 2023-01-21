import { REGISTRATION_ENDPOINT } from "../../../constants/routes";
import { User } from "../../../types/types";
import axios from "../../../utils/axiosInstance";

export const createNewUser = async (data: User) => {
    return await (
        await axios.post(REGISTRATION_ENDPOINT, JSON.stringify(data))
    ).data;
};
