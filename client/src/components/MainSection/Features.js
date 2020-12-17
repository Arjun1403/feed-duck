import React from 'react'
import { NavIcon } from '../Navigation/NavBarStyles'
import { FeatureColSpan,FeatureBody, FeatureIcon, FeatureRow, FeatureSection, ParagraphLong, Paragraph, FeatureHeader } from './FeaturesElements'

function Features() {
    return (
        <>
            <FeatureBody id='features'>
                <FeatureSection>
                    <FeatureRow>
                        <FeatureHeader>
                        Duck Feed &mdash; Around the World
                        </FeatureHeader>
                        <ParagraphLong>
                            This web application helps a scientist in trying tonunderstand how Ducks are fed in parks around the world. 
                            Below are the following informations which are collected. Scientist takes care of this survey Analysis to help feed Ducks
                            
                     </ParagraphLong>

                    </FeatureRow>
                    <FeatureRow>
                        <FeatureColSpan>

                            <FeatureIcon><NavIcon /></FeatureIcon>
                            <h3>What food and type of Food fed?</h3>
                            <Paragraph>
                                They are certain range of food type for ducks, for example considering food types such as Grain,fish,plants and worms
                            </Paragraph>

                        </FeatureColSpan>

                        <FeatureColSpan>
                            <FeatureIcon><NavIcon /></FeatureIcon>
                            <h3>Hoe Many Ducks are Fed?</h3>
                            <Paragraph>
                                On What range of ducks are being fed in each park, may be each park has around 10-12 ducks!
                        </Paragraph>

                        </FeatureColSpan>


                        <FeatureColSpan>
                            <FeatureIcon><NavIcon /></FeatureIcon>
                            <h3>Whats the quantity of food?</h3>
                            <Paragraph>
                               One of important attribute to which says on what scale of food ducks are fed such as in kgs or litres.
                        </Paragraph>

                        </FeatureColSpan>


                        <FeatureColSpan>
                            <FeatureIcon><NavIcon /></FeatureIcon>
                            <h3>Time at which ducks are fed?</h3>
                            <Paragraph>
                                This attribute helps us to understand the ideal time for ducks to be feed may be morning, afternoon or evening.
                        </Paragraph>

                        </FeatureColSpan>

                    </FeatureRow>
                </FeatureSection>
            </FeatureBody>


        </>
    )
}

export default Features
