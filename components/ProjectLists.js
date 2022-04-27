import css from '../styles/Project.module.css'


const ProjectLists = ({ projects }) => {
    console.log(projects)
    return (
        <section className={css.card_wrapper}>
            {projects.map((project) => (
                <div key={project.name} className={css.card}>
                    <a href={project.html_url}>
                        <div className={css.card_title}>{project.name}</div>
                    </a>
                    <div className={css.card_body}>{project.description || "N/A"}</div>
                    <div className={css.card_footer}>
                        <div className={css.stack}>{project.language}</div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default ProjectLists
