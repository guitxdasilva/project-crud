import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

//Exportando o componente do Header junto com o botão de adicionar novo usuário
export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <h1>UniControl</h1>
      <button type="button" onClick={() => navigate("/register")}>
        +Adicionar
      </button>
    </div>
  );
}
