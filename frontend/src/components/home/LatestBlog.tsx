import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import {
    getLatestStory,
    selectLatest,
} from "../../redux/features/latest/latestSlice";
import {
    changePageNumber,
    selectPaginate,
} from "../../redux/features/paginate/paginateSlice";
import Message from "../global/Message";
import Pagination from "../global/Pagination";
import Title from "../global/Title";
import VerticalCard from "../global/VerticalCard";
import VerticalLoader from "../loader/VerticalCard";

const LatestBlog = () => {
    const dispatch = useAppDispatch();
    const {
        isLoading: paginateLoading,
        firstPage,
        lastPage,
        pageNumber,
        totalElements,
        pageSize,
    } = useAppSelector(selectPaginate);
    const { isLoading, content, error, isError } = useAppSelector(selectLatest);

    useEffect(() => {
        let data = {
            pageNumber: pageNumber,
            pageSize: pageSize,
        };
        dispatch(getLatestStory(data));
    }, [dispatch, pageNumber, pageSize]);

    let showContent = null;

    /* @DESC::  Show Loader */
    if (isLoading) {
        showContent = (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 mt-4">
                {[1, 2, 3, 4].map((item) => (
                    <VerticalLoader key={item} />
                ))}
            </div>
        );
    }
    /* @DESC::  Show Error */
    if (!isLoading && isError && error) {
        showContent = <Message error={isError} message={error} />;
    }
    /* @DESC::  Show Content */
    if (!isLoading && !isError && content.length > 0) {
        showContent = (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 mt-4">
                {content.map((item) => (
                    <VerticalCard key={item.id} data={item} />
                ))}
            </div>
        );
    }
    /* @DESC::  Show No Content */
    if (!isLoading && !isError && content.length === 0) {
        showContent = <Message error message={"No Stories Available"} />;
    }

    /* @DESC::  Pagination Logic */

    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
        dispatch(changePageNumber(event.selected));
    };
    const pageCount = Math.ceil(totalElements / 4);

    return (
        <div>
            <Title title="Latest Stories" />
            {showContent}
            <Pagination
                pageCount={pageCount}
                firstPage={firstPage}
                lastPage={lastPage}
                onClick={handlePageClick}
            />
        </div>
    );
};

export default LatestBlog;
