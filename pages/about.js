import Head from 'next/head'
import styles from '../styles/Layout.module.css'

function about() {
    return (
        <>
            <Head>
                <title>About | Niño Jherico Cocosa</title>
            </Head>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>About</h1>
                </main>
            </div>
        </>
    )
}

export default about