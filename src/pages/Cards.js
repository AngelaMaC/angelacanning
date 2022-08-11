import React from 'react'

const Cards = ({
    img,
    title,
    description,
    button }) => {
    return (
        <div className='card'>
            <img src={img} alt='modal' className='card-image'></img>
            <h2 className='card-title'>{title}</h2>
            <p className='card-description'>{description}</p>
            <button className='card-btn'>{button}</button>
        </div>
    )
}

export default Cards