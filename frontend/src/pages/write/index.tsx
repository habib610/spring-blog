import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import StoryEditor from "../../components/editor/StoryEditor";
import Button from "../../components/global/Button";
import Container from "../../components/global/Container";
import Input from "../../components/global/Input";
import Message from "../../components/global/Message";
import Title from "../../components/global/Title";
import Upload from "../../components/global/Upload";
import { ERR_MSG, POST_PUBLISHED } from "../../constants/common";
import {
    CATEGORY_ENDPOINT,
    CREATE_POST_ENDPOINT,
    UPLOAD_IMAGE_POST_ENDPOINT,
} from "../../constants/routes";
import { validateStoryUploadForm } from "../../helpers/validateFormData";
import { useAppSelector } from "../../redux/app/hooks";
import { selectAuth } from "../../redux/features/login/loginSlice";
import { Category, StoryForm, StoryFormError } from "../../types/types";
import axios from "../../utils/axiosInstance";

const Write = () => {
    const { user } = useAppSelector(selectAuth);
    const [categoryId, setCategoryId] = useState<null | string | number>(null);
    const [storyImage, setStoryImage] = useState(null);
    const [preview, setPreview] = useState<string>("");

    const [formData, setFormData] = useState<StoryForm>({
        title: "",
        content: "",
    });
    const [formError, setFormError] = useState<StoryFormError>({
        titleError: "",
        contentError: "",
    });

    /* @DESC::  Fetch Category */
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState<Category[] | []>([]);
    const [error, setError] = useState("");

    const [postLoading, setPostLoading] = useState(false);
    const [postError, setPostError] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError("");
            try {
                setLoading(true);
                const res: Category[] = await (
                    await axios.get(CATEGORY_ENDPOINT)
                ).data;
                setCategories(res);
                setLoading(false);
                setError("");
                setCategoryId(res[0].categoryId);
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
        fetchData();
    }, []);

    let showCategories = null;
    if (loading)
        showCategories = (
            <div className="h-16 bg-slate-200 animate-pulse"></div>
        );
    if (!loading && error)
        showCategories = <Message error={true} message={error} />;
    if (!loading && categories.length > 0 && !error)
        showCategories = (
            <select
                onChange={(event) => setCategoryId(event.target.value)}
                className="border border-gray-200 py-2 px-4 w-full outline-none bg-transparent text-gray-700 shadow-none active:border-blue-500 rounded-md"
            >
                {categories.map((cat) => (
                    <option
                        className="text-lg  text-gray-700 shadow-none"
                        key={cat.categoryId}
                        value={cat.categoryId}
                    >
                        {cat.categoryTitle}
                    </option>
                ))}
            </select>
        );
    if (!loading && categories.length === 0 && !error)
        showCategories = <Message message={"Categories not available"} />;

    /* @DESC::  handle post */
    /* @DESC::  handling userLogin */
    const handlePublishPost = async (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        e.preventDefault();

        const getValidData = validateStoryUploadForm(formData);
        setFormError(getValidData);

        if (Object.keys(getValidData).length === 0) {
            try {
                setPostError("");
                setPostLoading(true);
                const res = await axios.post(
                    `${CREATE_POST_ENDPOINT}/${user?.id}/category/${categoryId}/posts`,

                    JSON.stringify({
                        title: formData.title,
                        content: formData.content,
                        imageName: "default.jpg",
                    })
                );

                const data = await res.data;

                /* @DESC::  Update with image */
                if (data?.id && storyImage !== null) {
                    let form = new FormData();
                    form.append("image", storyImage);

                    await axios.post(
                        `${UPLOAD_IMAGE_POST_ENDPOINT}/${data.id}`,

                        form,
                        {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        }
                    );
                }
                toast.success(POST_PUBLISHED);
                setFormData({ content: "", title: "" });
                setStoryImage(null);
                setPostError("");
                setPostLoading(false);
                setPreview("");
            } catch (error: any) {
                console.log(error);
                const errorMsg =
                    typeof error === "string"
                        ? error
                        : error?.message
                        ? error?.message
                        : ERR_MSG;
                setPostError("");
                setPostLoading(false);
                toast.error(errorMsg);
            }
        }
    };

    const buttonDisabled =
        loading || postLoading || !formData.title || !formData.content;
    return (
        <Container>
            <div className="flex w-full justify-center">
                <div className="h-full pt-24 lg:w-8/12 ">
                    <div className="border-b-2  mb-16">
                        <Title title="Write your own story" />
                    </div>
                    <div className="mt-4">
                        <h2 className="text-black mb-1">Story Image</h2>
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
                                setFormData({
                                    ...formData,
                                    title: e.target.value,
                                })
                            }
                            message={formError.titleError}
                            placeholder="Enter Your Story Title"
                            value={formData.title}
                        />
                    </div>
                    <div className="mt-4">
                        <h2 className="text-black mb-1">Write your Stories</h2>
                        <div className="border border-gray-200 ">
                            <StoryEditor
                                onChange={(value: any) =>
                                    setFormData({
                                        ...formData,
                                        content: value,
                                    })
                                }
                                defaultValue={formData.content}
                                error={formError.contentError}
                            />
                        </div>
                    </div>

                    <div className="mt-4 lg:w-8/12">
                        <h2 className="text-black mb-1">Select Categories</h2>
                        {showCategories}
                    </div>

                    <div className="pt-4 w-12/12 sm:w-6/12 mt-6 ">
                        <Button
                            title="Publish"
                            disabled={buttonDisabled}
                            loading={postLoading}
                            onClick={handlePublishPost}
                            className="flex items-center justify-center px-8 py-1 border border-black text-md
                    outline-none mt-2 transition-all  hover:shadow-sm active:shadow-md
                    hover:border-black rounded-full hover:bg-black hover:text-white font-semibold w-full shadow-none bg-transparent
                     text-gray-600 disabled:cursor-not-allowed"
                        />
                        {/* Publish
                        </Button> */}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Write;
