import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListaDeUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  const listarUsuarios = async () => {
    try {
      const response = await axios.get("http://localhost:8080/usuarios?");
      setUsuarios(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    listarUsuarios();
  }, []);

  return (
    <div className="container my-5">
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">CPF</th>
            <th scope="col">Item</th>

            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <th scope="row">{usuario.id}</th>
              <td>{usuario.nome}</td>
              <td>{usuario.cpf}</td>
              <td>{usuario.item ? usuario.item.nome : ""}</td>

              <td>
                <Link to={`/characters/${usuario.id}`}>
                  <i className="far fa-eye m-2"></i>
                  {/* <i className="fas fa-edit"></i> */}
                </Link>
                <Link to={`/character/${usuario.id}/edit/`}>
                  <i className="fas fa-edit m-2"></i>
                </Link>
                <Link to={`/usuarios/${usuario.id}`}>
                  <i style={{ color: "red" }} class="fas fa-trash-alt m-2"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaDeUsuarios;
