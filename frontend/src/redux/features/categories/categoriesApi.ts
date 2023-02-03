import { CATEGORY_ENDPOINT } from "../../../constants/routes";
import axios from "../../../utils/axiosInstance";
// ?pageSize=2&pageNumber=0&sort=id&order=desc
export const fetchCategory = async () => {
    return await (
        await axios.get(CATEGORY_ENDPOINT)
    ).data;
};
