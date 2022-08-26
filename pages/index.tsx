import type { NextPage } from 'next'
import Head from 'next/head'
import { ErrorViewer } from '../Components/ErrorViewer'
import { FileUploader } from '../Components/FileUploader'
import { Header } from '../Components/header'
import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css';
import { ItemSelect, SelectItemIE } from '../Components/ItemSelect'
import { useState } from 'react'



const Home: NextPage = () => {
  const [file, setFile] = useState()
  let files = JSON.parse(localStorage.getItem("files") as string)
  // let data ={
  //   "Цель предоставления субсидии": [
  //     "1. {2} Настоящие Правила устанавливают цели, условия и порядок предоставления субсидии из федерального бюджета Фонду \"Центр стратегических разработок\" (далее - Фонд) в целях оценки эффектов от реализации инвестиционных проектов в сфере транспорта в рамках государственной программы Российской Федерации \"Экономическое развитие и инновационная экономика\" (далее - субсидия). {2}"
  //   ],
  //   "Размещение информации на едином портале бюджетной системы Российской Федерации": [
  //     "2. {3} Предоставление субсидии осуществляется в пределах лимитов бюджетных обязательств, доведенных в установленном порядке до Министерства экономического развития Российской Федерации как получателя средств федерального бюджета на цели, указанные в пункте 1 настоящих Правил. {3}"
  //   ],
  //   "Требования к участникам отбора": [
  //     "8. {11} Фонд по состоянию на 1-е число месяца, предшествующего месяцу, в котором заключается соглашение о предоставлении субсидии, должен соответствовать следующим требованиям: {11}"
  //   ],
  //   "Перечень документов, представляемых получателем субсидии для подтверждения соответствия требованиям": [
  //     "9. {19} Для заключения соглашения о предоставлении субсидии Фонд представляет в Министерство экономического развития Российской Федерации документы, подписанные руководителем Фонда (иным уполномоченным лицом), подтверждающие соответствие Фонда каждому из требований, предусмотренных пунктом 8 настоящих Правил. {19}"
  //   ],
  //   "Размер субсидии и (или) порядок расчета размера субсидии": [
  //     "6. {4} Субсидия предоставляется на финансовое обеспечение затрат, связанных с достижением целей, указанных в пункте 1 настоящих Правил, в том числе понесенных Фондом в текущем финансовом году до заключения соглашения о предоставлении субсидии (при наличии документов, подтверждающих фактически произведенные затраты), в размере, определяемом по формуле: {4}",
  //     "7. {22} Размер субсидии (Рсуб) определяется в пределах лимитов бюджетных обязательств, утвержденных и доведенных в установленном порядке до Министерства экономического развития Российской Федерации как получателя средств федерального бюджета на цели, указанные в пункте 1 настоящих Правил. {22}"
  //   ],
  //   "Условия и порядок заключения соглашения": [
  //     "3. {24} Субсидия предоставляется на основании соглашения о предоставлении субсидии, заключаемого между Министерством экономического развития Российской Федерации и Фондом (далее - соглашение о предоставлении субсидии). {24}",
  //     "4. {24} Соглашение о предоставлении субсидии содержит в том числе: {24}",
  //     "5. {24} Соглашение о предоставлении субсидии и дополнительные соглашения к нему, предусматривающие внесение изменений, или дополнительное соглашение о расторжении соглашения о предоставлении субсидии заключаются в государственной интегрированной информационной системе управления общественными финансами \"Электронный бюджет\" в соответствии с типовой формой, установленной Министерством финансов Российской Федерации.{24}"
  //   ],
  //   "Условия": []
  // }
  

  let i = 1;
  let cards = new Array<JSX.Element>()

  for(var name in data) { 
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
              onChange={(val)=>setFile(val as any)}
              items={files}
            ></ItemSelect>
          </div>
          <div className={styles.pagination}>
              {cards}
          </div>
      </main>
    </div>
  )
}

export default Home
