import styled from 'styled-components';

export const ContainerHeader = styled.header `
display: flex;
justify-content: space-between;
align-items: center;
width: 100vw;
height: 6vh;
background-color: #fff;
font-weight: bold;
@media(max-width: 480px) {
    height: 50px;
    margin-bottom: solid #000 1px;
  }
`;

export const Logo = styled.div `
margin-left: 12%;
font-size: 30px;
cursor: pointer;
@media(max-width: 480px) {
    margin: 0 auto;
    margin-bottom: solid #000 1px;
  }
`;

export const ButtonLogin = styled.button `
background-color: #fff;
height: 25px;
width: 70px;
border: 1px solid #000;
font-family: 'Roboto';
font-weight: 700;
transition: 200ms;
cursor: pointer;
  :hover {
    background-color: #ffe647;
  }
`;

export const ButtonTrips = styled.button `
background-color: #fff;
margin-right: 20px;
height: 25px;
width: 120px;
border: 1px solid #000;
font-family: 'Roboto';
font-weight: 700;
transition: 200ms;
cursor: pointer;
  :hover {
    background-color: #ffe647;
  }
`;

export const ButtonsGroup = styled.div `
margin-right: 12%;
display: flex;
justify-content: space-between;
@media(max-width: 480px) {
  display:none;
  }
`;

export const MobileMenu = styled.div `
  display: none;
  @media(max-width: 480px) {
    display: block;
    position: fixed;
    margin-left: 10px;
    z-index: 2;
  }
`;

export const IconMenu = styled.img `
  margin-top: 10px;
  width: 30px;
  height: 30px;
`;

export const ContainerMenu = styled.div `
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
`;

export const ItemMenu = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  color: #fff;
  background-color: #000;
  width: 100%;
  margin: 2px 0;
  font-weight: bold;
  font-size: 18px;
`;
