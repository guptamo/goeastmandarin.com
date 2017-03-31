import styles from './styles/app.css'
import logo from './images/GoEastLogotypeWhite.svg'
import React from 'react'
import ReactDOM from 'react-dom'


const Nav = ({style}) => {
    return (
        <nav className={style.nav}>
            <div className={style.logo}></div>
            <ul className={style.navList}>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Events</li>
                <li>About Us</li>
                <li>Sign In</li>
            </ul>
        </nav>
    )
}

Nav.propTypes = {
    style: React.PropTypes.object,
}

ReactDOM.render(<Nav style={styles}/>, document.querySelector('.container'))
