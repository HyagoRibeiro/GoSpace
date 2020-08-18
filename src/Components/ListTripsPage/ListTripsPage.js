import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import './scrollbar.css';
import useProtect from './../hooks/useProtect';
import BackgroundImage from './../../images/background-home.jpg';
import { Background, Overlay, ContainerListAdm, ContainerTrip, TripSingle, TitleTrip,
InfoTrip, ButtonDetailTrip, ButtonDeleteTrip, ButtonCreateTrip, TitlePage } from './style';


function ListTripsPage() {
  const history = useHistory();
  
  const listTrips = useProtect(
    'https://us-central1-labenu-apis.cloudfunctions.net/labeX/hyago-turing/trips',
    [], 'trips');

  const DeleteTrip = (tripId) => {

    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/hyago-turing/trips/${tripId}`)
      .then(() => {
        alert("Viagem excluida com sucesso!")
        history.push("/login");
      }).catch((error) => {
        console.log(error.message)
      })
  }

    const goToTripDetail = (tripId) => {
      history.push(`/listar-viagem/detalhes-viagem/${tripId}`)
    }
  
    const goToCreateTrip = () => {
      history.push("/criar-viagem")
    }


  return (
    <Background BackgroundImage={BackgroundImage}>
      <Overlay>
        <ButtonCreateTrip onClick={goToCreateTrip}>Criar nova viagem</ButtonCreateTrip>
        <ContainerListAdm className="scrollbar scrollbar-primary">
          <TitlePage>Viagens vigentes Lista</TitlePage>
          {listTrips.map(trip => {
          return (
            <ContainerTrip key={trip.id}>
              <TripSingle>
                <TitleTrip>{trip.name}</TitleTrip>
                <InfoTrip><strong>Planeta:</strong> {trip.planet}</InfoTrip>
                <InfoTrip><strong>Data de partida:</strong> {trip.date}</InfoTrip>
                <InfoTrip><strong>Duração da viagem:</strong> {trip.durationInDays} dias</InfoTrip>
                <InfoTrip><strong>Breve descrição:</strong> {trip.description}</InfoTrip>
              </TripSingle>
              <ButtonDetailTrip onClick={() => goToTripDetail(trip.id)}>Detalhes</ButtonDetailTrip>
              <ButtonDeleteTrip onClick={() => DeleteTrip(trip.id)}>Deletar</ButtonDeleteTrip>
            </ContainerTrip>
          );
        })} 
        </ContainerListAdm>
      </Overlay>
    </Background>
  );
}

export default ListTripsPage;
