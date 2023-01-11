import Head from "next/head";
import { FC } from "react";

interface IProps {
    title?: string;
    content?: string;
}
const defaultProps: IProps = {
    title: "HR Books | Full Stack Blog Application",
    content:
        "HR Books is a personal fullstack blog application created with Spring boot and Next.js",
};
const Meta: FC<IProps> = (props) => {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.content} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.svg" />
        </Head>
    );
};

export default Meta;
