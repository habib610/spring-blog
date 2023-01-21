import Container from "../../components/global/Container";
import AllBlogs from "../../components/home/AllBlogs";
import Hero from "../../components/home/Hero";
import Trending from "../../components/home/Trending";

const Home = () => {
    return (
        <>
            <Hero />
            <Trending />

            <Container>
                <AllBlogs />
            </Container>
        </>
    );
};
export default Home;
