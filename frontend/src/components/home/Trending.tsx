import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import { ERR_MSG } from "../../constants/common";
import { TOP_POST_ENDPOINT } from "../../constants/routes";
import { Post } from "../../types/types";
import axios from "../../utils/axiosInstance";

import Container from "../global/Container";
import HorizontalCard from "../global/HorizontalCard";
import Message from "../global/Message";
import Title from "../global/Title";
import HorizontalLoader from "../loader/HorizontalLoader";

const Trending = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [trending, setTrending] = useState<Post[] | []>([]);

    useEffect(() => {
        const fetchTrendingStory = async () => {
            try {
                setError("");
                setIsLoading(true);
                setIsLoading(false);
                const res = await (await axios.get(TOP_POST_ENDPOINT)).data;
                setTrending(res);
                setIsLoading(false);
            } catch (error: any) {
                setIsLoading(false);
                setError(error?.message || ERR_MSG);
            }
        };
        fetchTrendingStory();
    }, []);
    let trendingPost = null;

    if (isLoading) {
        trendingPost = <HorizontalLoader />;
    }
    if (!isLoading && error) {
        trendingPost = <Message message={error} error={true} />;
    }
    if (!isLoading && !error && trending.length > 0) {
        trendingPost = (
            <Carousel slideInterval={5000}>
                {trending.map((item) => (
                    <HorizontalCard key={item.id} data={item} />
                ))}
            </Carousel>
        );
    }

    if (!isLoading && !error && trending.length === 0) {
        trendingPost = <Message message={"Not available right now"} />;
    }
    return (
        <div className="relative">
            <Container>
                <Title title="Trending Blogs" />

                <div>
                    <div>{trendingPost}</div>
                </div>
            </Container>
        </div>
    );
};

export default Trending;
