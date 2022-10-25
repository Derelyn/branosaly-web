import NavLinks from './NavLinks'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);
    const hamburgerIcon = <FiMenu className='hamburger' size='40px' color='white'
        onClick={() => setOpen(!open)}
    />

    const closeIcon = <AiOutlineClose className='hamburger' size='40px' color='white'
        onClick={() => setOpen(!open)}
    />

    const closeMobileMenu = () => setOpen(false);

    return (
        <nav className='MobileNavigation'>
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>
    );
}

export default MobileNavigation;