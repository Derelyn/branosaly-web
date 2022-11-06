import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const NavLinks = (props) => {
    const animationFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }

    return (
        <ul className="menu">
            <motion.li className='nav-li' initial={animationFrom} animate={animateTo} transition={{ delay: 0.05 }} onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="nav-link"
                >Home</Link></motion.li>
            <motion.li className='nav-li' initial={animationFrom} animate={animateTo} transition={{ delay: 0.10 }} onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="nav-link"
                >About</Link></motion.li>
            <motion.li className='nav-li' initial={animationFrom} animate={animateTo} transition={{ delay: 0.15 }} onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="nav-link"
                >Skills</Link></motion.li>
        </ul>
    );
}

export default NavLinks;