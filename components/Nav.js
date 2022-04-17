import styles from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.avatar}>
                <Link href='/'>NJCOCOSA</Link>
            </div>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
                <li><Link href='/project'>Project</Link></li>
            </ul>
        </div>
    )
}

export default Nav