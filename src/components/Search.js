import React, { useEffect } from 'react'
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
    cursor: pointer;

    &hover {
        cursor: pointer;
    }
`

let count = 1;

export default function Search({ setWhatDo }) {


    const clearInput = () => {
        const dateInput = document.getElementById('enterDateInput')
        dateInput.value = "";
    }

    const changeThing = (evt) => {
        evt.preventDefault();
        console.log(evt)
        const dateInput = document.getElementById('enterDateInput')
        setWhatDo(`&date=${dateInput.value}`)
        clearInput()
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
              
            <form onSubmit={changeThing}>
                <StyledLabel>Search Date
                    <StyledInput type="text" id='enterDateInput' />

                    <StyledButton type="submit" > search date </StyledButton>
                </StyledLabel>
            <button type="button" onClick={() => setWhatDo("")}>reset</button>
            <button type='button' onClick={setRandom}>random</button>
            </form>
        </StyledSearch>
    )
}