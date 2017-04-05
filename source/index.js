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
                <h1>The <br/>
            Largest <br/>
        Title <br/>
    Ever <br/></h1>
            </Section>
            <Section bgColor="goeastRed">
                <h1>The <br/>
            Second <br/>
        Title <br/>
    Ever <br/></h1>
            </Section>
        </div>
    )

}


ReactDOM.render(<App />, document.querySelector('.container'))
