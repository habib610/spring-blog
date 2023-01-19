import Sidebar from "../global/Sidebar";
import LatestBlog from "./LatestBlog";

const AllBlogs = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row">
            <div className="lg:w-3/4 py-8 px-3 lg:px-3 lg:py-3">
                <LatestBlog />
            </div>
            <div className="w-full lg:w-1/4 h-full py-8 px-3 lg:px-3 lg:py-3">
                <Sidebar />
            </div>
        </div>
    );
};

export default AllBlogs;
