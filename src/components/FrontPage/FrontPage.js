import React from 'react'
import styled from 'styled-components'

import LeftColumn from './LeftColumn/LeftColumn'
import RightColumn from './RightColumn/RightColumn'

const FrontPage = () => {
    return(
        <StyledMain>
            <LeftColumn/>
            <RightColumn/>
        </StyledMain>
    )
}
export default FrontPage

const StyledMain = styled.main`
    display: grid;
    grid-template-columns: 70% 30%; 
    margin: 0 auto;
    max-width: 1140px;
    & h1 {
        font-size: 62px;
    }
`