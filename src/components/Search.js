import React from 'react'
import styled from 'styled-components'

const StyledSearch = styled.div`
margin: 0 auto;
margin-top: 1rem;
width: 90%;
border-radius: 10px;
text-align: center;
height: 130px;
color: ${pr => pr.theme.primaryColor};
`

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
`

const StyledInput = styled.input`
color: black;
width: 50%;
`

const StyledButton = styled.button`
    width: 10%;
    background-color: ${pr => pr.theme.background};
`

export default function Search({setSearchDate, setAPOD }) {

    const changeDate = (evt) => {
        if(evt.key === "Enter") setSearchDate(evt.target.value)
    }

    const reset = () => {
        setAPOD(null)
    }

    return (
        <StyledSearch>
            <p>From the APOD page: <br/>
              Each day a different image or photograph of our fascinating universe is featured, <br/>
              along with a brief explanation written by a professional astronomer.</p>

            <StyledLabel>Search Date
                <StyledInput type="text" onKeyDown={changeDate} placeholder="YYYY-MM-DD" id="dateInput"/>
                <StyledButton onClick={reset}>reset</StyledButton>
            </StyledLabel>
        </StyledSearch>
    )
}