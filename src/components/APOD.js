import React from 'react'
import ApodComp from './ApodComp'
import styled from 'styled-components'

const StyledAPOD = styled.div`
    width: 90%
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`
export default function APOD(props) {
    const { apodToday, searchDate } = props;
    return (
        <StyledAPOD>
           { apodToday ? <ApodComp apodToday={apodToday}/> : <h1>loading</h1> }
        </StyledAPOD>
    )
}