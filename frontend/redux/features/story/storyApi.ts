import axios from "../../../utils/axiosInstance";

export const getStory = async (id: number) => {
    console.log("NEW VERSION");
    // const response = await axios.get(ALL_POST_ENDPOINT);
    console.log("NEWLY");
    let body = {
        username: "rahman@gmail.com",
        password: "test@123",
    };
    const res = await axios.post("/api/v1/auth/login", JSON.stringify(body));
    return res.data;
};
