import React from 'react';
import styled from 'styled-components'

import Header from './Header/Header'
import Section from './Section/Section'
import Map from './Map/Map.js'

const Main = () => {
    return(
        <Container>
            <Header/>
            <Section/>
            {/* <Map/> */}
        </Container>

    )
}

export default Main

const Container = styled.div`
    width: 100%;
`
