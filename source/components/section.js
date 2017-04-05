import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/section.css'

const cx = classNames.bind(styles)

const Section = (props) => {
    const sectionName = cx({
        midBlueSection: props.bgColor === 'midBlue',
        goeastRedSection: props.bgColor === 'goeastRed',
    })
    console.dir(props)

    return (
        <section className={sectionName}>
            {React.Children.map(props.children, child => (child))}
        </section>
    )
}

export default Section
