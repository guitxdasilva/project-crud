import axios from "axios";

//Criando conexão com o banco de dados
const API = axios.create({ baseURL: "http://localhost:3001" });

//Função para coletar os usuário que existem no banco de dados
const getUsers = async () => {
  try {
    const response = await API.get("/users");
    return response;
  } catch (error) {
    return error.response;
  }
};

//Função para coletar somente os usuários no banco que forem selecionados pela busca
const foundUsers = async (value) => {
  try {
    const response = await API.get("/search", {
      headers: {
        search: value,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

//Função para atualizar um usuário no banco
const updateUser = async (value) => {
  try {
    const response = await API.put("/update", {
      data: value,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

//Função para deletar um usuário no banco
const deleteUser = async (user) => {
  try {
    const response = await API.delete("/delete", {
      headers: {
        userName: user,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

//Função para registrar um novo usuário no banco
const postRegister = async (name, age, occupation) => {
  try {
    const response = await API.post("/register", {
      name: name,
      age: age,
      occupation: occupation,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

//Const contendo todas as funções que irão ser exportadas
const exportar = {
  getUsers,
  foundUsers,
  updateUser,
  deleteUser,
  postRegister,
};

//Exportando as funções
export default exportar;
