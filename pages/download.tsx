import type { NextPage } from 'next'
import Head from 'next/head'
import { ErrorViewer } from '../Components/ErrorViewer'
import { FileUploader } from '../Components/FileUploader'
import { Header } from '../Components/header'
import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css';
import { ItemSelect, SelectItemIE } from '../Components/ItemSelect'
import { useState } from 'react'
import { useRouter } from 'next/router'



const Upload: NextPage = () => {
  const [files, setFiles] = useState(new Array())
  let router = useRouter()

  const onDownload = () =>{

  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header></Header>
        <div className={styles.upload}  style={{paddingTop:"100px"}}>
            <div className={styles.h1}>Расширение для проверки НПА на соответсвие<br></br>
                    и помощи в создании нормативных документов</div>
            <div className={styles.downloadText}>Скачайте десктопный дистрибутив  и установите его</div>
            <a href="https://akarpov.ru/media/uploads/files/SjA7NLWajg.zip" className={styles.btnBlue}>Скачать <img src="/images/downloadWhite.svg"></img></a>
            <div className={styles.supported}>
                <div style={{textDecoration:"underline", fontSize:"24px"}} className={styles.downloadText}>совместимо со следующими программами:</div>
                <div className={styles.programs}>
                    <img src="/images/word.svg"></img>
                    <img src="/images/myoficce.svg"></img>
                    <img src="/images/libreoficce.svg"></img>
                </div>
                <div className={styles.programsM}>
                    <img src="/images/wordm.svg"></img>
                    <img src="/images/myoficcem.svg"></img>
                    <img src="/images/libreoficcem.svg"></img>
                </div>
            </div>
        </div>
        <img className={styles.downloadStars} src="/images/stars.svg"></img>
      </main>
    </div>
  )
}

export default Upload
