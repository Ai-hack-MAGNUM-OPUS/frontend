import { useRouter } from "next/router";
import React from "react";
import styles from "./header.module.css"
import 'antd/dist/antd.css';

export const Header:React.FC = () =>{
    let router = useRouter()

    return(
        <div className={styles.header}>
            <div className={styles.logo} onClick={()=>router.push("/")}>
                <img src="/images/logo.svg"></img>
            </div>
            <div className={styles.itemWrapper}>
                <div className={styles.item} onClick={()=>router.push("/")}>
                    Проверить документы 
                </div>
                <div className={styles.item} onClick={()=>router.push("/how-to-use")}>
                    Инструкция
                </div>
                <div className={styles.item} onClick={()=>router.push("/history")}>
                    История файлов
                </div>
                <div className={styles.item} onClick={()=>router.push("/about")}>
                    О нас
                </div>
                <div className={styles.item} onClick={()=>router.push("/download")}>
                    Скачать <img src="/images/downloadSmall.svg"></img>
                </div>
            </div>
        </div>
    );
}