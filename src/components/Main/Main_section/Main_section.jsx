import React from 'react'
import styled from 'styled-components'
import main_image from '../../../images/main-section.jpg'
import {Container} from "../../../App";

const Front_section = styled.section`
    background: url(${main_image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    padding-bottom: 165px;
`
const Front_inner = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
`
const Front_text = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 186px;
    margin-left: 20px;
    flex-basis: 50%;
`
const Front_title = styled.h1`
    font-size: 90px;
    line-height: 80px;
    color: #161616;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
`
const Front_title_pink = styled.span`
    font-size: 90px;
    line-height: 80px;
    color: #d03958;
`
const Front_caption = styled.p`
    font-size: 20px;
    line-height: 28px;
    font-family: 'PTSerif';
`
const Front_form = styled.form`
    margin-top: 186px;
    display: flex;
    flex-direction: column;
    background: #d03958;
    padding: 28px 24px;
    border-radius: 5px;
    max-width: 354px;
    flex-basis: 50%;
    position: absolute;
    right: 0;
`
const Front_form_title = styled.span`
    font-size: 22px;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 37px;
    display: inline-block;
    text-align: center;
`
const Front_form_input = styled.input`
    font-family: 'PTSerif';
    background: #fff;
    border-radius: 5px;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 15px;
    padding: 19px;
    outline: none;
    border: none;
    &::placeholder {
        color: #b5b5b5;
    }
`
const Front_form_terms = styled.div`
    display: flex;
    align-items: center;
`
const Front_form_checkbox = styled.input`
    margin-right: 23px;
    &:not(:checked),
    &:checked {
         position: absolute;
         left: -9999px;
    }
    &:not(:checked) + label,
    &:checked + label {
         position: relative;
         padding-left: 1.95em;
         cursor: pointer;
    }
    &:not(:checked) + label:before,
    &:checked + label:before {
         content: '';
         position: absolute;
         left: 0;
         top: 2px;
         width: 20px;
         height: 20px;
         border: none;
         background: #fff;
         border-radius: 5px;
         box-shadow: inset 0 1px 3px rgba(0,0,0,.1);
    }
    &:not(:checked) + label:after,
    &:checked + label:after {
         content: '\\2713\\0020';
         position: absolute;
         top: 5px;
         left: 4px;
         font-size: 18px;
         line-height: 0.8;
         color: #161616;
         transition: all .2s;
         font-family: 'Lucida Sans Unicode', 'Arial Unicode MS', Arial;
    }
    &:not(:checked) + label:after {
         opacity: 0;
         transform: scale(0);
    }
    &:checked + label:after {
         opacity: 1;
         transform: scale(1);
    }
`
const Front_form_label = styled.label`
    font-size: 20px;
    line-height: 25px;
    color: #fff;
    font-family: "PTSerif";
    cursor: pointer;
`
const Front_form_submit = styled.button`
    width: 100%;
    background: #161616;
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    border: none;
    padding: 20px 0;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
`

const Main_section = () => {
    return (
        <Front_section id="main">
            <Container>
                <Front_inner>
                    <Front_text>
                        <Front_title><Front_title_pink>Travel is</Front_title_pink>beautiful</Front_title>
                        <Front_caption>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Front_caption>
                    </Front_text>
                    <Front_form>
                        <Front_form_title>Request a quote</Front_form_title>
                        <Front_form_input type="text" placeholder="Full Name"></Front_form_input>
                        <Front_form_input type="text" placeholder="Email Adress"></Front_form_input>
                        <Front_form_input type="text" placeholder="Phone Number"></Front_form_input>
                        <Front_form_input type="text" placeholder="Country"></Front_form_input>
                        <Front_form_terms>
                            <Front_form_checkbox type="checkbox" id="form_checkbox"/>
                            <Front_form_label for="form_checkbox">I accept the terms & conditions</Front_form_label>
                        </Front_form_terms>
                        <Front_form_submit type="submit">Send</Front_form_submit>

                    </Front_form>
                </Front_inner>
            </Container>
        </Front_section>
    )
}

export default Main_section;