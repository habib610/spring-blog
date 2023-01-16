import axiosRoot from "axios";

const axios = axiosRoot.create({
    baseURL: "http://localhost:9090",
    headers: {
        Authorization:
            " Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYWhtYW5AZ21haWwuY29tIiwiZXhwIjoxNjczODkzNjAwLCJpYXQiOjE2NzM4OTE4MDB9.8jDm6JsctwJt1-I_p1vG6JUINLJTcFl22GJtILIsFLlCdE5Swj2nu3LurykPxBrW2sTiq4mRKG8IaTYRcVEuXw",
        Accept: "*/*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});
export default axios;
