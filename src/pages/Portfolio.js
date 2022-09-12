import React from 'react'
import Cards from './Cards'
import createAcctImg from '../pages/create-account.jpg'
import toDoImg from '../pages/to-do-list.jpg'
import liveBgImg from '../pages/live-bg.jpg'

const Portfolio = () => {
    return (
        <div className='portfolio-container'>
            <h1 className='my-projects-title'>My Projects</h1>
            <div className='portfolio-wrapper'>
                <Cards
                    img={liveBgImg}
                    title='My BG Live'
                    description='This project retrieves live blood sugar data readings from a Heroku server and displays the data inside of a chart using Chart.js.'
                    view='View My BG Live'
                    newWindow='target=_blank'
                    url='https://mybglive.netlify.app/' />
                <Cards
                    img={createAcctImg}
                    title='Create Account'
                    description='This Javascript project features a create account and login in form. Create account password validation helps the user select a strong password.'
                    view='View Create Account'
                    newWindow='_blank'
                    url='https://createaccountform.netlify.app/' />

                <Cards
                    img={toDoImg}
                    title='To Do App'
                    description='React was utilized to build this to-do application. Bootstrap buttons and inputs, along with Font Awesome icons were used to style this application.'
                    view='View To Do App'
                    newWindow='target=_blank'
                    url='https://angelamac-to-do.netlify.app/' />
            </div>
        </div>
    )
}

export default Portfolio