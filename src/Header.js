import React from 'react'

export const Header = () => {
    return (
        <nav className='main-nav'>
            <ul className='nav'>
                <li className='home hover-effect'><a href='/'>home</a></li>
                <li className='about hover-effect'><a href='/'>about</a></li>
                <li className='dev-name color-hover'><a href='/'>ac</a></li>
                <li className='portfolio hover-effect'><a href='/'>portfolio</a></li>
                {/* <li className=''><a href='/'> &#128262;&#128261;</a></li> */}
                <li className='change-theme hover-effect'><a href='/'>theme</a></li>
            </ul>
        </nav>
    )
}

export default Header;