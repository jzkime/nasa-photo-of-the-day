import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
width: 100%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
margin: 0 auto;
`
const StyledGit = styled.img`
    width: 5%;
`

export default function Footer(props) {

    return (
        <div className="footer-container">
            <a href="https://github.com/jzkime" rel='noreferrer' target="_blank" ><StyledGit src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /></a>
        </div>
    )
}