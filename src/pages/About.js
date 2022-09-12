import logo from '../pages/profile_image.jpg'
import { SocialIcon } from 'react-social-icons'

const About = () => {
    return (
        <>
            <div className='about-container'>
                <h1 className='about-title'>About Me</h1>
                <div className='main-container' id='about-text-box'>
                    <div className='pages-left-container'>
                        <h2 className='margin-bottom margin-top'>Where I've Been</h2>
                        <div className='about-p'>For the past several years I have worked to improve my developer skills in HTML, CSS, Javascript, and various libraries used in web development. <br></br></div>
                        <h2 className='margin-bottom margin-top'>Where I'm Headed</h2>
                        <div className='about-p'>After spending time learning and developing projects, I am looking to join a web development team so I can further grow and contribute to meaningful projects that fill a specific need.</div>
                        <h2 className='margin-bottom margin-top'>Personal Notes</h2>
                        {/* <div className='about-p'>I am married and a mom of two children - Chris and Caden who are in college and high school. We have a Cavalier King Charles Spaniel named Oliver, who has his own Instagram account! <span className='social-icons ig'><SocialIcon url='https://www.instagram.com/oliverscavalierlife/' target='blank' rel='noopener noreferrer' bgColor='#FFFFFF' style={{ height: 25, width: 25 }} /></span>  I love to run, hike, and spend time outdoors with my family. </div> */}
                        <ul>
                            <li>My husband Toby and I have been married for 26 years. </li>
                            <li>Our children, Chris and Caden, are in college and high school.</li>
                            {/* <li>&#x1F9D1;👨‍🦱  Mother to my children Chris and Caden</li> */}
                            <li>We have a Cavalier King Charles Spaniel named Oliver, who has his own Instagram account: <span className='social-icons ig'><SocialIcon url='https://www.instagram.com/oliverscavalierlife/' target='blank' rel='noopener noreferrer' bgColor='#FFFFFF' style={{ height: 25, width: 25 }} /></span></li>
                        </ul>
                    </div>
                    <div className='right'>
                        <img className='circle-profile' src={logo} alt='angelacanning'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About