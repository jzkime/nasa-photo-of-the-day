import React from 'react'
import styled from 'styled-components'

    const StyledHeader = styled.div`
        color: ${pr => pr.theme.otherColorCauseCan};
        display: flex;
        justify-content: space-around;
        background-color: ${props => props.theme.primaryColor};
        align-items: center;
        height: 80px;
        width: 90vw;
        margin: 0 auto;
        align-text: center;
        border-radius: 15px;

        a {
            color: ${pr => pr.theme.otherColorCauseCan};
        }
    `

export default function Header(props) {

    return (
        <StyledHeader>
            <a href="https://api.nasa.gov/" rel="noreferrer" target="_blank"><h1 className="title">Astonomy Picture of the Day</h1></a>
      </StyledHeader>
    )
}