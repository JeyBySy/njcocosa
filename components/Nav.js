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


// import { AppBar, Avatar, IconButton, Toolbar, Typography, Button } from '@mui/material';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import MenuIcon from '@mui/icons-material/Menu'

// const darkTheme = createTheme({
//     palette: {
//         mode: 'dark',
//         primary: {
//             main: '#1976d2',
//         },
//     },
// });

// const Nav = () => {
//     return (
//         <ThemeProvider theme={darkTheme}>
//             <AppBar color="primary" enableColorOnDark>
//                 <Toolbar>
//                     <IconButton
//                         size="large"
//                         edge="start"
//                         color="inherit"
//                         aria-label="menu"
//                         sx={{ mr: 2 }}>
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                         News
//                     </Typography>
//                     <Button color="inherit">Login</Button>
//                 </Toolbar>
//             </AppBar>
//         </ThemeProvider>
//     )
// }


// export default Nav