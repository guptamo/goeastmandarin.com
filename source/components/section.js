import React from 'react'
import classNames from 'classnames/bind'

import styles from '../styles/section.css'

const cx = classNames.bind(styles)

const Section = (props) => {
    const sectionName = cx(`${props.bgColor}Section`)

    return (
        <section className={sectionName}>
            {React.Children.map(props.children, child => (child))}
        </section>
    )
}

Section.propTypes = {
    bgColor: React.PropTypes.string
}

export default Section
