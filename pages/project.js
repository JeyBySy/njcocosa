import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import css from '../styles/Project.module.css'
import ProjectLists from '../components/ProjectLists'

const project = ({ projects }) => {

    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Project | Niño Jherico Cocosa</title>
            </Head>

            <h1>Projects</h1>
            <div className={styles.description}>
                <a href="https://github.com/JeyBySy">https://github.com/JeyBySy</a>
            </div>
            <ProjectLists projects={projects} />
        </div>

    )
}

export default project

export const getStaticProps = async () => {
    const res = await fetch('https://api.github.com/users/JeyBySy/repos')
    // const res = await fetch('https://ghibliapi.herokuapp.com/films')
    const projects = await res.json()

    return {
        props: {
            projects
        }
    }
}
