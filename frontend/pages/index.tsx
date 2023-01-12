import { FC } from "react";
import Container from "../components/global/Container";
import AllBlogs from "../components/home/AllBlogs";
import Hero from "../components/home/Hero";
import Trending from "../components/home/Trending";
import Meta from "../components/meta";

const Home: FC = () => {
    return (
        <>
            <Meta content="Home | HR Books" title="Home | HR Books " />
            <Hero />
            <Trending />

            <Container>
                <AllBlogs />
                {/* Medium Sidebar  */}
                {/* Latest blog */}
                {/* Sidebar  */}
            </Container>
        </>
    );
};
export default Home;
