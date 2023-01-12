import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";
import Navbar from "../components/global/Navbar";
import "../styles/globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
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
