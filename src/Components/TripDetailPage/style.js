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
  background-color: rgba(0, 0, 0, 0.85);
`;

export const ContainerListAdm = styled.div `
  height: 80vh;
  width: 70vw;
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: auto;
  padding: 10px 50px;
  
`;

export const DetailInfoTrip = styled.div `
`;

export const TitleInfoTrip = styled.h2 `

`;

export const InfoTrip = styled.p `
  font-size: 18px;
`;

export const CandidateGroup = styled.div `
  display: flex;
  flex-wrap: wrap;
`;

export const CandidateSingle = styled.div `
  display: flex;
  flex-direction: column;
  border: solid 1px #000;
  margin-right: 15px;
  margin-bottom: 15px;
  padding: 15px;
  width: 20%;
`;

export const TitleCandidates = styled.p `
  font-weight: 600;
  font-size: 20px;
  border-top: 1px solid #000;
  padding-top: 20px;
`;

export const InfoCandidate = styled.p `
  margin: 5px 0;
`;

export const ButtonsDecide = styled.div `
  margin: 8px auto 0;
`;

export const LetterApproved = styled.div `
  color: green;
  font-weight:800;
`;

export const ButtonApproved = styled.button `
    height: 30px;
    margin-left: 10px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid green;
    font-family: 'Roboto';
    color: green;
    font-weight: bold;
    font-size: 12px;
    width: 70px;
    align-self: center;
    cursor: pointer;
    transition: 200ms;
      :hover {
        background-color: green;
        color: #fff;
        box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
      }
`;

export const ButtonReproved = styled.button `
    height: 30px;
    margin-left: 10px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid red;
    font-family: 'Roboto';
    color: red;
    font-weight: bold;
    font-size: 12px;
    width: 70px;
    align-self: center;
    cursor: pointer;
    transition: 200ms;
      :hover {
        background-color: red;
        color: #fff;
        box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
      }
`;


export const ButtonBack = styled.button `
    margin-top: 20px;
    height: 30px;
    margin-left: 50px;
    background-color: rgba(0, 0, 0, 1);
    border: 1px solid #fff;
    font-family: 'Roboto';
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    width: 70px;
    align-self: center;
    cursor: pointer;
    transition: 200ms;
      :hover {
        background-color: #fff;
        color: #000;
        box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
      }
`;
