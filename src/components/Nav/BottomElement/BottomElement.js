/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react';
import styled from 'styled-components'

const BottomElement = () => {
    return (
        <Container>
            <div> Gansa starter kit</div>
            <Ul>
                <li><a href="/">Home</a></li>
                <li><a href="/kontakt">Kontakt</a></li>
                <li><a href="#">spadlo</a></li>
                <li><a href="#">#</a></li>
            </Ul>
        </Container>
    )
}

export default BottomElement

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 40px;
    align-items: center;
    background-color: ${ ({theme}) => theme.iconColor};
    color: white;
    & a {
        color: white;
    }
    height: 40px;
`
const Ul = styled.ul`
    list-style-type:none;
    display: flex;
    & li{
        margin-right: 5px;
    }
`