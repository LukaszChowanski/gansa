import React from 'react'
import styled from 'styled-components'

const LeftColumn = () => {
    return ( 
        <Container>
            <h1>Przykładowa strona</h1>
            <p>To jest przykładowa strona. Strony są inne niż wpisy na blogu, ponieważ nie tylko znajdują się zawsze w jednym miejscu, ale także pojawiają się w menu witryny (w większości motywów). Większość użytkowników zaczyna od strony z informacjami o sobie, która zapozna ich przed odwiedzającymi witrynę. Taka strona może zawierać na przykład taki tekst:</p>
            <p>Cześć! Za dnia jestem kurierem rowerowym, nocą próbuję swoich sił w aktorstwie, a to jest moja witryna. Mieszkam w Krakowie, mam wspaniałego psa który wabi się Reks i lubię piña coladę (oraz spacery, gdy pada deszcz).</p>
            <p>…albo coś takiego:</p>
            <p>Firma XYZ Doohickey została założona w 1971 roku i od tamtej pory dostarcza społeczeństwu dobrej jakości gadżety. Znajdująca się w Gotham City XYZ zatrudnia ponad 2000 osób i robi niesamowite rzeczy dla społeczności Gotham.</p>
            <p>Jako nowy użytkownik WordPressa, powinieneś przejść do swojego kokpitu aby usunąć tę stronę i stworzyć nowe z własną treścią. Dobrej zabawy!</p>
        </Container>
     );
}
 
export default LeftColumn;

const Container = styled.div`
    text-align: left;
    padding: 0 40px;
    width: 100%;
    & h1 {
        padding: 30px 0;
    }
    & p {
        padding-bottom: 10px;
    }
`