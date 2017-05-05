import styles from './styles/app.css'
import logo from './images/GoEastLogotypeWhite.svg'
import React from 'react'
import ReactDOM from 'react-dom'

import Nav from './components/nav'
import Section from './components/section'

const App = () => {
    return (
        <div>
            <Nav />
            <Section bgColor="midBlue">
                <h1>This is the First Section</h1>
            </Section>
            <Section bgColor="goeastRed">
                <h2>This is the second section</h2>
                <p>This is some text in the second section</p>
            </Section>
        </div>
    )

}


ReactDOM.render(<App />, document.querySelector('.container'))
