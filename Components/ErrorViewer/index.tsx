import React, { useState } from "react";
import DocViewer, { DocViewerRenderers }  from "react-doc-viewer";
import styles from "./error.module.css"
import 'antd/dist/antd.css';


interface ErrorViewerIE{
    errText:string;
    paragraph: string[];
    variants?: string[];
    num: number;
}

export const ErrorViewer : React.FC<ErrorViewerIE> = (props) =>{
    const [open, setOpen] = useState(false)
    

    return(
        <div>
            <div>
                <img src="/images/err.svg"></img>
                <div>{props.num}</div>
                <div className={styles.Text}>
                    {props.errText}
                </div>
                <div onClick={()=>setOpen(!open)}>
                    <img src="/images/arrow.svg"></img>
                </div>
            </div>
            <div style={{display: open? "":"none"}}>
                <div>
                    {
                        props.paragraph.map(
                            (value)=><div className={styles.paragraph}>{value}</div>
                        )
                    }
                </div>
                <div style={{display: props.variants==undefined? "none":""}}>
                    {
                        props.variants?.map(
                            (value)=><div className={styles.variant}>{value}</div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}