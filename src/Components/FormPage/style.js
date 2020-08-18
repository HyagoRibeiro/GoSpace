import styled from 'styled-components';


export const Background = styled.main `
  background-image: url(${props => props.BackgroundImage});
  height: 94vh;
  background-size: cover;
  box-sizing: border-box;
  color: #fff;
  align-items: center;
  @media(max-width: 480px) {
    height: 100%;
  }
`;

export const ContainerHome = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  
`;

export const Overlay = styled.div `
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.65);
`;

export const ButtonBackToHome = styled.button `
    height: 30px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #fff;
    font-family: 'Roboto';
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    width: 90px;
    align-self: center;
    cursor: pointer;
    transition: 200ms;
      :hover {
        background-color: #fff;
        color: #000;
        box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
      }
    @media(max-width: 480px) {
      display: none;
    }
`;

export const ButtonBackToHomeMobile = styled.button `
    display: none;
    @media(max-width: 480px) {
      display: block;
      height: 40px;
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid #fff;
      font-family: 'Roboto';
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      width: 80%;
      align-self: center;
      margin: 10px 0;
    }
`;
