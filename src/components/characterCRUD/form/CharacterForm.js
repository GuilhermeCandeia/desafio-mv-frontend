import axios from "axios";
import React, { useEffect, useState } from "react";

function CharacterForm(props) {
  const [itens, setItens] = useState([]);

  const listarItens = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/itens?disponivel=true"
      );
      setItens(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    listarItens();
  }, []);

  return (
    <form className="container my-5">
      <div className="mb-3">
        <label htmlFor="characterNameInput" className="form-label">
          Nome
        </label>
        <input
          type="text"
          className="form-control"
          name="nome"
          id="usuario-nome-input"
          onChange={props.handleChange}
          value={props.state.nome}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="usuario-cpf-input" className="form-label">
          CPF
        </label>
        <input
          type="text"
          className="form-control"
          name="cpf"
          id="usuario-cpf-input"
          onChange={props.handleChange}
          value={props.state.cpf}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="usuario-item-input" className="form-label">
          Item
        </label>

        <select
          name="item"
          id="itens"
          type="text"
          className="form-control"
          onChange={props.handleChange}
          value={props.state.item}
        >
          <option value={null}>Escolha um item para sua contribuição</option>
          {itens.map((item) => (
            <option value={item.id}>{item.nome}</option>
          ))}
        </select>
      </div>

      <button
        onClick={props.handleSubmit}
        type="submit"
        className="btn btn-primary"
      >
        Enviar
      </button>
    </form>
  );
}

export default CharacterForm;
