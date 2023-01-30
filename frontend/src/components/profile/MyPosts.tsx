import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { selectAuth } from "../../redux/features/login/loginSlice";
import {
    getUserAllPosts,
    selectUserPost,
} from "../../redux/features/user-post/userPostSlice";
import Message from "../global/Message";
import HorizontalLoader from "../loader/HorizontalLoader";
import ActionCard from "./ActionCard";

const MyPosts = () => {
    const { content, error, isError, isLoading } =
        useAppSelector(selectUserPost);
    const { user } = useAppSelector(selectAuth);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchPost = async (id: number) => {
            dispatch(getUserAllPosts(id));
        };
        if (user?.id) {
            fetchPost(user.id);
        }
    }, [dispatch, user?.id]);
    let showContent = null;
    if (isLoading) {
        showContent = <HorizontalLoader />;
    }
    if (isLoading && error) {
        showContent = <Message message={error} error={isError} />;
    }
    if (!isLoading && !error && content.length === 0) {
        showContent = <Message message="You don't have any post yet" />;
    }
    if (!isLoading && !error && content.length > 0) {
        showContent = (
            <div>
                {content.map((item) => (
                    <ActionCard
                        onUpdate={() => null}
                        onDelete={() => null}
                        key={item.id}
                        data={item}
                    />
                ))}
            </div>
        );
    }
    return (
        <div className="py-10">
            <h1 className="text-2xl font-semibold text-gray-600">My Story</h1>
            {showContent}
        </div>
    );
};

export default MyPosts;
