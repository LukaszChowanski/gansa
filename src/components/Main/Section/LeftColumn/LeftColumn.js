import React from 'react'
import styled from 'styled-components'

import Header from './Header/Header'
import CompanyDetails from './CompanyDetails/CompanyDetails'

const LeftColumn = () => {
    return(
        <StyledSection>
            <Header/>
            <CompanyDetails/>
        </StyledSection>
    )
}
export default LeftColumn

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    text-align: left;
    padding: 30px 10px;
    & h2{
        padding-bottom: 10px;
    }
`