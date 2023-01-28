import { useEffect, useState } from "react";
import { ERR_MSG } from "../../constants/common";
import { GET_SIMILAR_USER_POST_ENDPOINT } from "../../constants/routes";
import { Post } from "../../types/types";
import axios from "../../utils/axiosInstance";
import Message from "../global/Message";
import HorizontalLoader from "../loader/HorizontalLoader";
import AuthorInfo from "./AuthorInfo";
import MoreFromAuthor from "./MoreFromAuthor";

const USER = {
    id: 1,
    name: "Habib",
    about: "Keynote speaker, marketing strategy consultant, Rutgers U faculty and author of 10 books including KNOWN, Marketing Rebellion, and Belonging to the Brand!",
    email: "user1@gmail.com",
};
interface IProps {
    data: Post | null;
    // loading: boolean;
    // error: string;
    // setData: Function;
    // user: User | null;
}
export const StorySidebar = ({ data: user }: IProps) => {
    const [loading, setLoading] = useState(false);
    const [more, setMore] = useState<Post[] | []>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError("");
            try {
                setLoading(true);
                const stories = await (
                    await axios.get(
                        `${GET_SIMILAR_USER_POST_ENDPOINT}/${user?.users.id}/posts`
                    )
                ).data;
                setMore(stories.slice(0, 4));
                setLoading(false);
                setError("");
            } catch (error: any) {
                setError(
                    typeof error === "string"
                        ? error
                        : error?.message
                        ? error?.message
                        : ERR_MSG
                );
                setLoading(false);
            }
        };

        if (user?.users) {
            fetchData();
        }
    }, [user?.users]);

    let showContent = null;
    let showUserInfo = null;
    if (user?.users) {
        showUserInfo = (
            <>
                <AuthorInfo data={user?.users} />
                <h2 className="text-2xl font-semibold mt-16 my-4">
                    {`More from @${user?.users.name}`}
                </h2>
            </>
        );
    }

    if (loading) {
        showContent = <HorizontalLoader />;
    }
    if (loading && error) {
        showContent = <Message message={error} error={true} />;
    }
    if (!loading && more.length > 0) {
        showContent = (
            <div>
                {more.map((item) => (
                    <MoreFromAuthor key={item.id} data={item} />
                ))}
            </div>
        );
    }

    if (!loading && more.length === 0) {
        showContent = (
            <Message error={false} message="No recommendation available " />
        );
    }
    return (
        <div className="min-h-full h-full  lg:border-l-2 border-gray-200 py-8 px-4 lg:pl-12">
            {showUserInfo}

            {showContent}
        </div>
    );
};
