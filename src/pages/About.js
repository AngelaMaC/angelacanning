import React from 'react'
import logo from '../pages/profile_image.jpg';
import { SocialIcon } from 'react-social-icons';

const About = () => {
    return (
        <div className='wrapper'>
            <div className='main-container'>
                <div className='pages-left-text'>
                    <h1 className='about margin-bottom'>About Me</h1>
                    <h2 className='margin-bottom margin-top'>Where I've Been</h2>
                    <ul>
                        <li>&#128107; Wife to my husband Toby</li>
                        <li>&#x1F9D1;👨‍🦱  Mother to my children Chris and Caden</li>
                        <li>&#128054; Social Media Momager to my dog Oliver: <span className='social-icons ig'><SocialIcon url='https://www.instagram.com/oliverscavalierlife/' target='blank' rel='noopener noreferrer' bgColor='#FFFFFF' style={{ height: 25, width: 25 }} /></span></li>
                        {/* <li>&#128105;&#8205;&#127891; Student</li> */}
                    </ul>
                    <h2 className='margin-bottom margin-top'>Where I'm Headed</h2>
                </div>
                <div className='right'>
                    <img className='circle-profile' src={logo} alt='angelacanning'></img>
                </div>
            </div>
        </div>
    )
}

export default About