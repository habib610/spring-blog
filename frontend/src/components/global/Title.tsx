interface IProps {
    title: string;
}
const Title = (props: IProps) => {
    return (
        <h2 className="text-gray-600 mb-3 text-2xl md:text-3xl font-semibold">
            {props.title}
        </h2>
    );
};

export default Title;
