import React from 'react'
import  DuckSection from './DuckSection.js'
import { homeDataFour, homeDataOne, homeDataThree, homeDataTwo } from './Data'
import NavigationBar from '../Navigation/NavigationBar.js'
import HeaderSection from '../Header/HeaderSection.js'
import Footer from '../Footer/Footer.js'
import Features from './Features.js'
import DuckForm from '../Form/DuckForm.js'


function Home() {
    
    return (
        <>
            <NavigationBar />
            <HeaderSection />
            <DuckSection {...homeDataTwo} />
            <Features />
            <DuckSection {...homeDataOne} />
            <DuckForm />
            <Footer />
            
            {/* <MainSection {...homeDataThree} />
            <Pricing/>
            <MainSection {...homeDataFour} /> */}


        </>
    )
}


export default Home
