interface IProps {
    name?: string;
    color?: string;
}
const CategoryBtn = ({ name, color }: IProps) => {
    return (
        <div className="flex">
            <div
                className="bg-gray-50 px-3 py-1 rounded-full mt-2 mr-2 font-semibold text-xs border border-r-gray-100"
                style={{ color: color }}
            >
                {name}
            </div>
        </div>
    );
};

export default CategoryBtn;
