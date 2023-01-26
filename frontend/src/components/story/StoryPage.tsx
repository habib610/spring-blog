import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ERR_MSG } from "../../constants/common";
import { PRIMARY } from "../../constants/theme";
import { Post } from "../../types/types";
import axios from "../../utils/axiosInstance";

import moment from "moment";
import {
    ALL_POST_ENDPOINT,
    BLOG_IMAGE_ENDPOINT,
    RELATED_POST_BY_CATEGORY_ENDPOINT,
} from "../../constants/routes";
import Avatar from "../global/Avatar";
import Button from "../global/Button";
import CategoryBtn from "../global/CategoryBtn";
import Comment from "../global/Comment";
import Container from "../global/Container";
import Message from "../global/Message";
import HorizontalLoader from "../loader/HorizontalLoader";
import RecommendedCard from "./RecommendedCard";

const StoryPage = () => {
    /* @DESC::  Main Content State */
    const [data, setData] = useState<Post | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    /* @DESC::  Related Content State */
    const [related, setRelated] = useState<Post[] | []>([]);
    const [relatedLoading, setRelatedLoading] = useState(false);

    const { id } = useParams();

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

    /* @DESC::  ADD Comment */
    const [comment, setComment] = useState("");

    const postUserComment = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        let newComment = {
            content: "I am using new Comment",
            id: 165,
            userId: 2,
            userName: "Habib",
        };
        if (data?.comments) {
            let tempObj = {
                ...data,
            };
            tempObj.comments = [newComment, ...tempObj.comments];

            setData(tempObj);
            // @TODO ==>   comment api integration Fri, Jan  27
        }
    };

    // Main Content
    let showContent = null;
    if (loading) {
        showContent = <ShowLoader />;
    }

    if (!loading && error) {
        showContent = <Message message={error} error={true} />;
    }

    if (!loading && !error && data !== null) {
        showContent = (
            <div>
                <div className=" flex justify-between items-end border-b-2 border-gray-400  pb-4 mb-8">
                    <div className="flex items-center ">
                        <div className=" mr-3 ">
                            <Avatar
                                size="h-16 w-16 md:h-16 md:w-16 bg-rose-700"
                                name={data.title}
                                textSize=" text-2xl  lg:text-4xl"
                            />
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold  text-gray-500">
                                @{data.users.name}
                            </h3>
                            {/* Todo: Change to published Date */}
                            <p className="text-gray-400  text-sm ">
                                Published:{" "}
                                <span className="font-semibold">
                                    {moment(data.addedDate).format(
                                        "DD MMM, YY"
                                    )}
                                </span>
                            </p>
                        </div>
                    </div>
                    <CategoryBtn
                        color={PRIMARY}
                        name={data.category.categoryTitle}
                    />
                </div>

                <h1 className="font-bold text-xl sm:text-2xl md:text-3xl mt-4 mb-8">
                    {data.title}
                </h1>
                <div className="w-full bg-gray-500">
                    <img
                        src={BLOG_IMAGE_ENDPOINT + data.imageName}
                        alt={data.title}
                        className="object-cover w-full h-[55vh]"
                    />
                </div>

                <div className="pb-12 ">
                    <p className="text-xl leading-10 font-normal text-gray-600 mt-8">
                        {data.content}
                    </p>
                </div>
                {/* Comment Box */}
                <div className="bg-gray-100 p-8">
                    <div className=" w-4/4 sm:w-3/4 ">
                        <div className="h-[100px]  ">
                            <textarea
                                placeholder="Write your opinion"
                                className="w-full h-full outline-none rounded-md  shadow-sm border-2 border-gray-200 px-2 py-3  appearance-none focus-within:border-blue-600"
                            />
                        </div>
                        <Button
                            className="bg-transparent hover:text-white transition-all py-1 px-3 rounded-full my-3 w-6/6  sm:w-2/6 shadow-none text-black"
                            title="Comment"
                            onClick={postUserComment}
                            bg="  hover:bg-gray-700 border border-gray-700 "
                        />
                    </div>
                </div>

                {/* Comments */}
                <div className="my-8 border-b border-gray-300">
                    <h2 className="text-xl bl-2 font-semibold">Comments</h2>
                    <div className="ml-8 mt-4">
                        <div>
                            {data.comments.length > 0 ? (
                                data.comments.map((item) => (
                                    <Comment
                                        key={item.id}
                                        content={item.content}
                                        name={data.users.name}
                                    />
                                ))
                            ) : (
                                <Message message="No comments yet" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    /* @DESC::  Show Related POST API Call*/
    useEffect(() => {
        const fetchRelated = async () => {
            if (data?.category?.categoryId) {
                try {
                    setRelatedLoading(true);
                    const fullStory = await (
                        await axios.get(
                            `${RELATED_POST_BY_CATEGORY_ENDPOINT}/${data?.category?.categoryId}/posts`
                        )
                    ).data;
                    setRelated(fullStory.slice(0, 4));
                    setRelatedLoading(false);
                } catch (error: any) {
                    setRelatedLoading(false);
                }
            }
        };

        fetchRelated();
    }, [data?.category?.categoryId]);

    let showRelatedContent = null;
    if (relatedLoading) {
        showRelatedContent = <HorizontalLoader />;
    }
    if (!relatedLoading && related.length > 0) {
        showRelatedContent = (
            <div>
                {related.map((item) => (
                    <RecommendedCard key={item.id} data={item} />
                ))}
            </div>
        );
    }
    if (!relatedLoading && related.length === 0) {
        showContent = (
            <Message error={false} message="No recommendation available " />
        );
    }

    return (
        <Container>
            <div className="mx-auto lg:w-10/12">
                <div className="min-h-screen pt-24 ">
                    <div>{showContent}</div>

                    <h1 className="text-2xl font-semibold mt-16 my-4">
                        Recommended For You
                    </h1>
                    {showRelatedContent}
                </div>
            </div>
        </Container>
    );
};

export default StoryPage;

const ShowLoader = () => {
    return (
        <div>
            <div className="flex items-center ">
                <div className="h-16 w-16 md:h-16 md:w-16 rounded-full mr-3  bg-slate-200 animate-pulse"></div>
                <div>
                    <div className=" bg-slate-200 animate-pulse text-xl font-semibold  text-gray-500 h-8"></div>
                    {/* Todo: Change to published Date */}
                    <p className=" h-6  text-sm  bg-slate-200 animate-pulse w-full"></p>
                </div>
            </div>
            <div className="   w-full h-[55vh] bg-slate-200 animate-pulse mt-4 "></div>

            <div>
                <div className="bg-slate-200 h-8 animate-pulse mt-4 "></div>
                <div className="bg-slate-200 h-4 animate-pulse mt-4 "></div>
                <div className="bg-slate-200 h-10 animate-pulse mt-4 "></div>
            </div>
        </div>
    );
};
