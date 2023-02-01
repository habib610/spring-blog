import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import {
    getUserAllPosts,
    selectUserPost,
} from "../../redux/features/user-post/userPostSlice";
import { Post } from "../../types/types";
import Message from "../global/Message";
import HorizontalLoader from "../loader/HorizontalLoader";
import AuthorInfo from "./AuthorInfo";
import MoreFromAuthor from "./MoreFromAuthor";

interface IProps {
    data: Post | null;
}
export const StorySidebar = ({ data: user }: IProps) => {
    const id = useParams();

    const { content, error, isError, isLoading } =
        useAppSelector(selectUserPost);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (user?.users.id) {
            dispatch(getUserAllPosts(user.users.id));
        }
    }, [dispatch, user?.users]);

    let showContent = null;
    let showUserInfo = null;
    if (user?.users) {
        showUserInfo = (
            <>
                <AuthorInfo data={user?.users} />
                <h2 className="text-2xl font-semibold mt-16 my-4">
                    <span className="text-gray-600">More from </span>
                    <span>{`@${user?.users.name}`}</span>
                </h2>
            </>
        );
    }

    if (isLoading) {
        showContent = <HorizontalLoader />;
    }
    if (isLoading && error) {
        showContent = <Message message={error} error={isError} />;
    }
    if (!isLoading && content.length > 0) {
        showContent = (
            <div>
                {content
                    .filter((item) => item.id !== Number(id))
                    .slice(0, 4)
                    .map((item) => (
                        <MoreFromAuthor key={item.id} data={item} />
                    ))}
            </div>
        );
    }

    if (!isLoading && content.length === 0) {
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
