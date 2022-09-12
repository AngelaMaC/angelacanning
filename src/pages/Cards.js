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
            <a target={newWindow} href={url}><img src={img} alt='modal' className='card-image'></img></a>
            <a target={newWindow} href={url}><h2 className='card-title'>{title}</h2></a>
            <p className='card-description'>{description}</p>
            <a className='card-btn project-view-text' target={newWindow} href={url} >{view}</a>
        </div>
    )
}

export default Cards