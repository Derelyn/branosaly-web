import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <li className='nav-li'><a href="" className="title">Branislav <strong>Šály</strong></a></li>
            </div>
            <div className="nav-links">
                <Navigation />
                <MobileNavigation />
            </div>
        </nav >
    )
}

export default Navbar