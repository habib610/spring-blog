import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/global/Container";

import StoryPage from "../../components/story/StoryPage";
import { StorySidebar } from "../../components/story/StorySidebar";
import { ERR_MSG } from "../../constants/common";
import { ALL_POST_ENDPOINT } from "../../constants/routes";
import { useAppSelector } from "../../redux/app/hooks";
import { selectAuth } from "../../redux/features/login/loginSlice";
import { Post } from "../../types/types";
import axios from "../../utils/axiosInstance";

const Story = () => {
    const { id } = useParams();
    const { user } = useAppSelector(selectAuth);
    const [data, setData] = useState<Post | null>(null);
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");
    useEffect(() => {
        const fetchFullStory = async () => {
            setLoading(true);
            setError("");
            try {
                setLoading(true);
                const fullStory = await (
                    await axios.get(`${ALL_POST_ENDPOINT}/${id}`)
                ).data;
                setData(fullStory);
                setLoading(false);
                setError("");
            } catch (error: any) {
                setError(error?.message || ERR_MSG);
                setLoading(false);
            }
        };

        fetchFullStory();
    }, [id]);

    return (
        <>
            <div className="min-h-screen ">
                <Container>
                    <div className="flex flex-col lg:flex-row pt-24">
                        <div className="lg:w-7/12  px-3 lg:px-3 ">
                            <StoryPage
                                data={data}
                                error={error}
                                loading={loading}
                                setData={setData}
                                user={user}
                            />
                        </div>
                        <div className="w-full lg:w-5/12  px-3 lg:px-3 ">
                            <StorySidebar data={data} />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Story;
