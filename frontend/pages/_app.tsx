import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Navbar from "../components/global/Navbar";
import "../styles/globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        setIsSSR(false);
    }, []);

    if (isSSR) return null;
    return (
        <div className={`${inter.variable} font-sans`}>
            <header>
                <Navbar />
            </header>
            <div className="min-h-screen flex flex-col">
                <main className="flex-1">
                    <Component {...pageProps} />
                </main>
                <footer>footer</footer>
            </div>
        </div>
    );
}
