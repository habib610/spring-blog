import Title from "./Title";

const Sidebar = () => {
    return (
        <div className="w-full h-full py-8 px-3 lg:px-3 lg:py-3  ">
            <Title title="Discover More" />
            <CategoryButton />
        </div>
    );
};

export default Sidebar;

const CategoryButton = () => {
    return (
        <div>
            {[
                "Programing",
                "Data Structure",
                "Algorithm",
                "Database",
                "Architecture",
                "Science",
                "Java",
                "JavaScript",
            ].map((item) => (
                <button
                    key={item}
                    className="text-sm rounded-md text-gray-500 px-2 py-1 mt-2 ml-1 bg-transparent outline-none border border-gray-300 hover:cursor-pointer hover:border-blue-500 transition-all hover:text-blue-500"
                >
                    {item}
                </button>
            ))}
        </div>
    );
};
