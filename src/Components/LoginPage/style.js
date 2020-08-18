import styled from 'styled-components';

export const Background = styled.main `
background-image: url(${props => props.BackgroundImage});
height: 94vh;
background-size: cover;
box-sizing: border-box;
color: #fff;
align-items: center;
`;

export const Overlay = styled.div `
height: 100%;
width: 100%;
background-color: rgba(0, 0, 0, 0.9);
display: flex;
justify-content: center;
align-items: center;
`;

export const ContainerLogin = styled.form `
width: 400px;
height: 350px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`;

export const InsertLogin = styled.label `
display: flex;
flex-direction: column;
font-size: 18px;
`;

export const InsertInfo = styled.input `
width: 350px;
margin-top: 10px;
height: 30px;
`;

export const ButtonLogin = styled.button `
  height: 30px;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #fff;
  font-family: 'Roboto';
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  width: 140px;
  align-self: center;
  cursor: pointer;
  transition: 200ms;
    :hover {
      background-color: #ffe647;
      color: #000;
      border: 1px solid #000;
    }
`;
