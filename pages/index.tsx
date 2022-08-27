import type { NextPage } from 'next'
import Head from 'next/head'
import { ErrorViewer } from '../Components/ErrorViewer'
import { FileUploader } from '../Components/FileUploader'
import { Header } from '../Components/header'
import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css';
import { ItemSelect, SelectItemIE } from '../Components/ItemSelect'
import { useState } from 'react'
import { get } from './api/fetch'
import { host } from './api/consts'
import { PulseLoader } from 'react-spinners'
import axios from 'axios'



const Home: NextPage = () => {
  
  let files = JSON.parse(localStorage.getItem("files") as string)
  const [file, setFile] = useState(files[0].uuid)
  const [data,setData]  = useState("")
  let i = 1;
  let cards = new Array<JSX.Element>()

  const getData = () =>{
    if (data == ""){
      axios.get(host+"/api/docx/" + file).then(res => {
        setData(res.data)
      })
    }
  }
  const onFileChange = (newFile:any) =>{
    setData("")
    axios.get(host+"/api/docx/" + newFile).then(res => {
      setData(res.data)
    })
      setFile(newFile)
  }

  setTimeout(getData, 2000);
  if (data != ""){
    for(var name in data as any) { 
      cards.push(
      <ErrorViewer
        num={i}
        paragraph={(data as any)[name][0]==undefined? ["Выявлено отсутсвие данного модуля"]:(data as any)[name]}
        errText={name}
        correct={(data as any)[name][0]==undefined? false:true}
      ></ErrorViewer>
      )
      i++
  } 
  }

  let select = new Array<SelectItemIE>()
  files.forEach((value : any) => {
      select.push(
        {
          name: value.file.slice(48, value.uuid.lenght),
          value: value.uuid
        } as SelectItemIE
      )
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Загрузите файл</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header></Header>
        
          <div className={styles.selector}>
            <ItemSelect 
              onChange={(val)=>onFileChange(val as any)}
              items={select}
            ></ItemSelect>
          </div>
          <div className={styles.pagination}>
              {data == ""? <PulseLoader color={"#13377D"}></PulseLoader>:cards}
          </div>
      </main>
    </div>
  )
}

export default Home
