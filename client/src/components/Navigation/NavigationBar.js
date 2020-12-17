import React from 'react'
import { NavBar, NavContainer, NavigationLink, NavIcon, NavMobile, NavButton, NavigationLinkToComponent } from './NavBarStyles';

function NavigationBar({ isDashBoard = false }) {




    return (

        <>
            <NavBar>
                <NavContainer>
                    <NavigationLink to='header' smooth={true} duration={1000} islink={false} >
                        <NavIcon />
                    Duck<strong>Feed</strong>
                    </NavigationLink>
                    {!isDashBoard ? (
                        <NavMobile>
                            <NavigationLink to='header' islink={true} smooth={true} duration={1000} >Home</NavigationLink>
                            <NavigationLink to='features' islink={true} smooth={true} duration={1000} >Food</NavigationLink>
                            <NavigationLink to='survey' islink={true} smooth={true} duration={1000} >Survey</NavigationLink>
                            <NavigationLink to='about us' islink={true} smooth={true} duration={1000} >About Us</NavigationLink>
                            <NavigationLinkToComponent to='dashBoard'>
                                <NavButton isbutton={true}>
                                    DashBoard
                                                    {/* <NavigationLink isbutton={true} > DashBoard</NavigationLink> */}

                                </NavButton>
                            </NavigationLinkToComponent>
                        </NavMobile>
                    ) : (
                            <NavMobile className={'nav-menu'}>
                                <NavigationLinkToComponent to='home' islink={true} smooth={true} duration={1000} >Home</NavigationLinkToComponent>
                                <NavigationLink to='LineChart' islink={true} smooth={true} duration={1000} >Line</NavigationLink>
                                <NavigationLink to='BarChart' islink={true} smooth={true} duration={1000} >Bar</NavigationLink>
                                <NavigationLink to='PieChart' islink={true} smooth={true} duration={1000} >Pie</NavigationLink>
                                <NavigationLink to='Table' islink={true} smooth={true} duration={1000} >Table</NavigationLink>
                            </NavMobile>)
                    }






                </NavContainer>
            </NavBar>
        </>
    )
}

export default NavigationBar
