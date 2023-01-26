import ReactPaginate from "react-paginate";

const Pagination = ({
    onClick,
    pageCount,
    lastPage,
    firstPage,
}: {
    onClick: any;
    pageCount: number;
    lastPage?: boolean;
    firstPage?: boolean;
}) => {
    return (
        <div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next"
                onPageChange={onClick}
                pageRangeDisplayed={4}
                pageCount={pageCount}
                previousLabel="prev"
                activeClassName="bg-gray-700 font-bold text-white px-4 py-2"
                nextLinkClassName={
                    lastPage
                        ? "text-gray-300 hover:cursor-not-allowed"
                        : "text-gray-600"
                }
                nextClassName={
                    lastPage
                        ? "text-gray-300 hover:cursor-not-allowed"
                        : "text-gray-600"
                }
                previousClassName={
                    firstPage
                        ? "text-gray-300 hover:cursor-not-allowed"
                        : "text-gray-600"
                }
                previousLinkClassName={
                    firstPage
                        ? "text-gray-300 hover:cursor-not-allowed"
                        : "text-gray-600"
                }
                containerClassName=" border border-gray-100 w-auto gap-2 shadow-sm flex  items-center px-4 rounded mt-10  text-gray-500"
                pageClassName="px-4 py-2 border  rounded"
                // renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default Pagination;
