import React from 'react'
import Cards from './Cards';
import img from '../pages/modal-time.png';

const Portfolio = () => {
    return (
        <>
            <h1 className='my-projects-title'>My Projects</h1>
            <div className='portfolio-wrapper'>
                <Cards
                    img={img}
                    title='Modal-Time'
                    description='A simple modal project built with React'
                    button='View Modal-Time' />
                <Cards
                    img={img}
                    title='SGV Chart'
                    description='This is a chart displaying information from an api.'
                    button='View My SGV' />
                <Cards
                    img={img}
                    title='To Do App'
                    description='This project uses Reactstrap to build a to-do application.'
                    button='View To Do App' />
            </div>
        </>
    )
}

export default Portfolio