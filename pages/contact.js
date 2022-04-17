import Head from 'next/head'
import styles from '../styles/Layout.module.css'

const contact = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contact | Niño Jherico Cocosa</title>
            </Head>

            <main className={styles.main}>
                Contact
            </main>
        </div>
    )
}

export default contact