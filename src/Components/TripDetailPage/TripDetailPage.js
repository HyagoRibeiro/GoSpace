import useProtect from './../hooks/useProtect';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import React from 'react';
import axios from 'axios';
import './scrollbar.css';
import BackgroundImage from './../../images/background-home.jpg';
import { Background, Overlay, ContainerListAdm, DetailInfoTrip, TitleInfoTrip,
  InfoTrip, CandidateGroup, CandidateSingle, TitleCandidates, InfoCandidate, ButtonsDecide,
  ButtonApproved, LetterApproved, ButtonReproved, ButtonBack } from './style';

function TripDetailPage() {
  const history = useHistory();
  const pathParams = useParams();

  const tripDetail = useProtect(
  `https://us-central1-labenu-apis.cloudfunctions.net/labeX/hyago-turing/trip/${pathParams.tripId}`,
    {}, 'trip');

  console.log(tripDetail.candidates)

  const approveOrReproved = (candidateId, trueOrFalse) => {
    const token = window.localStorage.getItem("token");
    const body = {
      approve: trueOrFalse
    }

    axios.put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/hyago-turing/trips/${pathParams.tripId}/candidates/${candidateId}/decide`,
      body, {
        headers: {
          auth: token
        }
        })
      .then(response => {
        trueOrFalse ? alert("Candidato aprovado") : 
        alert("Candidato reprovado");
        window.location.reload();
      }).catch(erro => {
        console.log(erro.message)
      })

  };


  const goToBack = () => {
      history.push("/listar-viagem")
  }

  
  return (
    <Background BackgroundImage={BackgroundImage}>
      <Overlay>
        <ButtonBack onClick={goToBack}>Voltar</ButtonBack>
        <ContainerListAdm className="scrollbar scrollbar-primary">
          <DetailInfoTrip>
            <TitleInfoTrip>{tripDetail.name}</TitleInfoTrip>
            <InfoTrip>Planeta Destino: {tripDetail.planet}</InfoTrip>
            <InfoTrip>Data de partida: {tripDetail.date}</InfoTrip>
            <InfoTrip>Duração da viagem: {tripDetail.durationInDays}</InfoTrip>
            <InfoTrip>Descrição: {tripDetail.description}</InfoTrip>
          </DetailInfoTrip>
            <TitleCandidates>Avaliação pendente</TitleCandidates>
          <CandidateGroup>
            {tripDetail.candidates && tripDetail.candidates.map(candidate => {
              return (
                <CandidateSingle>
                  <h4>{candidate.name}</h4>
                  <InfoCandidate>{candidate.age} anos</InfoCandidate>
                  <InfoCandidate>{candidate.applicationText}</InfoCandidate>
                  <InfoCandidate>{candidate.country}</InfoCandidate>
                  <InfoCandidate>Profissão: {candidate.profession}</InfoCandidate>
                  <ButtonsDecide>
                    <ButtonApproved onClick={() => approveOrReproved(candidate.id, true)}>Aprovar</ButtonApproved>
                    <ButtonReproved onClick={() => approveOrReproved(candidate.id, false)}>Reprovar</ButtonReproved>
                  </ButtonsDecide>
                </CandidateSingle>
              );
            })}
          </CandidateGroup>
          <TitleCandidates>Aprovados</TitleCandidates>
          <CandidateGroup>
            {tripDetail.approved && tripDetail.approved.map(candidate => {
              return (
                <CandidateSingle>
                  <h4>{candidate.name}</h4>
                  <InfoCandidate>{candidate.age} anos</InfoCandidate>
                  <InfoCandidate>{candidate.applicationText}</InfoCandidate>
                  <InfoCandidate>{candidate.country}</InfoCandidate>
                  <InfoCandidate>Profissão: {candidate.profession}</InfoCandidate>
                  <LetterApproved>APROVADO!</LetterApproved>
                </CandidateSingle>
              );
            })}
          </CandidateGroup>
        </ContainerListAdm>
      </Overlay>
    </Background>
  );
}

export default TripDetailPage;
