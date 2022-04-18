import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Image from 'next/image'

const project = () => {
    const avatar_url = () => {
        return `https://avatars.githubusercontent.com/u/67497021?v=4`
    }
    return (
        <div className={styles.container} >
            <Head>
                <title>Project | Niño Jherico Cocosa</title>
            </Head>

            <main className={styles.main}>
                <div className="avatar">
                    <Image loader={avatar_url}
                        src="https://avatars.githubusercontent.com/u/67497021?v=4"
                        alt="Avatar Image"
                        width={300}
                        height={300}
                    />

                </div>
                <div className={styles.card}>
                    Project
                </div>
            </main>
        </div>
    )
}

export default project

export const getStaticProps = async () => {


    const res2 = await fetch('https://api.github.com/users/JeyBySy/repos')
    const myProjects = await res2.json()

    return {
        props: {
            myProjects
        }
    }
}