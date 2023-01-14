import { useState } from "react";
import StoryEditor from "../../components/editor/StoryEditor";
import Container from "../../components/global/Container";
import Input from "../../components/global/Input";
import Title from "../../components/global/Title";
import Upload from "../../components/global/Upload";
type CategoryItem = {
    name: string;
    id: number;
};
const categories: CategoryItem[] = [
    {
        name: "Programming",
        id: 1,
    },
    {
        name: "DATABASE",
        id: 2,
    },
    {
        name: "React",
        id: 3,
    },
];
const Write = () => {
    const [storyValue, setStoryValue] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    return (
        <Container>
            <div className="flex w-full justify-center">
                <div className="  h-full pt-24 lg:w-8/12 ">
                    <div className="border-b-2  mb-16">
                        <Title title="Write your own story" />
                    </div>
                    <div className="mt-4">
                        <h2 className="text-black mb-1">Story Image</h2>
                        <Upload />
                    </div>
                    <div className="lg:w-8/12">
                        <Input
                            label="Story Title"
                            onChange={(e) => setTitle(e.target.value)}
                            message="Error Message"
                            placeholder="Enter Your Story Title"
                            value={title}
                        />
                    </div>
                    <div className="mt-4">
                        <h2 className="text-black mb-1">Write your Stories</h2>
                        <div className="border border-gray-200 ">
                            <StoryEditor onChange={setStoryValue} />
                        </div>
                    </div>

                    <div className="mt-4 lg:w-8/12">
                        <h2 className="text-black mb-1">Select Categories</h2>
                        <select className="border border-gray-200 py-2 px-4 w-full outline-none bg-transparent text-gray-700 shadow-none active:border-blue-500 rounded-md">
                            {categories.map((cat) => (
                                <option
                                    className="text-lg  text-gray-700 shadow-none"
                                    key={cat.id}
                                >
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="pt-4 w-12/12 sm:w-6/12 mt-6 ">
                        <button
                            className="flex items-center justify-center px-8 py-1 border border-black text-md
                    outline-none mt-2 transition-all  hover:shadow-sm active:shadow-md
                    hover:border-black rounded-full hover:bg-black hover:text-white font-semibold w-full"
                        >
                            Publish
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Write;
