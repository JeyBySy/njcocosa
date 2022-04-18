import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import css from '../styles/Project.module.css'
import Image from 'next/image'
import { Box } from '@mui/material'




const project = () => {
    return (
        <>
            <Head>
                <title>Project | Niño Jherico Cocosa</title>
            </Head>
            <div className={styles.container} >
                <main className={styles.main} >
                    <h1>Projects</h1>
                    <div className={styles.description}>
                        <a href="https://github.com/JeyBySy">https://github.com/JeyBySy</a>
                    </div>
                    <section className={css.card_wrapper}>
                        <div className={css.card}>
                            <div className={css.card_title}>
                                dsadsa
                            </div>
                            <div className={css.card_body}>
                                dsadsa
                            </div>
                            <div className={css.card_footer}>
                                <div className={css.stack}>
                                    Javascript
                                </div>
                            </div>
                        </div>
                        <div className={css.card}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores aut corporis quo sunt minus repellat eius quos cupiditate cumque voluptatem quam amet dignissimos possimus, libero esse sint ea ex minima sed accusantium? Iusto corrupti eum voluptate voluptates? Asperiores illo, tempora cum exercitationem accusamus minima obcaecati sit nam quod, repellendus soluta?
                        </div>
                        <div className={css.card}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid illo delectus iste, dolorem velit ut at quod facilis cumque ex sequi error, quae quo fugit voluptatibus labore molestias incidunt? Mollitia fugiat ipsam eligendi harum tenetur adipisci soluta distinctio iusto est beatae laboriosam magnam neque aperiam hic reprehenderit ut accusantium, temporibus ratione nisi esse, voluptas voluptate reiciendis nam recusandae. Ut officiis dignissimos qui recusandae voluptatibus aspernatur obcaecati ullam. Facere nesciunt tempora quasi aspernatur voluptas, officia laborum quisquam perferendis culpa minima consequatur obcaecati unde earum.
                        </div>
                    </section>
                </main>
            </div>
        </>

    )
}

export default project