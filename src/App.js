import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import styled from 'styled-components'


const Body = styled.body`
        font-family: "Montserrat";
        margin: 0 auto;
        color: #161616;
        box-sizing: border-box;
`
export const Container = styled.div`
    max-width: 1010px;
    margin: 0 auto;
`
function App() {

    return (
        <Body>
            <Header/>
            <Main />
            <Footer />
        </Body>
    );
}

export default App;
