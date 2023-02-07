import axiosRoot from "axios";
import { BASE_URL } from "../constants/routes";

const axios = axiosRoot.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "*",
        "Content-Type": "application/json",
    },
});
export default axios;
