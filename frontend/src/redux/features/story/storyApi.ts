import axios from "../../../utils/axiosInstance";

export const getStory = async (id: number) => {
    let body = {
        username: "rahman@gmail.com",
        password: "test@123",
    };
    const res = await axios.post("/api/v1/auth/login", JSON.stringify(body));
    return res.data;
};
