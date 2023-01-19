import "jodit/build/jodit.min.css";

import JoditReact from "jodit-react-ts";

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
            <JoditReact
                onChange={(value) => props.onChange(value)}
                config={config}
            />
        </div>
    );
};

export default StoryEditor;
