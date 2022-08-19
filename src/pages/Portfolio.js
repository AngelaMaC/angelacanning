import React from 'react'
import Cards from './Cards';
import img from '../pages/modal-time.png';

const Portfolio = () => {
    return (
        <div className='portfolio-container'>
            <h1 className='my-projects-title'>My Projects</h1>
            <div className='portfolio-wrapper'>
                <Cards
                    img={img}
                    title='Modal-Time'
                    description='A simple modal project built with React. This project uses styled components, React hooks, and CSS hover effects. '
                    view='View Modal-Time'
                    newWindow='_blank'
                    url='https://modaltime.netlify.app/' />
                <Cards
                    img={img}
                    title='SGV Chart'
                    description='This is a chart displaying information from an api.'
                    view='View My SGV'
                    newWindow='target=_blank'
                    url='/' />
                <Cards
                    img={img}
                    title='To Do App'
                    description='This project uses Reactstrap to build a to-do application.'
                    view='View To Do App'
                    newWindow='target=_blank'
                    url='/' />
            </div>
        </div>
    )
}

export default Portfolio