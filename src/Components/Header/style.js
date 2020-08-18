import styled from 'styled-components';

export const ContainerHeader = styled.header `
display: flex;
justify-content: space-between;
align-items: center;
width: 100vw;
height: 6vh;
background-color: #fff;
font-weight: bold;

`;

export const Logo = styled.div `
margin-left: 12%;
font-size: 30px;
cursor: pointer;
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
`;
