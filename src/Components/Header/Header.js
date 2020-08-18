import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { ContainerHeader, Logo, ButtonLogin, ButtonTrips, ButtonsGroup } from './style';


function Header() {
  const [buttonHeader, setButtonHeader] = useState(true)
  const history = useHistory();
  const token = window.localStorage.getItem("token");

  const goToLogin = () => {
    buttonHeader ? history.push("/login") : history.push("/");
    setButtonHeader(!buttonHeader);
  }

  const goToLogout = () => {
    window.localStorage.clear();
    history.push("/login")
    window.location.reload();

  };

  const goToHome = () => {
    history.push("/")
  };

  const goToTrips = () => {
    history.push("/listar-viagem")
  };

  return (
    <ContainerHeader>
        <Logo onClick={goToHome}>LabX</Logo>
        <ButtonsGroup>
          {token !== null ? <ButtonTrips onClick={goToTrips}>Lista de viagens</ButtonTrips> : <></>}
          {token !== null ? <ButtonLogin onClick={goToLogout}>Logout</ButtonLogin> : 
          <ButtonLogin onClick={goToLogin}>Login</ButtonLogin>}
        </ButtonsGroup>
    </ContainerHeader>
  );
}

export default Header;
