import { motion } from 'framer-motion'

const NavLinks = (props) => {
    const animationFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }

    return (
        <ul className="menu">
            <motion.li className='nav-li' initial={animationFrom} animate={animateTo} transition={{ delay: 0.05 }} onClick={() => props.isMobile && props.closeMobileMenu()}><a href="" className="nav-link">Home</a></motion.li>
            <motion.li className='nav-li' initial={animationFrom} animate={animateTo} transition={{ delay: 0.10 }} onClick={() => props.isMobile && props.closeMobileMenu()}><a href="" className="nav-link">About</a></motion.li>
            <motion.li className='nav-li' initial={animationFrom} animate={animateTo} transition={{ delay: 0.15 }} onClick={() => props.isMobile && props.closeMobileMenu()}><a href="" className="nav-link">CV</a></motion.li>
            <motion.li className='nav-li' initial={animationFrom} animate={animateTo} transition={{ delay: 0.20 }} onClick={() => props.isMobile && props.closeMobileMenu()}><a href="" className="nav-link">Contact</a></motion.li>
        </ul>
    );
}

export default NavLinks;