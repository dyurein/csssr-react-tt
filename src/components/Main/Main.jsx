import React from 'react'
import styled from 'styled-components'
import Main_section from "./Main_section/Main_section";
import Services from "./Services/Services";
import Story from "./Story/Story";
import Pricing from "./Pricing/Pricing";
import Last_section from "./Last_section/Last_section";

const Main_wrap = styled.main`
`


const Main = () => {
    return (
        <Main_wrap>
            <Main_section />
            <Services/>
            <Story/>
            <Pricing/>
            <Last_section />
        </Main_wrap>
    )
}

export default Main;