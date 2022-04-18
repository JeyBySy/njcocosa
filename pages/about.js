import Head from 'next/head'
import styles from '../styles/Layout.module.css'

function about() {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>About | Niño Jherico Cocosa</title>
            </Head>
            <h1>About</h1>
        </div>
    )
}

export default about