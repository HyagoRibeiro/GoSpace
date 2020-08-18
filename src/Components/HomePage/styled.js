import styled from 'styled-components';


export const Background = styled.main `
  background-image: url(${props => props.BackgroundImage});
  height: 94vh;
  background-size: cover;
  box-sizing: border-box;
  color: #fff;
  display: flex;
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
  height: 94vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const TextGroup = styled.div `
  text-align:center;
`;

export const ButtonGroup = styled.div `
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`;

export const ButtonEnter = styled.button `
  width: 100px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0);
  border: solid 1px #fff;
  color: #fff;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 15px;
  transition: 300ms;
  cursor: pointer;
    :hover {
      color: #000;
      background-color: #fff;
      box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
    }
`;
