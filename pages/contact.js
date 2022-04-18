import Head from 'next/head'
import styles from '../styles/Layout.module.css'

const contact = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contact | Niño Jherico Cocosa</title>
            </Head>

            <main className={styles.main}>
                <h1>Contact</h1>
                <a href="mailto:njcocosa@gmail.com">njcocosa@gmail.com</a>
            </main>
        </div>
    )
}

export default contact