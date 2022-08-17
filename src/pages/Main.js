import React from 'react'
import logo from '../pages/profile_image.jpg';
import { SocialIcon } from 'react-social-icons';
import Header from '../Header';
import Footer from '../Footer';


const Main = () => {
    return (
        <>
            <div className='wrapper'>
                <div className='main-container'>
                    <div className='profile'>
                        <img className='circle-profile' src={logo} alt='angelacanning'></img>
                    </div>
                    <div className='profile-text'>
                        <h1>Hi, I'm Angela <span className='wave'>&#128075;</span></h1>
                        <h2>I'm a Web Developer.</h2>
                        <ul>
                            <li>&#127758; based in The Woodlands, TX</li>
                            <li className='email'>&#128231; <a href='mailto:angelamcanning@outlook.com'>angelamcanning@outlook.com</a></li>
                        </ul>
                        <div className='socials'>
                            <span className='social-icons'><SocialIcon url='https://github.com/AngelaMaC' target='blank' rel='noopener noreferrer' bgColor="#FFFFFF" /></span>
                            <span className='social-icons'><SocialIcon url='https://www.linkedin.com/in/angie-canning-607aa162/' target='blank' rel='noopener noreferrer' bgColor='#FFFFFF' /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Main;