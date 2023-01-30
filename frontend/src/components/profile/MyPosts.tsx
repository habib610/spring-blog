import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ERR_MSG } from "../../constants/common";
import { DELETE_POST_ENDPOINT } from "../../constants/routes";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { selectAuth } from "../../redux/features/login/loginSlice";
import {
    deleteAPost,
    getUserAllPosts,
    selectUserPost,
} from "../../redux/features/user-post/userPostSlice";
import axios from "../../utils/axiosInstance";
import Button from "../global/Button";
import Message from "../global/Message";
import Modal from "../global/Modal";
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

    /* @DESC:: Modal  */

    const [deletePostData, setDeletePostData] = useState<any>(null);

    let showContent = null;
    if (isLoading) {
        showContent = <HorizontalLoader />;
    }
    if (!isLoading && error) {
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
                        onDelete={(id: number) => setDeletePostData(id)}
                        key={item.id}
                        data={item}
                    />
                ))}
            </div>
        );
    }

    const [deleteLoading, setDeleteLoading] = useState(false);

    const handleDeletePost = async () => {
        try {
            setDeleteLoading(true);
            let res = await (
                await axios.delete(`${DELETE_POST_ENDPOINT}/${deletePostData}`)
            ).data;
            if (res?.message) {
                toast.success(res.message);
            } else {
                toast.success("Post has been deleted");
            }
            dispatch(deleteAPost({ id: deletePostData }));

            setDeleteLoading(false);
            setDeletePostData(null);
        } catch (error: any) {
            setDeleteLoading(false);
            toast.error(
                typeof error === "string"
                    ? error
                    : error?.message
                    ? error?.message
                    : ERR_MSG
            );
            setDeletePostData(null);
        }
    };

    return (
        <div className="py-10">
            <h1 className="text-2xl font-semibold text-gray-600">My Story</h1>
            {showContent}
            <Modal isOpen={deletePostData}>
                <div className="flex items-center justify-center h-full  ">
                    <div className=" bg-white p-4 md:w-2/5 rounded-lg">
                        <h1 className="text-xl font-semibold mb-6 text-center text-gray-600">
                            Are you sure?
                        </h1>

                        <div className="flex items-center justify-center gap-5">
                            <Button
                                title="No"
                                bg="bg-green-500 "
                                className="w-2/6"
                                onClick={() => setDeletePostData(false)}
                                disabled={deleteLoading}
                                loading={deleteLoading}
                            />
                            <Button
                                title="Yes"
                                bg="bg-rose-500 "
                                className="w-2/6"
                                onClick={handleDeletePost}
                                disabled={deleteLoading}
                                loading={deleteLoading}
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default MyPosts;
