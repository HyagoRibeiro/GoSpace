import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import './scrollbar.css';

import BackgroundImage from './../../images/background-home.jpg';
import { Background, ContainerListUser, Overlay, ButtonApply, ContainerTrip, TripSingle, TitleTrip,
  InfoTrip, ButtonDetailTrip } from './styled';

function FormPage(props) {
  const history = useHistory();
  
  const [listTrips, setListTrips] = useState([]);
  
    useEffect(() => {
      axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/hyago-turing/trips')
      .then((response) => {
        setListTrips(response.data.trips)
      }).catch((error) => {
        console.log(error.message)
      })
    }, [])

  console.log(listTrips)

  const goToApply = (tripId, tripName) => {
    history.push(`/formulario-inscricao/${tripId}/${tripName}`)
  }

  const goToHome = () => {
    history.push("/")
  }
  return (
    <Background BackgroundImage={BackgroundImage}>
      <Overlay>
        <ButtonApply onClick={goToHome}>Voltar</ButtonApply>
        <ContainerListUser className="scrollbar scrollbar-primary">
          <h2>Viagens vigentes</h2>
          {listTrips.map(trip => {
          return (
            <ContainerTrip key={trip.id}>
              <TripSingle>
                <TitleTrip>{trip.name}</TitleTrip>
                <InfoTrip><strong>Planeta:</strong> {trip.planet}</InfoTrip>
                <InfoTrip><strong>Data de partida:</strong> {trip.date}</InfoTrip>
                <InfoTrip><strong>Duração da viagem:</strong> {trip.durationInDays} dias</InfoTrip>
                <InfoTrip><strong>{trip.description}</strong></InfoTrip>
              </TripSingle>
              <ButtonDetailTrip onClick={() => goToApply(trip.id, trip.name)}>Inscreva-se</ButtonDetailTrip>
            </ContainerTrip>
          );
        })}
        </ContainerListUser>
      </Overlay>
    </Background>
  );
}

export default FormPage;
