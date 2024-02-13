import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../api/context/AppContext";
import api from "../api/users";

//Exportando a função de atualizar usuário
export default function Update() {
  const { userToUpdate } = useContext(AppContext);
  const navigate = useNavigate();

  //Estado local para controlar os valores dos campos do formulário
  const [formData, setFormData] = useState({
    id: userToUpdate.id,
    name: userToUpdate.name || "",
    age: userToUpdate.age || 0,
    occupation: userToUpdate.occupation || "",
  });

  //Atualiza o estado local quando o userToUpdate muda
  useEffect(() => {
    setFormData({
      ...formData,
      name: userToUpdate.name || "",
      age: userToUpdate.age || 0,
      occupation: userToUpdate.occupation || "",
    });
  }, [userToUpdate]);

  //Função para atualizar o estado quando os campos do formulário mudarem
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //Função para o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.updateUser(formData);

    alert("Usuário alterado com sucesso!");

    navigate("/");
  };

  //Função para habilitar e desabilitar o botão de atualizar
  const isSubmitEnabled = () => {
    const validName = formData.name.length >= 3;
    const validAge = formData.age >= 18;
    const validOccupation = formData.occupation.length >= 2;

    return validName && validAge && validOccupation;
  };

  return (
    <div>
      <h1>Editar usuário cadastrado</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            name="name"
            required
          />
        </label>
        <label htmlFor="age">
          Idade:
          <input
            type="number"
            id="age"
            value={formData.age}
            onChange={handleInputChange}
            name="age"
            required
          />
        </label>
        <label htmlFor="occupation">
          Profissão:
          <input
            type="text"
            id="occupation"
            value={formData.occupation}
            onChange={handleInputChange}
            name="occupation"
            required
          />
        </label>
        <div className="button-register">
          <button
            className="cancel"
            type="button"
            onClick={() => navigate("/")}
          >
            Cancelar
          </button>
          <button
            className="confirm"
            type="submit"
            disabled={!isSubmitEnabled()}
          >
            Atualizar
          </button>
        </div>
      </form>
    </div>
  );
}
