import React from 'react'
import { FbIcon, FeedCol, FeedFooter, FeedIcon, FeedLink, FeedList, FeedParagraph, FeedRow, FeedSym, GmIcon, InIcon, TwIcon } from './FooterElements'

function Footer() {
    return (
        <>
            <FeedFooter id='about us'>
                <FeedRow>
                    <FeedCol>
                        <FeedList>
                            <FeedLink to='#'>About Us</FeedLink>
                            <FeedLink to='#'>Food</FeedLink>
                            <FeedLink to='#'>Survey</FeedLink>
                            <FeedLink to='#'>Blog</FeedLink>
                        </FeedList>

                    </FeedCol>
                    <FeedCol>
                        <FeedList isSocial={true}>
                            <FeedLink to='#'><FbIcon /></FeedLink>
                            <FeedLink to='#'><TwIcon /></FeedLink>
                            <FeedLink to='#'><InIcon /></FeedLink>
                            <FeedLink to='#'><GmIcon /></FeedLink>
                        </FeedList>

                    </FeedCol>
                </FeedRow>

                <FeedRow>
                    <FeedParagraph>
                        This webpage is Basically for collect important information of how to feed duck.</FeedParagraph>

                    <FeedSym to='/' islink={false} >
                        <FeedIcon />
                    Duck<strong>Feed</strong>
                    </FeedSym>
                </FeedRow>

            </FeedFooter>



        </>
    )
}


export default Footer
