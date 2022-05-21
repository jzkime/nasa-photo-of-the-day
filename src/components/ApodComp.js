import React from 'react'
import styled from 'styled-components'

const StyledInfo = styled.div`
  width: 90%;
  margin: 1rem;
  text-align: start;
  background-color: ${pr => pr.theme.primaryColor};
  padding: 1.4rem;
  border-radius: 10px;
  color: ${pr => pr.theme.otherColorCauseCan};

  transition: 0.2s;

  &:hover {
    transform: scale(1.01);
    transition: 0.2s
}
`

const StyledImage = styled.img`
  width: 70vw;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`

export default function ApodComp(props) {
  const { apodToday } = props
  const { hdurl, copyright, title, date, explanation } = apodToday;

    return (
      <div className="apod-content">
      <div className='image-container'>
          <StyledImage src={hdurl} id="image-of-day" alt="random NASA APOD" />
          <p className='copyright'>&copy; {copyright}</p>
      </div>
      <StyledInfo>
          <h3>{title}</h3>
          <p className='date'>{date}</p>
          <p className='explanation'>{explanation}</p>
      </StyledInfo>
  </div>
    )
}