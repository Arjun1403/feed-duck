import React from 'react'
import { FeatureBody, FeatureHeader, FeatureRow, FeatureSection } from '../MainSection/FeaturesElements'
import NavigationBar from '../Navigation/NavigationBar'
import BarChart from './BarChart'
import StickyHeadTable from './FeedTables'
import LineChart from './LineChart'
import PieChart from './PieChart'

function DashBoard() {
    const dashBoard = {
        isDashBoard: true
    }

    return (
        <>
            <NavigationBar {...dashBoard} />
            <FeatureBody bgColor='#f4f4f4' id='BarChart'>
                <FeatureSection>
                    <FeatureRow>
                        <FeatureHeader >Country Vs Ducks Feed</FeatureHeader>
                    </FeatureRow>
                    <BarChart bgColor='#0F293D' />
                </FeatureSection>
            </FeatureBody>
            <FeatureBody bgColor='#0F293D' id='LineChart'>
            <FeatureSection>
                    <FeatureRow>
                        <FeatureHeader bgColor='#f4f4f4'>Country Vs Users Contributed</FeatureHeader>
                    </FeatureRow>
                    <LineChart bgColor='#f4f4f4' />
                </FeatureSection>
                
            </FeatureBody>
            <FeatureBody bgColor='#f4f4f4' id='PieChart'>
                <FeatureSection>
                    <FeatureRow>
                        <FeatureHeader >Time Period of Ducks Feed</FeatureHeader>
                    </FeatureRow>
                    <PieChart bgColor='#0F293D' />
                </FeatureSection>
            </FeatureBody>
            <FeatureBody bgColor='#fff' id='Table'>
                <FeatureSection>
                    <FeatureRow>
                        <FeatureHeader>Survey Data</FeatureHeader>
                        <StickyHeadTable />
                    </FeatureRow>
                </FeatureSection>
            </FeatureBody>


        </>

    )
}

export default DashBoard
