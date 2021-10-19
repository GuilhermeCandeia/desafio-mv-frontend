import React, { useState } from "react";
import axios from "axios";
import CharacterForm from "./CharacterForm";

const NovoUsuario = (props) => {
  const [state, setState] = useState({});

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8080/usuarios", {
        usuario: { ...state },
        itemId: state.item,
      });

      props.history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CharacterForm
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default NovoUsuario;
