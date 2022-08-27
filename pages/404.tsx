import type { NextPage } from 'next'

import { Header } from '../Components/header'
import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css';
import { useState } from 'react'
import { host } from './api/consts'
import { PulseLoader } from 'react-spinners'
import axios from 'axios'
import { useRouter } from 'next/router'
import Head from 'next/head';



const History: NextPage = () => {


let router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Загрузите файл</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header></Header>
        <div className={styles.upload}>
            <div style={{fontSize:"44px"}}>404 страница не найдена</div>
            <div className={styles.btn} onClick={()=>router.push("/")}>Главная</div>

        </div>
      </main>
    </div>
  )
}

export default History
