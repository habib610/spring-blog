import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import { ERR_MSG } from "../../constants/common";
import { TOP_POST_ENDPOINT } from "../../constants/routes";
import { useAppDispatch } from "../../redux/app/hooks";
import { Post } from "../../types/types";
import axios from "../../utils/axiosInstance";

import Container from "../global/Container";
import HorizontalCard from "../global/HorizontalCard";
import Message from "../global/Message";
import Title from "../global/Title";
import HorizontalLoader from "../loader/HorizontalLoader";
const POST = {
    id: 1,
    title: "What You Probably Don’t Know About Your Pastor When He Preaches",
    content:
        "What happens when your preacher preaches? I know…that’s a loaded question. I guess I s hould state it this way: Are you aware of what takes place when the pastor gets up to expound Scriptur",
    imageName:
        "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    addedDate: "2023-01-11T11:21:01.943+00:00",
    category: {
        categoryId: 1,
        categoryTitle: "This Algorithm Category ",
        categoryDescription: "All description goes to Algorithm ",
    },
    users: {
        id: 1,
        name: "Habib",
        about: "I am about of user 14",
        email: "user1@gmail.com",
        password:
            "$2a$10$NrqALmN.VcB5ENQrtiaHZOtaStkKwYhfTGumqJTdeqSa02diasXyO",
        roles: [
            {
                id: 1001,
                name: "ROLE_USER",
            },
        ],
    },
    comments: [
        {
            id: 1,
            content: "Comment 1",
        },
    ],
};

const Trending = () => {
    const dispatch = useAppDispatch();

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
