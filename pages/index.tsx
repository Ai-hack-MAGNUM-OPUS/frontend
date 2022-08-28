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

  const onNext = () =>{
    localStorage.setItem("files", JSON.stringify(files))
    router.push("/files")
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Проверка НПА</title>
        <meta name="description" content="Помощник проверки НПА" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header></Header>
        <div className={styles.upload}>
            <div className={styles.h1}>Веб-сервис для помощи в проверки НПА</div>
            <FileUploader onResponse={(file)=>setFiles([...files, file])}></FileUploader>
            <div className={styles.btn} onClick={()=>onNext()}>Далее</div>
        </div>
        <img className={styles.frame} src="/images/frame.svg"></img>
        <img className={styles.stars} src="/images/stars.svg"></img>
      </main>
    </div>
  )
}

export default Upload
