import AuthorInfo from "./AuthorInfo";
import MoreFromAuthor from "./MoreFromAuthor";

const USER = {
    id: 1,
    name: "Habib",
    about: "Keynote speaker, marketing strategy consultant, Rutgers U faculty and author of 10 books including KNOWN, Marketing Rebellion, and Belonging to the Brand!",
    email: "user1@gmail.com",
};
export const StorySidebar = () => {
    return (
        <div className="min-h-full h-full  lg:border-l-2 border-gray-200 py-8 px-4 lg:pl-12">
            <AuthorInfo data={USER} />

            <h2 className="text-2xl font-semibold mt-16 my-4">
                {`More from @${USER.name}`}
            </h2>
            <MoreFromAuthor />
            <MoreFromAuthor />
            <MoreFromAuthor />
        </div>
    );
};
