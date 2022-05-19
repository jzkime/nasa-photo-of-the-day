import React, { useState, useEffect } from 'react'
import { NASA_APOD } from '../constants/constants'
import ApodComp from './ApodComp'
import axios from 'axios'
export default function APOD(props) {
    const [ apodToday, setAPOD ] = useState(null);

    useEffect(() => {
        axios.get(`${NASA_APOD}`)
        .then((res) => {
          setAPOD(res.data)
        }).catch(err => console.error(err))
      }, [])
    
    return (
        apodToday ? <ApodComp  apodToday={apodToday} /> : <h3>Loading...</h3> 
    )
}