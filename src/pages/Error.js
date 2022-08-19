import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error'>
            <h1>404</h1>
            <p>Page not found</p>
            <p>Please click <Link to='/' class='links hover-effect'>here</Link> to go home.</p>
        </div>
    )
}

export default Error