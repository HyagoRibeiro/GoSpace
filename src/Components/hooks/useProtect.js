import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const useProtect = (url, initialState, lastData) => {
  const history = useHistory();
  const [data, setData] = useState(initialState)

    
  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token === null) {
      history.push("/");
    } else {
      axios.get(url, {
        headers: {
          auth: token
        }
      }).then((response) => {
        setData(response.data[lastData])
      })
    }

  }, [url, lastData, history]);

  return data

};

export default useProtect;