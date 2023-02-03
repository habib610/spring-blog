import { GET_SIMILAR_USER_POST_ENDPOINT } from "../../../constants/routes";
import axios from "../../../utils/axiosInstance";

export const fetchUserPosts = async (id: number) => {
    let URL = `${GET_SIMILAR_USER_POST_ENDPOINT}/${id}/posts`;
    return await (
        await axios.get(URL)
    ).data;
};
