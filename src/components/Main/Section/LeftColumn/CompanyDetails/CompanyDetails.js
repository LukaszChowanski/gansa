/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import SocialMediaContainer from '../../../../SharedComponents/SocialMediaContainer'

const CompanDetails = () => {
    return (
        <>
            <CompanyContact>
            <h3>Dane kontaktowe</h3>
                <Ul>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faMapMarker}/>
                        </a>
                        <p> Lorem ipsum dolor sit amet </p>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </a>
                        <p> lorem@gansa.pl </p>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faPhone}/>
                        </a>
                        <p> +48 999 999 999 </p>
                    </li>
                </Ul>
            </CompanyContact>
            <SocialMedia>
                <h3>Social media</h3>
                <SocialMediaContainer facebook instagram twitter youtube size="32px"/>
            </SocialMedia>
        </>
    )
}

export default CompanDetails

const CompanyContact = styled.div`
    width: 100%;
    margin-left: 8%;
    padding: 20px;
    & h3{
        padding-bottom: 20px;
    }
`
const Ul = styled.ul`
    margin-left: 8%;
    list-style-type: none;
    & li {
        display: grid;
        grid-template-columns: 25px auto;
        padding-bottom: 10px;
    }
`
// use previous styled component
const SocialMedia = styled(CompanyContact)`
    & ul:nth-child(2){
        margin-left: 8%;
    }
`