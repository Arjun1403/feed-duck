import React from 'react'
import { Column, Header, HeroContainer, HeroRow, HeroSection, Image, ImageWrapper, Paragraph, SectionButton, SectionLink, TextWrapper,MainLine } from './sectionElements'

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
                                <SectionLink to='/'>
                                    <SectionButton>
                                        {buttonLabel}
                                </SectionButton>
                                </SectionLink>
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
