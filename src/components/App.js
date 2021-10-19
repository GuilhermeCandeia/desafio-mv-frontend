import { BrowserRouter, Route } from "react-router-dom";

import CharacterDetail from "./characterCRUD/CharacterDetail";
import EditCharacter from "./characterCRUD/form/EditCharacter";
import DeleteCharacter from "./characterCRUD/DeleteCharacter";
import Navbar from "./navbar/Navbar";
import ListaDeUsuarios from "./characterCRUD/lista-de-usuarios";
import NovoUsuario from "./characterCRUD/form/novo-usuario";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={ListaDeUsuarios} />
      <Route exact path="/characters/:id" component={CharacterDetail} />
      <Route exact path="/character/new-character" component={NovoUsuario} />
      <Route exact path="/character/:id/edit/" component={EditCharacter} />
      <Route exact path="/usuarios/:id" component={DeleteCharacter} />
    </BrowserRouter>
  );
}

export default App;
