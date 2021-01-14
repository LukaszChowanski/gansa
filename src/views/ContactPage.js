import React from 'react';
import styled from 'styled-components'

import Nav from '../components/Nav/Nav'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'

const ContactPage = () => {
    return (
        <MainContainer>
            <Nav/>
            <Main/>
            <Footer/>
        </MainContainer>
    )

}

export default ContactPage

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1140px;
`