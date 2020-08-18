import styled from 'styled-components';


export const Background = styled.main `
  background-image: url(${props => props.BackgroundImage});
  height: 94vh;
  background-size: cover;
  box-sizing: border-box;
  color: #fff;
  align-items: center;
  @media(max-width: 480px) {
    background-image: none;
    background-color: #fff;
    width: 100vw;
  }
`;

export const Overlay = styled.div `
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  @media(max-width: 480px) {
    background-color: rgba(0, 0, 0, 0);
    width: 100vw;
  }
`;

export const ContainerListAdm = styled.div `
  height: 80vh;
  width: 50vw;
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: auto;
  padding: 10px 50px;
  @media(max-width: 480px) {
    background-color: rgba(0,0,0,0);
    width: 95vw;
    height: 85vh;
    overflow: auto ;
    padding: 0 10px;

  }
`;

export const ContainerTrip = styled.div `
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  padding: 10px 0;
  @media(max-width: 480px) {
    flex-direction: column;
  }
`;

export const TripSingle = styled.div `
  width: 85%;
  @media(max-width: 480px) {
    width: 100%;
  }
`;

export const TitleTrip = styled.h3 `
  font-size: 20px;
`;

export const InfoTrip = styled.p `
  font-size: 16px;
`;

export const ButtonDetailTrip = styled.button `
    height: 30px;
    background-color: rgba(0, 0, 0, 1);
    border: 1px solid #000;
    font-family: 'Roboto';
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    width: 90px;
    align-self: center;
    cursor: pointer;
    transition: 200ms;
      :hover {
        background-color: #ffe647;
        color: #000;
        box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
      }
    @media(max-width: 480px) {
      width: 100%;
      margin-left: 0;
      height: 40px;
      font-size: 16px;
      margin-top:0;
    }
`;

export const ButtonDeleteTrip = styled.button `
    height: 30px;
    margin-left: 5px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid red;
    font-family: 'Roboto';
    color: red;
    font-weight: bold;
    font-size: 12px;
    width: 90px;
    align-self: center;
    cursor: pointer;
    transition: 200ms;
      :hover {
        background-color: red;
        color: #fff;
        box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
      }
    @media(max-width: 480px) {
      width: 100%;
      margin-left: 0;
      height: 40px;
      font-size: 16px;
      margin-top: 5px;
    }
`;

export const TitlePage = styled.h2 `
  display: inline-block;
  text-decoration: underline #000;
`;

export const ButtonCreateTrip = styled.button `
    height: 30px;
    width: 120px;
    margin-left: 50px;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid #fff;
    font-family: 'Roboto';
    color: #000;
    font-weight: bold;
    font-size: 12px;
    align-self: center;
    cursor: pointer;
    transition: 200ms;
      :hover {
        background-color: #ffe647;
        border: 1px solid #ffe647;
        color: #000;
      }
    @media(max-width:480px) {
      display: none;
    }
`;
