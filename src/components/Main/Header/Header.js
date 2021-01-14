import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return(
        <StyledHeader>
            <h1>Kontakt</h1>
            <p>But I must explain to you how all this mistaken idea of 
                denouncing pleasure and praising pain was born and I will  
                give you a complete account of the system, and expound
                the actual teachings of the great explorer of the truth,
                the master-builder of human happiness.</p>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.header`
    padding: 15px 40px;
    text-align: left;
    background-image: url('http://nas.gansa.pl/2020/gansa-starterkit/wp-content/uploads/2021/01/cropped-woman-2773007_1280.jpg') ;
`

