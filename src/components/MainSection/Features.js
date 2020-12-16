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
                        Get food fast &mdash; not fast food
                        </FeatureHeader>
                        <ParagraphLong>
                            Hello, we're Omnifood, your new premium food delivery service.
                            We know you're always busy. No time for cooking. So let us take care of that, we're really good at it, we promise!
                     </ParagraphLong>

                    </FeatureRow>
                    <FeatureRow>
                        <FeatureColSpan>

                            <FeatureIcon><NavIcon /></FeatureIcon>
                            <h3>Up to 365 days/year</h3>
                            <Paragraph>
                                Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage.
                                You can also choose to order more flexibly if that's your style.
                            </Paragraph>

                        </FeatureColSpan>

                        <FeatureColSpan>
                            <FeatureIcon><NavIcon /></FeatureIcon>
                            <h3>Up to 365 days/year</h3>
                            <Paragraph>
                                Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage.
                                You can also choose to order more flexibly if that's your style.
                        </Paragraph>

                        </FeatureColSpan>


                        <FeatureColSpan>
                            <FeatureIcon><NavIcon /></FeatureIcon>
                            <h3>Up to 365 days/year</h3>
                            <Paragraph>
                                Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage.
                                You can also choose to order more flexibly if that's your style.
                        </Paragraph>

                        </FeatureColSpan>


                        <FeatureColSpan>
                            <FeatureIcon><NavIcon /></FeatureIcon>
                            <h3>Up to 365 days/year</h3>
                            <Paragraph>
                                Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage.
                                You can also choose to order more flexibly if that's your style.
                        </Paragraph>

                        </FeatureColSpan>

                    </FeatureRow>
                </FeatureSection>
            </FeatureBody>


        </>
    )
}

export default Features
