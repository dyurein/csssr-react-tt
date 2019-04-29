import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../App";
import serv_heart from '../../../images/svg/heart.svg'
import serv_tools from '../../../images/svg/tools.svg'
import serv_bulb from '../../../images/svg/bulb.svg'
import serv_compass from '../../../images/svg/compass.svg'


const Services_section = styled.section`
    padding-bottom: 73px;
`
const Services_inner = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const Services_title = styled.h2`
    width: 100%;
    font-family: "Couture";
    font-size: 50px;
    line-height: 80px;
    margin-bottom: 95px;
    padding-left: 20px;
`
const Services_title_pink = styled.span`
    color: #d03958;
    margin-right: 16px;
    display: inline-block;
`
const Services_item = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 19%;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    &:last-child {
        padding-right: 0;
    }
`
const Services_image = styled.img`
   
`
const Services_caption = styled.span`
    display: inline-block;
    margin-top: 45px;
    text-align: center;
    font-size: 20px;
    line-height: 28px;
    font-family: "PTSerif";
    color: #161616;
`

const Services = () => {
    return (
        <Services_section id="services">
            <Container>
                <Services_inner>
                    <Services_title><Services_title_pink>Our</Services_title_pink>Services</Services_title>
                    <Services_item>
                        <Services_image src={serv_heart} alt="service-image"/>
                        <Services_caption>Making your trip beautiful and easier</Services_caption>
                    </Services_item>
                    <Services_item>
                        <Services_image src={serv_tools} alt="service-image"/>
                        <Services_caption>Tools to&nbsp;help you succeed tomorrow</Services_caption>
                    </Services_item>
                    <Services_item>
                        <Services_image src={serv_bulb} alt="service-image"/>
                        <Services_caption>Ideas that will blow you out the blue.</Services_caption>
                    </Services_item>
                    <Services_item>
                        <Services_image src={serv_compass} alt="service-image"/>
                        <Services_caption>Navigate your path to&nbsp;beautiful world.</Services_caption>
                    </Services_item>
                </Services_inner>
            </Container>
        </Services_section>
    )
}

export default Services;