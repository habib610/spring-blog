import { Inter } from "@next/font/google";
import Hero from "../components/home/Hero";
import Trending from "../components/home/Trending";

import Meta from "../components/meta";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Meta content="Home | HR Books " title="Home | HR Books " />
            <Hero />
            <Trending />
        </>
    );
}
