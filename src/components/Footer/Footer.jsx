import React from 'react'
import styled from 'styled-components'
import logo from '../../images/Logo.png'
import {Container} from "../../App";

const Footer_wrap = styled.footer`
    background: #161616;
`
const Footer_inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 65px 0 70px;
`
const Footer_caption = styled.span`
    color: #fff;
    font-size: 20px;
    line-height: 22px;
    font-family: "PTSerif";
`
const Footer_caption_link = styled.a`
    color: #d03958;
    display: inline-block;
    margin-left: 5px;
    text-decoration: none;
`
const Logo_wrap = styled.div`
`
const Logo = styled.img`
    width: 100px;
`

const Footer = () => {
    return (
        <Footer_wrap>
            <Container>
                <Footer_inner>
                    <Footer_caption>All Rights Reserved |  2016  |  Designed with love by
                        <Footer_caption_link href="javascript:void(0)">DesignCoon</Footer_caption_link></Footer_caption>
                    <Logo_wrap>
                        <Logo src={logo} alt="logo"/>
                    </Logo_wrap>
                </Footer_inner>
            </Container>
        </Footer_wrap>


    )
}

export default Footer;