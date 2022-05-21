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
  let today = new Date();
  today = today.toISOString().split('T')[0];
  const [ apodToday, setAPOD ] = useState(today);
  const [ whatDo, setWhatDo ] = useState("")

  useEffect(() => {
          axios.get(`${NASA_APOD}${whatDo}`)
          .then((res) => {
                setAPOD(res.data[0]? res.data[0] : res.data)
                // console.log(res.data, whatDo)
          }).catch(err => console.error(err + " hello, this is wrong"))
      
  }, [whatDo])

  return (
    <StyledAppCont>
      <Header />
      <Search setWhatDo={setWhatDo} whatDo={whatDo} setAPOD={setAPOD} />
     { apodToday ? <APOD apodToday={apodToday} />  : <h1>loading...</h1> }
      <Footer />
    </StyledAppCont>
  );
}

export default App;
