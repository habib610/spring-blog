import { LATEST_POST_ENDPOINT } from "../../../constants/routes";
import { LatestStoryAPI } from "../../../types/types";
import axios from "../../../utils/axiosInstance";
// ?pageSize=2&pageNumber=0&sort=id&order=desc
export const fetchLatestStory = async (data: LatestStoryAPI) => {
    let URL = LATEST_POST_ENDPOINT;
    let queryString = "";
    if (data?.pageSize) {
        queryString += `pageSize=${data?.pageSize}`;
    }
    if (data?.pageNumber) {
        queryString += `&pageNumber=${data?.pageNumber}`;
    }
    if (data?.sort) {
        queryString += `&sort=${data?.sort}`;
    }
    if (data?.order) {
        queryString += `&order=${data?.order}`;
    }
    if (queryString) {
        URL += `?${queryString}`;
    }
    return await (
        await axios.get(URL)
    ).data;
};
