import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";


import Form from './../Form/Form';
import BackgroundImage from './../../images/background-home.jpg';
import { Background, ContainerHome, Overlay, ButtonBackToHome } from './style';

function FormPage(props) {
  const history = useHistory();
  const [listTrips, setListTrips] = useState([]);
  const pathParams = useParams();
  console.log(pathParams)
  
    useEffect(() => {
      axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/hyago-turing/trips')
      .then((response) => {
        setListTrips(response.data.trips)
      }).catch((error) => {
        console.log(error.message)
      })
    }, [])

  const goToHome = () => {
    history.push("/viagens")
  }
  return (
    <Background BackgroundImage={BackgroundImage}>
      <Overlay>
        <ContainerHome>
          <ButtonBackToHome onClick={goToHome}>Voltar</ButtonBackToHome>
          <h2>{pathParams.tripName}</h2>
          <Form tripsList={listTrips} />
        </ContainerHome>
      </Overlay>
    </Background>
  );
}

export default FormPage;
