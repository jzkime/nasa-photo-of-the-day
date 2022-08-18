import React from 'react'
import styled from 'styled-components'

const StyledInfo = styled.div`
  width: 90%;
  margin: 1rem;
  text-align: start;
  background-color: ${pr => pr.theme.tertiary};
  padding: 1.4rem;
  border-radius: 10px;
  color: ${pr => pr.theme.background};
}
`

const StyledImage = styled.img`
  width: 60vw;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`
const StyledVid = styled.iframe`
  height: 70vh;
  width: 70vw;
  transition: all 0.3s;
`

export default function ApodComp(props) {
  const { apodToday } = props
  const { hdurl, copyright, title, date, explanation, media_type, url } = apodToday;

    return (
      <div className="apod-content">
      <div className='image-container'>
        {media_type === "video" ? 
          <StyledVid src={url} className="image-of-day"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          sandbox="allow-popups allow-scripts allow-popups-to-escape-sandbox allow-same-origin allow-presentation" >
          </StyledVid>
        :
          <StyledImage src={url} className="image-of-day" alt="random NASA Astrology Photo of the Day" />
        }
          <p className='copyright'>&copy; {copyright}</p>
      </div>
      <StyledInfo className='desc-container'>
          <h3>{title}</h3>
          <p className='date'>{date}</p>
          <p className='explanation'>{explanation}</p>
          {media_type === "image" && <a href={hdurl} target='no_blank'>high-definition ver</a>}
      </StyledInfo>
  </div>
    )
}