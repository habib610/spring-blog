import { useEffect, useState } from "react";
import { SiOpenbadges } from "react-icons/si";
import { useParams } from "react-router-dom";
import Container from "../../components/global/Container";
import Message from "../../components/global/Message";
import Sidebar from "../../components/global/Sidebar";
import HorizontalLoader from "../../components/loader/HorizontalLoader";
import RecommendedCard from "../../components/story/RecommendedCard";
import { ERR_MSG } from "../../constants/common";
import { GET_POST_BY_CATEGORY_ENDPOINT } from "../../constants/routes";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import {
    selectCategory,
    updateActiveCategory,
} from "../../redux/features/categories/categorySlice";
import { Post } from "../../types/types";
import axios from "../../utils/axiosInstance";
const Category = () => {
    const [postByCategory, setPostByCategory] = useState<Post[] | []>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const { catId } = useParams();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(updateActiveCategory(catId));
        console.log(catId);
    }, [catId, dispatch]);

    const { activeCategory } = useAppSelector(selectCategory);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                setIsLoading(false);
                setError("");
                const res = await (
                    await axios.get(
                        `${GET_POST_BY_CATEGORY_ENDPOINT}/${catId}/posts`
                    )
                ).data;
                setPostByCategory(res);
                setIsLoading(false);
                setIsLoading(false);
                setError("");
            } catch (error: any) {
                setIsLoading(false);
                setIsLoading(false);

                setError(
                    typeof error === "string"
                        ? error
                        : error?.message
                        ? error?.message
                        : ERR_MSG
                );
            }
        };

        if (Number(catId)) {
            fetchData();
        } else {
            setError("No Post Found");
        }
    }, [catId]);

    let showCategorisedPost = null;
    if (isLoading) {
        showCategorisedPost = <HorizontalLoader />;
    }
    if (!isLoading && error) {
        showCategorisedPost = <Message message={error} error={true} />;
    }
    if (!isLoading && !error && postByCategory.length === 0) {
        showCategorisedPost = <Message message="No Post Found" />;
    }
    if (!isLoading && !error && postByCategory.length > 0) {
        showCategorisedPost = (
            <div>
                {postByCategory.map((item) => (
                    <RecommendedCard key={item.id} data={item} />
                ))}
            </div>
        );
    }
    return (
        <Container>
            <div className="h-full pt-24 ">
                <div className="flex flex-col-reverse lg:flex-row ">
                    <div className="lg:w-3/4 py-8 px-3 lg:px-3 lg:py-3">
                        <div className="flex font-extrabold items-center gap-5 text-3xl text-gray-600 capitalize pb-9 border-b border-gray-200 mb-9">
                            <SiOpenbadges />

                            <h1>{activeCategory}</h1>
                        </div>

                        <div>{showCategorisedPost}</div>
                    </div>
                    <div className="w-full lg:w-1/4 h-full py-8 px-3 lg:px-3 lg:py-3 ">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Category;
