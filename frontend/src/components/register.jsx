import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/users";

//Exportando o componente de registrar usuário
export default function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const navigate = useNavigate();

  //Função para habilitar e desabilitar o botão de cadastrar
  const isSubmitEnabled = () => {
    const validName = name.length >= 3;
    const validAge = age >= 18;
    const validOccupation = occupation.length >= 1;

    return validName && validAge && validOccupation;
  };

  //Função que irá confirmar o registro
  const validateRegister = async () => {
    const sucess = 201;
    const conflict = 403;
    const newRegister = await api.postRegister(name, age, occupation);

    if (newRegister.status === conflict) {
      alert("Não foi possível registrar o usuário!");
    }
    if (newRegister.status === sucess) {
      alert("Usuário registrado com sucesso!");
      navigate("/");
      return newRegister;
    }
  };

  return (
    <div>
      <h1>Cadastrar novo usuário</h1>
      <form action="submit" method="post">
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label htmlFor="age">
          Idade:
          <input
            type="number"
            id="age"
            name="age"
            required
            value={age}
            onChange={({ target }) => setAge(target.value)}
          />
        </label>
        <label htmlFor="occupation">
          Profissão:
          <input
            type="text"
            id="occupation"
            name="occupation"
            required
            value={occupation}
            onChange={({ target }) => setOccupation(target.value)}
          />
        </label>
        <div className="button-register">
          <button
            className="cancel"
            id="register"
            type="button"
            onClick={() => navigate("/")}
          >
            Cancelar
          </button>
          <button
            className="confirm"
            type="button"
            onClick={() => validateRegister()}
            disabled={!isSubmitEnabled()}
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
