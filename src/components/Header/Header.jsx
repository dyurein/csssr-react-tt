import React from 'react'
import styled from 'styled-components'
import logo from '../../images/Logo.png'
import {Container} from "../../App";
import {Link} from 'react-scroll'

const Header_wrap = styled.header`
   position: absolute;
   width: 100%;
   top: 36px;
   z-index: 5;
`
const Header_inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo_wrap = styled.div`
    margin-left: 20px;
`
const Logo = styled.img`
`
const Header_nav_wrap = styled.nav`
`
const Header_nav_list = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
`
const Header_nav_item = styled.li`
    margin-right: ${props => props.primary ? "18px" : "33px"};
    padding: ${props => props.primary ? "12px 15px" : "0"};
    border-radius: 5px;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    font-weight: bold;
    color: ${props => props.primary ? "#fff" : "#1b1b1b"};
    background: ${props => props.primary ? "#d03958" : "transperent"};
    cursor: pointer;
    &:last-child {
        margin-right: 0;
    }
    
`

const Header = () => {
    return (
        <Header_wrap>
            <Container>
                <Header_inner>
                    <Logo_wrap>
                        <Logo src={logo} alt="logo"/>
                    </Logo_wrap>
                    <Header_nav_wrap>
                        <Header_nav_list>
                            <Header_nav_item>
                                <Link activeClass="active"
                                      to="main"
                                      spy={true}
                                      smooth={true}
                                      offset={0}
                                      duration={500}>
                                    Home
                                </Link>
                            </Header_nav_item>
                            <Header_nav_item>
                                <Link activeClass="active"
                                      to="story"
                                      spy={true}
                                      smooth={true}
                                      offset={0}
                                      duration={500}>
                                    About
                                </Link>
                            </Header_nav_item>
                            <Header_nav_item>
                                <Link activeClass="active"
                                      to="services"
                                      spy={true}
                                      smooth={true}
                                      offset={0}
                                      duration={500}>
                                    Services
                                </Link>
                            </Header_nav_item>
                            <Header_nav_item>
                                <Link activeClass="active"
                                      to="last"
                                      spy={true}
                                      smooth={true}
                                      offset={0}
                                      duration={500}>
                                    Gallery
                                </Link>
                            </Header_nav_item>
                            <Header_nav_item>
                                <Link activeClass="active"
                                      to="contact"
                                      spy={true}
                                      smooth={true}
                                      offset={0}
                                      duration={500}>
                                    Contact
                                </Link>
                            </Header_nav_item>
                        </Header_nav_list>
                    </Header_nav_wrap>
                </Header_inner>
            </Container>
        </Header_wrap>


    )
}

export default Header;