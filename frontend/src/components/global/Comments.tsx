import Avatar from "./Avatar";

interface IComment {
    name?: string;
    content: string;
}
const Comments = ({ name, content }: IComment) => {
    return (
        <div className="flex items-start mb-6">
            <div className=" bg-gray-700 rounded-full text-lg font-bold text-white mr-3 flex items-center justify-center">
                <Avatar name={name} size="w-8 h-8" />
            </div>
            <div>
                <p className="text-sm text-gray-500  font-semibold">@{name}</p>
                <p className="text-sm text-gray-500 mt-2 ">{content}</p>
            </div>
        </div>
    );
};

export default Comments;
