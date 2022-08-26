import React from "react";
import DocViewer, { DocViewerRenderers }  from "react-doc-viewer";



interface DocViewer{
    paragraphs:string[]
    error: string;
    variants: string[]
}

export const MyDocViewer : React.FC<DocViewer> = () =>{


    return(
        <div>
        </div>
    );
}