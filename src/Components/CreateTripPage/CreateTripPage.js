import React from 'react';
import { useHistory } from "react-router-dom";
import useProtect from './../hooks/useProtect';
import axios from 'axios';

import useForm from './../hooks/useForm';
import BackgroundImage from './../../images/background-home.jpg';
import { Background, Overlay, ContainerCreateTrip, ButtonBack, ContainerForm, ButtonApply, TitleForm,
InputQuestion, QuestionSingle, TextareaDescription, SelectQuestion } from './style';

function CreateTripPage(props) {
  
  const history = useHistory();
  
  const listTrips = useProtect(
    'https://us-central1-labenu-apis.cloudfunctions.net/labeX/hyago-turing/trips',
    [], 'trips');
  
    const today = new Date().toISOString().split("T")[0];
    
    
    const { form, onChange } = useForm({
      name: "",
      planet: "",
      date: "",
      description: "",
      durationInDays: "",
    })
    
    const handleInputChange = event => {
      const { name, value } = event.target;
      
      onChange(name, value)
    }

    const handleForm = event => {
      const token = window.localStorage.getItem("token");
      const [year, month, day] = form.date.split("-")
      event.preventDefault();
      const body = {
        name: form.name,
        planet: form.planet,
        date: `${day}/${month}/${year.substring(2,4)}`,
        description: form.description,
        durationInDays: form.durationInDays
      }
  
      axios.post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/hyago-turing/trips`,
        body, {
          headers: {
            auth: token
          }
          })
        .then(response => {
          console.log("Nova viagem foi criada com sucesso");
          history.push("/listar-viagem")
          
        }).catch(erro => {
          console.log(erro.message)
        })
  
    };
  
    
    const goToBack = () => {
      history.push("/listar-viagem")
    }

  return (
    <Background BackgroundImage={BackgroundImage}>
      <Overlay>
        <ButtonBack onClick={goToBack}>Lista de viagens</ButtonBack>
        <ContainerCreateTrip>
          <h2>Criar nova viagem</h2>
          <ContainerForm onSubmit={handleForm}>
        <TitleForm>Preencha o formulário com os dados da viagem</TitleForm>
        <QuestionSingle>
          1. Nome da viagem (min. 5 caracteres)
          <InputQuestion required pattern={"^.{5,}"} name="name" type="text" value={form.name} onChange={handleInputChange} placeholder="Escreva o nome da viagem" />
        </QuestionSingle>
        <QuestionSingle>
          2. Planeta destino
          <SelectQuestion
          required
          name="planet"
          type="text"
          value={form.planet}
          onChange={handleInputChange}
          >
            <option value="">Selecione um planeta</option>
            <option value="Mercúrio">Mercúrio</option>
            <option value="Vênus">Vênus</option>
            <option value="Marte">Marte</option>
            <option value="Júpiter">Júpiter</option>
            <option value="Saturno">Saturno</option>
            <option value="Urano">Urano</option>
            <option value="Netuno">Netuno</option>
            <option value="Plutão">Plutão</option>
          </SelectQuestion>
        </QuestionSingle>
        <QuestionSingle>
          3. Data de partida
          <InputQuestion required min={today} name="date" type="date" value={form.date} onChange={handleInputChange} placeholder="Data da partida" />
        </QuestionSingle>
        <QuestionSingle>
          4. Descrição da viagem (min. 30 caracteres)
          <TextareaDescription required pattern={"^.{30,}"} name="description" value={form.description} onChange={handleInputChange} placeholder="Breve descrição da viagem" />
        </QuestionSingle>
        <QuestionSingle>
          5. Duração da viagem (min. 50 dias)
          <InputQuestion required min="50" name="durationInDays" type="number" value={form.durationInDays} onChange={handleInputChange} placeholder="Dias que duraram a viagem" />
        </QuestionSingle>
        <ButtonApply>Enviar</ButtonApply>
    </ContainerForm>
          
        </ContainerCreateTrip>
      </Overlay>
    </Background>
  );
}

export default CreateTripPage;
