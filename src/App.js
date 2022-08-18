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
`
function App() {
  const [ apodToday, setAPOD ] = useState([]);
  const [ whatDo, setWhatDo ] = useState("")
  const [ error, setError ] = useState("")

  useEffect(() => {

      axios.get(`${NASA_APOD}${whatDo}`)
      .then((res) => {
            setAPOD(res.data[0]? res.data[0] : res.data)
      }).catch((err) =>{
        console.log(err)
          setError(err.response.data.msg)
      } )
      
      return setError(false);
  }, [whatDo])

  return (
    <StyledAppCont>
      <Header />
      <Search setWhatDo={setWhatDo} whatDo={whatDo} setAPOD={setAPOD} />
      { error && <h2>{error}</h2>}

     { apodToday ? <APOD apodToday={apodToday} />  : <h1>loading...</h1> }
      <Footer />
    </StyledAppCont>
  );
}

export default App;
