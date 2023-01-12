import { BsUpload } from "react-icons/bs";
import Container from "../../components/global/Container";
import Title from "../../components/global/Title";
const Write = () => {
    return (
        <Container>
            <div className="  h-full pt-24 ">
                <div className="border-b-2  mb-16">
                    <Title title="Write your own story" />
                </div>
                <div className="pt-4">
                    <h2>Select Image</h2>
                    <button
                        className="flex items-center justify-center px-4 py-1 border border-gray-200 rounded-lg text-md
                    outline-none mt-2 transition-all hover:text-blue-700 hover:shadow-sm active:shadow-md
                    hover:border-blue-500 "
                    >
                        Upload <BsUpload className="ml-4" />
                    </button>
                </div>
                <div className="pt-4">
                    <h2>Write your Stories</h2>
                    <button
                        className="flex items-center justify-center px-4 py-1 border border-gray-200 rounded-lg text-md
                    outline-none mt-2 transition-all hover:text-blue-700 hover:shadow-sm active:shadow-md
                    hover:border-blue-500 "
                    >
                        Upload <BsUpload className="ml-4" />
                    </button>
                </div>
                <div className="pt-4">
                    <button
                        className="flex items-center justify-center px-8 py-1 border border-gray-200  text-md
                    outline-none mt-2 transition-all  hover:shadow-sm active:shadow-md
                    hover:border-black rounded-full hover:bg-black hover:text-white font-semibold"
                    >
                        Publish
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default Write;
// pt-24 md:w-9/12
