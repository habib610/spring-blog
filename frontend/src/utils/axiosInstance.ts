import axiosRoot from "axios";

const axios = axiosRoot.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});
export default axios;
