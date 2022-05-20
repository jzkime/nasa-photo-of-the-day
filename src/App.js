import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './components/Header'
import APOD from './components/APOD'
import Footer from './components/Footer'
import styled from 'styled-components'
import { NASA_APOD } from './constants/constants'
import axios from 'axios'
import Search from './components/Search'

const StyledAppCont = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: ${pr => pr.theme.background};
  padding: 2%;
`
function App() {
  const [ apodToday, setAPOD ] = useState(null);
  const [ searchDate, setSearchDate ] = useState("");

  useEffect(() => {
    if(apodToday === null){
      axios.get(`${NASA_APOD}`)
      .then((res) => {
        setAPOD(res.data)
      }).catch(err => console.error(err))
    }
    }, [apodToday])

  useEffect(() => {
      if(searchDate === "") {return setAPOD(null)};

      if(searchDate[4] === "-" && searchDate[7] === "-") {
          const looking = "&date=" + searchDate
          axios.get(`${NASA_APOD}${looking}`)
          .then((res) => {
                setAPOD(res.data)
          }).catch(err => console.error(err + " hello, this is wrong"))
      }
      return () => {
        setSearchDate("");
      } 
  }, [searchDate])

  return (
    <StyledAppCont>
      <Header />
      <Search setSearchDate={setSearchDate} searchDate={searchDate} setAPOD={setAPOD} />
     { apodToday ? <APOD searchDate={searchDate} apodToday={apodToday} />  : <h1>loading...</h1> }
      <Footer />
    </StyledAppCont>
  );
}

export default App;
