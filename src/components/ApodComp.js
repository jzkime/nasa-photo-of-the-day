import React from 'react'
export default function ApodDiff({ apodToday }) {
  const { hdurl, copyright, title, date, explanation } = apodToday;

    return (
      <div className="apod-content">
      <div className='image-container'>
          <img src={hdurl} id="image-of-day" alt="random NASA APOD" />
          <p className='copyright'>&copy; {copyright}</p>
      </div>
      <div className="apod-info">
          <h3>{title}</h3>
          <p className='date'>{date}</p>
          <p className='explanation'>{explanation}</p>
      </div>
  </div>
    )
}