import "jodit/build/jodit.min.css";
import * as React from "react";

const JoditReact = React.lazy(() => {
    return import("jodit-react-ts");
});
const config = {
    buttons:
        "bold,underline,strikethrough,eraser,ul,ol,font,fontsize,paragraph,classSpan,lineHeight,superscript,subscript,image,spellcheck,cut,copy,paste,selectall",
};
interface IProps {
    onChange: Function;
}

const StoryEditor = (props: IProps) => {
    const isSSR = typeof window === "undefined";

    return (
        <div>
            {!isSSR && (
                <React.Suspense fallback={<div>Loading...</div>}>
                    <JoditReact
                        onChange={(value) => props.onChange(value)}
                        config={config}
                    />
                </React.Suspense>
            )}
        </div>
    );
};

export default StoryEditor;
