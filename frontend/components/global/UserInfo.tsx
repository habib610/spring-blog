import Image from "next/image";
interface IProps {
    name: string;
    avatar: string;
}
const UserInfo = ({ name, avatar }: IProps) => {
    return (
        <div className="flex items-center my-3">
            <div className=" w-8 h-8 sm:w-10 sm:h-10  mr-2">
                <Image
                    src={avatar}
                    alt="author_profile"
                    className="w-full h-full rounded-full"
                    width={200}
                    height={200}
                />
            </div>
            <h4 className="text-gray-600 text-lg font-semibold">{name}</h4>
        </div>
    );
};

export default UserInfo;
