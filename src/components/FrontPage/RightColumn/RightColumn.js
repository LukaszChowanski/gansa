import React from 'react'
import styled from 'styled-components'

const RightColumn = () => {
    return ( 
        <Container>
            <FindContainer>
                <input type="text" placeholder="Szukaj..."/>
                <button type="submit">Szukaj</button>
            </FindContainer>
            <NewPost>
                <h2>Najnowsze wpisy</h2>
                <ul>
                    <li>
                        <a href="#">Witaj, świecie!</a>
                    </li>
                </ul>
            </NewPost>
            <NewComments>
                <h2>Najnowsze komentarze</h2>
                <ul>
                    <li><a href="#">Komentator WordPress o Witaj, świecie!</a></li>
                </ul>
            </NewComments>

        </Container>
     )
}
 
export default RightColumn

const Container = styled.div`
    text-align: left;
    padding: 40px 40px 0 0;
    width: 100%;
    & h1 {
        padding: 30px 0;
    }
    & p {
        padding-bottom: 10px;
    }
`
const FindContainer = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
    height: 30px;
    & input {
        padding: 5px;
    }
    & button {
        background-color: ${ ({ theme }) => theme.iconColor || 'green' };
        color: white;
        border: none;
    }
`
const NewPost = styled.div`
    padding-top: 40px; 
    & h2 {
        font-size: 24px;
        padding-bottom: 15px;
    }
    & li {
        margin-left: 35px;
    }
    & a {
        color: ${ ({theme}) => theme.iconColor || 'green'};
    }
`

const NewComments = styled(NewPost)`
`