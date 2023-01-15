import Container from "../../components/global/Container";
import Title from "../../components/global/Title";
import RecommendedCard from "../../components/story/RecommendedCard";
import { POST } from "../story/[id]";

const Category = () => {
    return (
        <Container>
            <div className="pt-24 md:w-9/12">
                <div className="border-b-2 border-gray-400  mb-16">
                    <Title title={`Results for Category: `} />
                </div>
                <div className="pt-18">
                    <RecommendedCard data={POST} />
                </div>
            </div>
        </Container>
    );
};

export default Category;
