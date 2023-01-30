import { FC } from "react";

type Props = {
    children?: JSX.Element | JSX.Element[];
    className?: string;
};
const Container: FC<Props> = ({ children, className = " py-8 " }) => {
    return (
        <div
            className={" px-4 md:px-8  sm:container mx-auto " + " " + className}
        >
            {children}
        </div>
    );
};

export default Container;
