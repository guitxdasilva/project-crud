import React, { useState, useContext } from "react";
import api from "../api/users";
import "../App.css";
import AppContext from "../api/context/AppContext";

//Exportando o componente de busca por nome
export default function Search() {
  const [valueToSearch, setValueToSearch] = useState("");
  const { setCurrentPage, setUsers } = useContext(AppContext);

  //Função para buscar o usuáio
  const search = async (value) => {
    setCurrentPage(0);
    const request = await api.foundUsers(value);
    setUsers(request.data);
  };

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <input
        id="name-search"
        type="search"
        name="search"
        placeholder="Pesquisar por Nome"
        value={valueToSearch}
        onChange={({ target }) => setValueToSearch(target.value)}
      />
      <button
        className="button-search"
        type="button"
        onClick={() => search(valueToSearch)}
      >
        Pesquisar
      </button>
    </div>
  );
}
