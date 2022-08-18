import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    background-color: ${pr => pr.theme.primaryColor};
    padding: 1%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

export default function Footer() {

    return (
        <StyledFooter className='footer-container'>
            <a href="https://github.com/jzkime/nasa-photo-of-the-day" rel='noreferrer' target="_blank" alt='github repository' ><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /></a>
        </StyledFooter>
    )
}