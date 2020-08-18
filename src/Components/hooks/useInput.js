import { useState } from 'react';

const useInput = estadoInicial => {
  const [valor, atualizaValor] = useState(estadoInicial);

  const lidaAtualizaValor = event => {
    const { value } = event.target;

    atualizaValor(value);
  };

  return [valor, lidaAtualizaValor];
};

export default useInput;