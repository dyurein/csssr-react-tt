import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../App";
import photo_1 from '../../../images/photo_1.png';
import photo_2 from '../../../images/photo_2.png';
import photo_3 from '../../../images/photo_3.png';
import photo_4 from '../../../images/photo_4.png';
import photo_5 from '../../../images/photo_5.png';
import photo_6 from '../../../images/photo_6.png';
import photo_7 from '../../../images/photo_7.png';
import photo_8 from '../../../images/photo_8.png';


const Last_section = styled.section`
    
`
const Last_inner = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 152px;
    margin-bottom: 119px;
    align-items: flex-start;
`
const Testimonial = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
`
const Testimonial_inner = styled.div`
    border-radius: 5px;
    padding: 26px 77px 27px 25px;
    position: relative;
    &:nth-child(3) {
        background: #e3d5b8;
    }
`
const Testimonial_title = styled.h2`
    font-size: 50px;
    line-height: 80px;
    margin-top: 0;
    margin-bottom: 32px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
`
const Testimonial_text = styled.p`
    font-size: 20px;
    line-height: 22px;
    font-family: "PTSerif";
`
const Testimonial_photo = styled.img`
    float: right;
    position: absolute;
    right: -58px;
    top: 0;
`
const Testimonial_caption = styled.span`
    font-size: 20px;
    line-height: 28px;
    color: #d03958;
    margin-top: 24px;
    display: inline-block;
`
const Gallery = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
const Gallery_title = styled.h2`
    font-size: 50px;
    line-height: 80px;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    color: #d03958;
`
const Gallery_image_wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 26px;
`
const Gallery_image = styled.img`
`
const Gallery_link = styled.a`
    font-size: 20px;
    line-height: 28px;
    text-transform: uppercase;
    text-align: center;
    color: #d03958;
    text-decoration: none;
    border-bottom: 1px solid #d03958;
    font-weight: bold;
    margin-top: 47px;
    display: inline-block;
    width: max-content;
`


const Other_section = () => {
    return (
        <Last_section id="last">
            <Container>
                <Last_inner>
                    <Testimonial>
                        <Testimonial_title>Testimonial</Testimonial_title>
                        <Testimonial_inner>
                            <Testimonial_text>I&nbsp;have been involved with this comapny for ages and just want
                                to&nbsp;say this is&nbsp;a&nbsp;great work by&nbsp;designcoon.</Testimonial_text>
                            <Testimonial_photo src={photo_1} alt="Photo"/>
                            <Testimonial_caption>DJ Bravo - Frequent Travelera</Testimonial_caption>
                        </Testimonial_inner>
                        <Testimonial_inner>
                            <Testimonial_text>I&nbsp;have been involved with this comapny for ages and
                                just.</Testimonial_text>
                            <Testimonial_photo src={photo_2} alt="Photo"/>
                            <Testimonial_caption>DJ Bravo - Frequent Travelera</Testimonial_caption>
                        </Testimonial_inner>
                    </Testimonial>
                    <Gallery>
                        <Gallery_title>Gallery</Gallery_title>
                        <Gallery_image_wrap>
                            <Gallery_image src={photo_3} alt="Gallery_image"/>
                            <Gallery_image src={photo_4} alt="Gallery_image"/>
                            <Gallery_image src={photo_5} alt="Gallery_image"/>
                            <Gallery_image src={photo_6} alt="Gallery_image"/>
                            <Gallery_image src={photo_7} alt="Gallery_image"/>
                            <Gallery_image src={photo_8} alt="Gallery_image"/>
                        </Gallery_image_wrap>
                        <Gallery_link href="javascript:void(0)">View more pictures</Gallery_link>
                    </Gallery>
                </Last_inner>
            </Container>
        </Last_section>
    )
}

export default Other_section;