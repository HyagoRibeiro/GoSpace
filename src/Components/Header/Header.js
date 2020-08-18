import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import menu from "./../../images/menu.svg";
import close from "./../../images/close-menu.svg";
import { ContainerHeader, Logo, ButtonLogin, ButtonTrips, ButtonsGroup, MobileMenu, IconMenu, ContainerMenu, ItemMenu } from './style';


function Header() {
  const [buttonHeader, setButtonHeader] = useState(true);
  const [menuMobile, setMenuMobile] = useState(true);
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

  const goToLoginMobile = () => {
    buttonHeader ? history.push("/login") : history.push("/");
    setButtonHeader(!buttonHeader);
    setMenuMobile(!menuMobile);
  }

  const goToLogoutMobile = () => {
    window.localStorage.clear();
    history.push("/login")
    window.location.reload();
    setMenuMobile(!menuMobile);

  };

  const goToHomeMobile = () => {
    history.push("/")
    setMenuMobile(!menuMobile);
  };

  const goToTripsMobile = () => {
    history.push("/listar-viagem")
    setMenuMobile(!menuMobile);
  };

  const openMenuMobile = () => {
    setMenuMobile(!menuMobile);
  }

  return (
    <>
      <MobileMenu>{menuMobile ? <IconMenu onClick={openMenuMobile} alt={'Icone'} src={menu}/> : <IconMenu onClick={openMenuMobile} alt={'Icone'} src={close}/>} </MobileMenu>
      {! menuMobile ? <ContainerMenu>
            <ItemMenu onClick={goToHomeMobile}><p>Home</p></ItemMenu>
            {token !== null ? <ItemMenu onClick={goToTripsMobile}><p>Lista de viagens</p></ItemMenu> : <></>}
            {token !== null ? <ItemMenu onClick={goToLogoutMobile}><p>Logout</p></ItemMenu> : 
            <ItemMenu onClick={goToLoginMobile}><p>Login</p></ItemMenu>}
      </ContainerMenu> : <></>}
      <ContainerHeader>
          <Logo onClick={goToHome}>GoSpace</Logo>
          <ButtonsGroup>
            {token !== null ? <ButtonTrips onClick={goToTrips}>Lista de viagens</ButtonTrips> : <></>}
            {token !== null ? <ButtonLogin onClick={goToLogout}>Logout</ButtonLogin> : 
            <ButtonLogin onClick={goToLogin}>Login</ButtonLogin>}
          </ButtonsGroup>
      </ContainerHeader>
    </>
  );
}

export default Header;
