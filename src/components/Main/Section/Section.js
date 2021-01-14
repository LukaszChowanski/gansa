import React from 'react'
import styled from 'styled-components'

import LeftColumn from './LeftColumn/LeftColumn'
import RightColumn from './RightColumn/RightColumn'

const Section = () => {
    return (
        <StyledSection>
            <LeftColumn/>
            <RightColumn/>
        </StyledSection>
    )
}

export default Section

const StyledSection = styled.section`
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 0 40px;
`