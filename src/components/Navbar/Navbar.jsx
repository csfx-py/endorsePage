import React, { useState, useEffect } from 'react';
import {
    Nav,
    NavbarContainer,
    NavBtnLink,
    NavDropdown,
    NavIcon,
    NavItem,
    NavItemBtn,
    NavLink,
    NavLogo,
    NavMenu
} from './NavbarElements';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Button } from '../../globalStyles';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon />
                    Test App
                </NavLogo>
                <NavDropdown onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </NavDropdown>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/Products'>
                            Products
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/services'>
                            Services
                        </NavLink>
                    </NavItem>
                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink to='/sign-up'>
                                <Button primary>Sign Up</Button>
                            </NavBtnLink>
                        ) : (
                            <NavBtnLink to='/sign-up'>
                                <Button onClick={closeMobileMenu} fontBig primary>
                                    SIGN UP
                                </Button>
                            </NavBtnLink>
                        )}
                    </NavItemBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;