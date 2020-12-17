import React from 'react'

import { Column, Header, HeroContainer, HeroRow, HeroSection, Image, ImageWrapper, Paragraph, SectionButton, SectionLink, TextWrapper,MainLine, ContributeLink } from './sectionElements'

function DuckSection({darkBg, lightText,topLine,headline, description, buttonLabel,imgStart,image, alt}) {

    // console.log(topLine);
    console.log(lightText);

    return (
        <>
            <HeroSection darkBackground={darkBg}>
                <HeroContainer>
                    <HeroRow imageStart={imgStart}>
                        <Column>
                            <TextWrapper>
                                <MainLine lightText={lightText}>                                    
                                    {topLine}
                                </MainLine>
                                <Header lightText={lightText}>{headline}</Header>
                                <Paragraph lightText={lightText}>{description} </Paragraph>
                                {/* <SectionButton>
                                <ContributeLink to='survey' islink={true} smooth={true} duration={1000}>
                                    
                                        {buttonLabel}
                                
                                </ContributeLink>
                                </SectionButton> */}
                            </TextWrapper>
                        </Column>
                        <Column>
                            <ImageWrapper>
                                <Image src={image} alt={alt} />
                            </ImageWrapper>

                        </Column>
                    </HeroRow>
                </HeroContainer>

            </HeroSection>

        </>
    )
}

export default DuckSection
