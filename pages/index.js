import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Niño Jherico Cocosa</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Hi! I am Niño Jherico Cocosa</h1>
        </main>
      </div>
    </>

  )
}
