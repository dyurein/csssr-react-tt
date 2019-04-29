import React from 'react'
import styled from 'styled-components'
import {Container} from "../../../App";



const Story_section = styled.section`
     background: #d03958;
`
const Story_inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 31px 0 24px;
`
const Story_text = styled.p`
    font-family: "PTSerif";
    font-size: 20px;
    line-height: 28px;
    color: #fff;
    width: 60%;
    margin-left: 20px;
`
const Story_title = styled.h2`
    font-size: 22px;
    line-height: 28px;
    text-transform: uppercase;
    padding: 24px 70px;
    background: #e3d5b8;
    border-radius: 5px;
`


const Story = () => {
    return (
        <Story_section id="story">
            <Container>
                <Story_inner>
                    <Story_text>
                        We&nbsp;are in&nbsp;business for over 6&nbsp;years providing amazing
                        services to&nbsp;client and people love them to&nbsp;the core. View our story
                        to&nbsp;know more.
                    </Story_text>
                    <Story_title>Our story</Story_title>
                </Story_inner>
            </Container>
        </Story_section>
    )
}

export default Story;