import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className='main-nav'>
            <div className='nav'>
                <Link to='/' className='home hover-effect'>home</Link>
                <Link to='about' className='about hover-effect'>about</Link>
                <Link to='/' className='dev-name color-hover'>ac</Link>
                <Link to='portfolio' className='portfolio hover-effect'>portfolio</Link>
                <Link to='change' className='change-theme hover-effect'>theme</Link>
            </div>
        </nav>
    )
}

export default Navbar