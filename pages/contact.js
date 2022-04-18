import Head from 'next/head'
import styles from '../styles/Layout.module.css'

const contact = () => {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Contact | Niño Jherico Cocosa</title>
            </Head>
            <h1>Contact</h1>
            <a href="mailto:njcocosa@gmail.com">njcocosa@gmail.com</a>
        </div>
    )
}

export default contact