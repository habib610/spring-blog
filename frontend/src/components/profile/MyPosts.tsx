import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ERR_MSG } from "../../constants/common";
import {
    BLOG_IMAGE_ENDPOINT,
    DELETE_POST_ENDPOINT,
    UPDATE_POST_ENDPOINT,
    UPLOAD_IMAGE_POST_ENDPOINT,
} from "../../constants/routes";
import { validateStoryUploadForm } from "../../helpers/validateFormData";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import {
    getCategory,
    selectCategory,
} from "../../redux/features/categories/categorySlice";
import { selectAuth } from "../../redux/features/login/loginSlice";
import {
    deleteAPost,
    getUserAllPosts,
    selectUserPost,
    updateUserPost,
} from "../../redux/features/user-post/userPostSlice";
import { Post, StoryFormError } from "../../types/types";
import axios from "../../utils/axiosInstance";
import StoryEditor from "../editor/StoryEditor";
import Button from "../global/Button";
import Input from "../global/Input";
import Message from "../global/Message";
import Modal from "../global/Modal";
import Upload from "../global/Upload";
import HorizontalLoader from "../loader/HorizontalLoader";
import ActionCard from "./ActionCard";

const MyPosts = () => {
    const { content, error, isError, isLoading } =
        useAppSelector(selectUserPost);
    const {
        categories,
        error: catError,

        isLoading: isCatLoading,
    } = useAppSelector(selectCategory);

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

    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch]);

    /* @DESC:: Modal  */
    const [deletePostData, setDeletePostData] = useState<any>(null);
    const [updatePostData, setUpdatePostData] = useState<any>(null);
    /* @DESC::  Update post modal */
    const [updateLoading, setUpdateLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [editorContent, setEditorContent] = useState("");

    const [formError, setFormError] = useState<StoryFormError>({
        titleError: "",
        contentError: "",
    });
    const [categoryId, setCategoryId] = useState<null | string | number>(null);
    const [storyImage, setStoryImage] = useState(null);
    const [preview, setPreview] = useState<string>("");

    const handleUpdate = (data: Post) => {
        setUpdatePostData(data);
        setCategoryId(data.category.categoryId);
        setPreview(BLOG_IMAGE_ENDPOINT + data.imageName);
        setTitle(data.title);
        setEditorContent(data.content);
    };

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
                        onUpdate={handleUpdate}
                        onDelete={(id: number) => setDeletePostData(id)}
                        key={item.id}
                        data={item}
                    />
                ))}
            </div>
        );
    }
    /* @DESC::  Delate functionalities */
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

    const handleUpdatePost = async () => {
        const getValidData = validateStoryUploadForm({
            content: editorContent,
            title,
        });
        setFormError(getValidData);

        if (Object.keys(getValidData).length === 0) {
            try {
                setUpdateLoading(true);
                let reqData: any = {
                    title: title,
                    content: editorContent,
                    category: {
                        categoryId: categoryId,
                    },
                };
                if (storyImage === null && preview !== "") {
                    reqData.imageName = updatePostData.imageName;
                }
                if (storyImage !== null && preview) {
                    let form = new FormData();
                    form.append("image", storyImage);

                    await axios.post(
                        `${UPLOAD_IMAGE_POST_ENDPOINT}/${updatePostData.id}`,

                        form,
                        {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        }
                    );
                } else if (storyImage === null && preview === "") {
                    reqData.imageName = "default.jpg";
                }
                let res = await (
                    await axios.put(
                        `${UPDATE_POST_ENDPOINT}/${updatePostData.id}`,
                        JSON.stringify(reqData)
                    )
                ).data;

                toast.success("Post has been Updated");
                dispatch(updateUserPost({ data: res }));

                setUpdateLoading(false);
                setUpdatePostData(null);
            } catch (error: any) {
                setUpdateLoading(false);
                toast.error(
                    typeof error === "string"
                        ? error
                        : error?.message
                        ? error?.message
                        : ERR_MSG
                );
                setUpdatePostData(null);
            }
        }
    };
    let showCategories = null;
    if (isCatLoading)
        showCategories = (
            <div className="h-16 bg-slate-200 animate-pulse"></div>
        );
    if (!isCatLoading && catError)
        showCategories = <Message error={true} message={catError} />;
    if (!isCatLoading && categories.length > 0 && !error)
        showCategories = (
            <select
                onChange={(event) => setCategoryId(event.target.value)}
                className="border border-gray-200 py-2 px-4 w-full outline-none bg-transparent text-gray-700 shadow-none active:border-blue-500 rounded-md"
            >
                {categories.map((cat) => (
                    <option
                        selected={cat.categoryId === Number(categoryId)}
                        className="text-lg  text-gray-700 shadow-none"
                        key={cat.categoryId}
                        value={cat.categoryId}
                    >
                        {cat.categoryTitle}
                    </option>
                ))}
            </select>
        );
    if (!isCatLoading && categories.length === 0 && !catError)
        showCategories = <Message message={"Categories not available"} />;

    const buttonDisabled =
        isCatLoading || isCatLoading || !title || !editorContent;
    return (
        <div className="py-10">
            <h1 className="text-2xl font-semibold text-gray-600">My Story</h1>
            {showContent}

            {/* Delete post */}
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

            {/* Update Post  */}
            <Modal isOpen={updatePostData}>
                <div className="flex items-center justify-center h-full  ">
                    <div className=" bg-white p-4 lg:w-4/5 xl:w-3/5 rounded-lg">
                        <h1 className="text-xl font-semibold mb-6 text-center text-gray-600">
                            Update Post
                        </h1>

                        {/* Update Content  */}

                        <div className="flex w-full justify-center">
                            <div className="h-[65vh] w-full px-4 overflow-y-auto">
                                <div className="mt-4">
                                    <h2 className="text-black mb-1">
                                        Story Image
                                    </h2>
                                    <Upload
                                        onChange={setStoryImage}
                                        preview={preview}
                                        setPreview={setPreview}
                                    />
                                </div>
                                <div className="lg:w-8/12">
                                    <Input
                                        label="Story Title"
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        message={formError.titleError}
                                        placeholder="Enter Your Story Title"
                                        value={title}
                                    />
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-black mb-1">
                                        Write your Stories
                                    </h2>
                                    <div className="border border-gray-200 ">
                                        <StoryEditor
                                            onChange={(value: any) =>
                                                setEditorContent(value)
                                            }
                                            defaultValue={editorContent}
                                            error={formError.contentError}
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 lg:w-8/12">
                                    <h2 className="text-black mb-1">
                                        Select Categories
                                    </h2>
                                    {showCategories}
                                </div>
                            </div>
                        </div>

                        {/* Button actions */}
                        <div className="flex items-center justify-center gap-5">
                            <Button
                                title="Update"
                                bg="bg-blue-500 "
                                className="w-2/6"
                                onClick={handleUpdatePost}
                                disabled={updateLoading || buttonDisabled}
                                loading={updateLoading}
                            />

                            <Button
                                title="Cancel"
                                bg="bg-gray-500 "
                                className="w-2/6"
                                onClick={() => setUpdatePostData(null)}
                                disabled={updateLoading}
                            />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default MyPosts;
