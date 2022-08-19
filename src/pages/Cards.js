import React from 'react'

const Cards = ({
    img,
    title,
    description,
    view,
    url,
    newWindow
}) => {
    return (
        <div className='card'>
            <img src={img} alt='modal' className='card-image'></img>
            <h2 className='card-title'>{title}</h2>
            <p className='card-description'>{description}</p>
            <a className='card-btn project-view-text' target={newWindow} href={url} >{view}</a>
        </div>
    )
}

export default Cards