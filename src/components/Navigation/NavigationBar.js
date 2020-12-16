import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons/lib'
import { NavBar, NavContainer, NavigationLink, Times, Bars, NavIcon, NavMobile, NavMenu,NavButton, NavigationLinkToComponent } from './NavBarStyles';

function NavigationBar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    };
    
    useEffect(() => {
        showButton()

    }, [])
    window.addEventListener('resize', showButton)


    return (
        <>
            <NavBar>
                <NavContainer>
                    <NavigationLink to='header' smooth={true} duration={1000} islink={false} className={'nav-logo'} onClick={closeMobileMenu}>
                        <NavIcon />
                    Duck<strong>Feed</strong>
                    </NavigationLink>
                    <NavMenu className='menu-icon' onClick={handleClick}>
                        {
                            click ? <Times /> : <Bars />
                        }
                    </NavMenu>
                    <NavMobile className={'nav-menu'}>
                        <NavigationLink to='header' key='1' islink={true} smooth={true} duration={1000} className={'nav-link'} onClick={closeMobileMenu}>Home</NavigationLink>
                        <NavigationLink to='features' key='2' islink={true} smooth={true} duration={1000} className={'nav-link'} onClick={closeMobileMenu}>Food</NavigationLink>
                        <NavigationLink to='survey' key='3' islink={true} smooth={true} duration={1000} className={'nav-link'} onClick={closeMobileMenu}>Survey</NavigationLink>
                        <NavigationLink to='about us' key='4' islink={true} smooth={true} duration={1000} className={'nav-link'} onClick={closeMobileMenu}>About Us</NavigationLink>
                        <NavigationLinkToComponent to='dashBoard' key='5'  className={'nav-link'} onClick={closeMobileMenu}>
                            <NavButton   isbutton={true}>
                                DashBoard
                                {/* <NavigationLink isbutton={true} > DashBoard</NavigationLink> */}
                                
                            </NavButton>
                        </NavigationLinkToComponent>
                    </NavMobile>



                </NavContainer>
            </NavBar>
        </>
    )
}

export default NavigationBar
