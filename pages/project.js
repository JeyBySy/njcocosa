import Head from 'next/head'
import styles from '../styles/Layout.module.css'

const contact = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Project | Niño Jherico Cocosa</title>
            </Head>

            <main className={styles.main}>
                <div className={styles.card}>
                    Project
                </div>
            </main>
        </div>
    )
}

export default contact