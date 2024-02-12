//Imports
import React from "react";
import Search from "../components/search";
import UsersList from "../components/usersList";
import Header from "../components/header";

//Exportando a tela inicial e seus componentes
export default function InitialScreen() {
  return (
    <main>
      <Header />
      <Search />
      <UsersList />
    </main>
  );
}
