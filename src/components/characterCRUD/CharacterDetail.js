import React, { Component } from "react";
import axios from "axios";

// READ do cRud

class CharacterDetail extends Component {
  state = {
    character: "",
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://ih-crud-api.herokuapp.com/characters/${this.props.match.params.id}`
      );
      console.log(response);
      this.setState({ character: { ...response.data } });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="container d-flex flex-column">
        <h1>{this.state.character.name} Details</h1>
        <span>
          <strong>ID: </strong>
          {this.state.character.id}
        </span>
        <span>
          <strong>Nome: </strong>
          {this.state.character.name}
        </span>
        <span>
          <strong>CPF: </strong>
          {this.state.character.occupation}
        </span>
        <span>
          <strong>Item: </strong>
          {this.state.character.weapon}
        </span>
      </div>
    );
  }
}

export default CharacterDetail;
