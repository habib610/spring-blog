import "jodit/build/jodit.min.css";

import JoditReact from "jodit-react-ts";
import { useState } from "react";
import ErrorMessage from "../global/ErrorMessage";

const config = {
    buttons:
        "bold,underline,strikethrough,eraser,ul,ol,font,fontsize,paragraph,classSpan,lineHeight,superscript,subscript,image,spellcheck,cut,copy,paste,selectall",
};
interface IProps {
    onChange: any;
    defaultValue: string;
    error: string;
}

const StoryEditor = (props: IProps) => {
    const [value, setValue] = useState("");
    return (
        <div>
            <JoditReact
                defaultValue={props.defaultValue}
                onChange={props.onChange}
                config={config}
                // value={props.value}
            />
            {value}

            <ErrorMessage message={props.error} />
            <div dangerouslySetInnerHTML={{ __html: value }}></div>
        </div>
    );
};

export default StoryEditor;
