import React, { useState } from 'react'
import styled from 'styled-components'

const StyledSearch = styled.div`
    margin: 0 auto;
    margin-top: 1rem;
    width: 90%;
    border-radius: 10px;
    text-align: center;
    // height: 130px;
    color: ${pr => pr.theme.primaryColor};
`

const style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
}

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    width: 100%;
`

const StyledInput = styled.input`
    color: black;
    width: 50%;
`

const StyledButton = styled.button`
    width: 100px;
    background-color: ${pr => pr.theme.primaryColor};
    cursor: pointer;
    color: white;
    margin-top: 1rem;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        background-color: white;
        color: ${pr => pr.theme.otherColorCauseCan};
    }
`

let count = 1;

export default function Search({ setWhatDo }) {
    const [ hasSomething, setHasSomething ] = useState(null)
    const dateInput = document.getElementById('enterDateInput')

    const clearInput = () => {
        dateInput.value = "";
        setHasSomething(null)
    }

    const reset = () => {
        clearInput();
        setWhatDo("");
    }

    const changeThing = (evt) => {
        const val = dateInput.value;

        if( val[4] === "-" && val[7] === "-") {
            setWhatDo(`&date=${dateInput.value}`)
          }
        evt.preventDefault();
        clearInput()
    }

    const inputChange = () => {
        setHasSomething(dateInput.value)
    }

    const setRandom = () => {
        setWhatDo(`&count=${count}`)
        count = count === 1 ? 2 : 1;
    }

    return (
        <StyledSearch>
            <p>From the APOD page: <br/>
              Each day a different image or photograph of our fascinating universe is featured, <br/>
              along with a brief explanation written by a professional astronomer.</p>
              
            <form onSubmit={changeThing} style={style} >
                <StyledLabel>Search Date
                    <StyledInput type="text" id='enterDateInput' onChange={inputChange} placeholder="YYYY-MM-DD" />
                    
                    {hasSomething && <StyledButton type="submit" > search date </StyledButton> }
                </StyledLabel>
                <StyledButton type="button" onClick={reset}>reset</StyledButton>
                <StyledButton type='button' onClick={setRandom}>random</StyledButton>
            </form>
        </StyledSearch>
    )
}