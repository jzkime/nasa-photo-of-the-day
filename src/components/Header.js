import React from 'react'
import styled from 'styled-components'

    const StyledHeader = styled.div`
        color: ${pr => pr.theme.primaryColor};
        padding: 3%;
        display: flex;
        justify-content: space-around;
        background-color: ${props => props.theme.primaryColor};
        align-items: center;
        height: 80px;
        width: 100vw;
        margin: 0 auto;
        align-text: center;

        a {
            color: ${pr => pr.theme.tertiary};
        }
    `

export default function Header() {

    return (
        <StyledHeader>
            <a href="https://api.nasa.gov/" rel="noreferrer" target="_blank"><h1 className="title">Astonomy Picture of the Day</h1></a>
      </StyledHeader>
    )
}