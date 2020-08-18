import styled from 'styled-components';
import BackgroundImage from './../../images/background-home.jpg';


export const Background = styled.main `
  background-image: url(${props => props.BackgroundImage});
  height: 94vh;
  background-size: cover;
  box-sizing: border-box;
  color: #fff;
  align-items: center;
`;

export const Overlay = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.65);
`;

export const ContainerCreateTrip = styled.div `
  height: 80vh;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 10px 50px;
  
`;

export const ButtonBack = styled.button `
    width: 150px;
    align-self: start;
    margin: 15px 0 0 50px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0);
    color: #fff;
    border: 1px solid #fff;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: 200ms;
      :hover {
        background-color: #ffe647;
        border: 1px solid #000;
        color: #000;
        box-shadow: 0px 0px 5px 0px rgba(255,255,255, 0.3);
      }
`;

export const ContainerForm = styled.form `
    display:flex;
    flex-direction: column;
    width: 300px;
    height: 700px;
    justify-content: space-between;
`;

export const ButtonApply = styled.button `
    height: 35px;
    background-color: #fff;
    border: 1px solid #000;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 16px;
    width: 60%;
    align-self: center;
    cursor: pointer;
    transition: 200ms;
      :hover {
        background-color: #000;
        color: #fff;
        box-shadow: 0px 0px 5px 0px rgba(255,255,255, 0.3);
      }
`;

export const TitleForm = styled.p `
  font-size: 20px;
  margin: 0;
`;

export const InputQuestion = styled.input `
  height: 30px;
  margin-top: 8px;
`;

export const QuestionSingle = styled.label `
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export const TextareaDescription = styled.textarea `
  height: 120px;
  margin-top: 8px;
  resize: none;
`;

export const SelectQuestion = styled.select `
  height: 30px;
  margin-top: 5px;
`;
