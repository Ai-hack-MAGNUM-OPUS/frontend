import type { NextPage } from 'next'
import Head from 'next/head'
import { ErrorViewer } from '../../Components/ErrorViewer'
import { FileUploader } from '../../Components/FileUploader'
import { Header } from '../../Components/header'
import styles from '../../styles/Home.module.css'
import 'antd/dist/antd.css';
import { ItemSelect, SelectItemIE } from '../../Components/ItemSelect'
import { useState } from 'react'
import { host } from '../api/consts'
import { PulseLoader } from 'react-spinners'
import axios from 'axios'
import { useRouter } from 'next/router'



const View: NextPage = () => {
  let router = useRouter()
  let uuid = router.query.id as string

  const [data,setData]  = useState("")
  let i = 1;
  let cards = new Array<JSX.Element>()
  const [text, setText] = useState("")
  const getData = () =>{
    if (data == ""){
      axios.get(host+"/api/site/docx/" + uuid).then(res => {
        setData(res.data)
      })
    }
    setText(localStorage.getItem(uuid)?.slice(48,localStorage.getItem(uuid)?.length) as string)
  }
  setTimeout(getData, 2000);
  if (data != ""){
    for(var name in data as any) { 
      cards.push(
        <ErrorViewer
          num={i}
          paragraph={(data as any)[name].texts}
          errText={name}
          correct={(data as any)[name].correct}
        ></ErrorViewer>
      )
      i++
  } 
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Вьюха</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header></Header>
          
          <div className={styles.viewer}>
              <div className={styles.viewTools}>
                <div onClick={()=>router.back()}>
                  <img  style={{ cursor:"pointer"}}src="/images/ArrowLeft.svg"></img>
                </div>
                <div className={styles.viewerText}>
                  {text}
                </div>
              </div>
              {data == ""? <PulseLoader color={"#13377D"}></PulseLoader>:cards}
          </div>
      </main>
    </div>
  )
}

export default View
