import React from 'react'
import styled from 'styled-components'

const MapSection = () => {
    return (
        <StyledSection>
            <h2>Jakis Tytuł</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus nihil,
                voluptatibus perspiciatis ex corporis vel optio? Eligendi eius repudiandae
                aspernatur suscipit sint, fugiat quo quisquam voluptatibus optio consequuntur
                reiciendis et. Non, aperiam eaque quod, voluptatem officiis dolore illo ipsa
                maxime aliquid pariatur aut iure nihil placeat perspiciatis rerum? Dicta
                doloremque aspernatur placeat hic, ut explicabo earum ducimus porro accusantium
                beatae! Aliquid enim, velit architecto est doloremque repudiandae accusamus
                beatae illo esse autem blanditiis itaque nemo quam impedit culpa similique,
                animi laboriosam facilis. Cum, possimus enim eveniet quae repellat sit
                exercitationem. Quasi dicta ullam enim. Aspernatur porro laborum veniam
                iusto amet officia pariatur fugiat, aut, laboriosam inventore minima perferendis
                numquam rerum officiis harum. Itaque doloribus non quis mollitia assumenda?
                Reiciendis, incidunt.
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2395.1850275742813!2d23.19119211582946!3d53.10687007992959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffbea17e759cf%3A0xbd9e1d59e202611e!2sgansa.pl%20%7C%20agencja%20interaktywna!5e0!3m2!1spl!2spl!4v1610654381303!5m2!1spl!2spl"
             frameborder="0" 
             allowfullscreen="" 
             aria-hidden="false" 
             tabindex="0"
             title="gansaMap"></iframe>
        </StyledSection>
    )
}
export default MapSection

const StyledSection = styled.section`
    padding: 0 40px;
    display: flex;
    align-items: start;
    flex-direction: column;
    & p {
        padding: 20px 0;
        text-align: left;
    }
    & iframe {
        width: 100%;
        height: 450px;
    }
`