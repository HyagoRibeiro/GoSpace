import React from 'react';
import { useHistory } from "react-router-dom";

import BackgroundImage from './../../images/background-home.jpg';
import { Background, ContainerHome, Overlay, TextGroup, ButtonGroup, ButtonEnter, TitleTextHome } from './styled';

function HomePage(props) {
  const history = useHistory();

  const goToTrips = () => {
    history.push("/viagens")
  }


  return (
    <Background BackgroundImage={BackgroundImage}>
      <Overlay>
        <ContainerHome>
          <TextGroup>
            <TitleTextHome>Faça a viagem interplanetária <br/>dos seus sonhos.</TitleTextHome>
            <ButtonGroup>
              <ButtonEnter onClick={goToTrips}>Viagens</ButtonEnter>
            </ButtonGroup>
          </TextGroup>
        </ContainerHome>
      </Overlay>
    </Background>
  );
}

export default HomePage;
