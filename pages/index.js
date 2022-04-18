import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home | Niño Jherico Cocosa</title>
      </Head>
      <h1>Hi! I am Niño Jherico Cocosa</h1>
    </div>

  )
}
