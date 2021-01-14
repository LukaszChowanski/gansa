import React from 'react';
import styled from 'styled-components'

import Header from './Header/Header'
import Section from './Section/Section'
import MapSection from './MapSection/MapSection.js'

const ContactPage = () => {
    return(
        <Container>
            <Header/>
            <Section/>
            <MapSection/>
        </Container>

    )
}

export default ContactPage

const Container = styled.div`
    width: 100%;
`
