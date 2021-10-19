import React, { Component } from "react";
import axios from "axios";

import CharacterForm from "./CharacterForm";

// Update crUd

class EditCharacter extends Component {
  state = {
    nome: "",
    cpf: "",
    id: "",
    item: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/usuarios/${this.props.match.params.id}`
      );
      this.setState({ ...this.state, ...response.data[0] });
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8080/usuarios/${this.props.match.params.id}`,
        { usuario: { ...this.state }, itemId: this.state.item }
      );
      this.props.history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    // console.log(this.props);
    return (
      <CharacterForm
        state={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default EditCharacter;
