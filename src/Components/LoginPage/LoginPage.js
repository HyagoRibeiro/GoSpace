import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import useInput from './../hooks/useInput';

import BackgroundImage from './../../images/background-home.jpg';
import { Background, Overlay, ContainerLogin, InsertLogin, InsertInfo, ButtonLogin } from './style';


const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/hyago-turing"

function LoginPage(props) {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if(token !== null) {
      history.push("/listar-viagem");
    }
  }, [])

  const handleLoginPage = async (event) => {
    event.preventDefault();
    try {
      const body = {
        email: email,
        password: password
      };

      const response = await axios.post(`${baseUrl}/login`, body)
        window.localStorage.setItem("token", response.data.token);
        history.push("/listar-viagem");
        window.location.reload();
    } catch(error) {
      console.log(error.response)
    }
  }

  return (
    <Background BackgroundImage={BackgroundImage}>
      <Overlay>
        <ContainerLogin onSubmit={handleLoginPage}>
          <h2>Login Administrador</h2>
          <InsertLogin>
            E-mail
          <InsertInfo  name="email" type="email" value={email} onChange={setEmail} placeholder="E-mail" />
        </InsertLogin>
        <InsertLogin>
            Senha
          <InsertInfo  name="password" type="password" value={password} onChange={setPassword} placeholder="Senha" />
        </InsertLogin>
          <ButtonLogin>Entrar</ButtonLogin>
        </ContainerLogin>
      </Overlay>
    </Background>
  );
}

export default LoginPage;
