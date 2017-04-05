import React from 'react'
import styles from '../styles/nav.css'


const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}></div>
            <ul className={styles.navList}>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Events</li>
                <li>About Us</li>
                <li>Sign In</li>
            </ul>
        </nav>
    )
}

export default Nav
