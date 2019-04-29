import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../App";
import serv_heart from '../../../images/svg/heart.svg'
import serv_tools from '../../../images/svg/tools.svg'
import serv_bulb from '../../../images/svg/bulb.svg'
import serv_compass from '../../../images/svg/compass.svg'


const Pricing_section = styled.section`
    background: #e3d5b8;
    padding-top: 66px;
`
const Pricing_inner = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const Pricing_title = styled.h2`
    width: 100%;
    font-size: 50px;
    line-height: 80px;
    margin-bottom: 58px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
`
const Pricing_item = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 35px
    border-radius: 5px;
    background: #fff;
    width: calc(33.3% - 22px);
    &:nth-child(2) {
        margin-left: 20px;
    }
    &:nth-child(3) {
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            border: 50px solid transparent;
            border-left: 50px solid #b4a993;
            border-top: 50px solid #b4a993;
            border-radius: 5px 0 0 0;
        }
    }
`
const Pricing_item_pop = styled.span`
    font-size: 16px;
    line-height: 28px;
    font-family: "PTSerif";
    position: absolute;
    left: 3px;
    top: 18px;
    transform: rotate(-45deg);
`
const Pricing_item_title = styled.span`
    font-size: 22px;
    line-height: 28px;
    font-family: "PTSerif";
    display: inline-block;
    margin-bottom: 41px;
`
const Pricing_item_price = styled.span`
    font-size: 60px;
    line-height: 80px;
    font-weight: bold;
    color: #d03958;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 31px;
`
const Pricing_item_benefit = styled.span`
    font-size: 22px;
    line-height: 28px;
    font-family: "PTSerif";
    display: inline-block;
    margin-bottom: 11px;
    &:last-child {
        margin-bottom: 0;
    }
`
const Pricing_item_link = styled.a`
    width: 205px;
    padding: 18px 0 15px;
    margin-top: 34px;
    font-size: 22px;
    line-height: 28px;
    font-weight: bold;
    text-transform: uppercase;
    background: ${props => props.primary ? "#d03958" : "#e3d5b8"};
    color: ${props => props.primary ? "#fff" : "inherit"};
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
`



const Pricing = () => {
    return (
        <Pricing_section id="pricing">
            <Container>
                <Pricing_inner>
                    <Pricing_title>Pricing</Pricing_title>
                    <Pricing_item>
                        <Pricing_item_title>Starter</Pricing_item_title>
                        <Pricing_item_price>Free</Pricing_item_price>
                        <Pricing_item_benefit>Free Service</Pricing_item_benefit>
                        <Pricing_item_benefit>Multiple Accounts</Pricing_item_benefit>
                        <Pricing_item_benefit>Management No</Pricing_item_benefit>
                        <Pricing_item_benefit>&mdash;</Pricing_item_benefit>
                        <Pricing_item_benefit>&mdash;</Pricing_item_benefit>
                        <Pricing_item_link href="javascript:void(0)">Try</Pricing_item_link>
                    </Pricing_item>
                    <Pricing_item>
                        <Pricing_item_pop>Popular</Pricing_item_pop>
                        <Pricing_item_title>Business</Pricing_item_title>
                        <Pricing_item_price>$97</Pricing_item_price>
                        <Pricing_item_benefit>Free Service</Pricing_item_benefit>
                        <Pricing_item_benefit>Multiple Accounts</Pricing_item_benefit>
                        <Pricing_item_benefit>Management No</Pricing_item_benefit>
                        <Pricing_item_benefit>Unlimited Data</Pricing_item_benefit>
                        <Pricing_item_benefit>--</Pricing_item_benefit>
                        <Pricing_item_link href="javascript:void(0)" primary>Sign up</Pricing_item_link>
                    </Pricing_item>
                    <Pricing_item>
                        <Pricing_item_title>Professional</Pricing_item_title>
                        <Pricing_item_price>$297</Pricing_item_price>
                        <Pricing_item_benefit>Free Service</Pricing_item_benefit>
                        <Pricing_item_benefit>Multiple Accounts</Pricing_item_benefit>
                        <Pricing_item_benefit>Management No</Pricing_item_benefit>
                        <Pricing_item_benefit>Unlimited Data</Pricing_item_benefit>
                        <Pricing_item_benefit>Whatever You Need</Pricing_item_benefit>
                        <Pricing_item_link href="javascript:void(0)">Sign up</Pricing_item_link>
                    </Pricing_item>
                </Pricing_inner>
            </Container>
        </Pricing_section>
    )
}

export default Pricing;