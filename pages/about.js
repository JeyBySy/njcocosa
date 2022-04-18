import Head from 'next/head'
import styles from '../styles/Layout.module.css'

function about() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About | Niño Jherico Cocosa</title>
            </Head>

            <main className={styles.main}>
                <a href="mailto:njcocosa@gmail.com">njcocosa@gmail.com</a>
            </main>
        </div>
    )
}

export default about