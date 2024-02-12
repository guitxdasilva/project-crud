const express = require("express");
const updateUser = require("../controller/updateUserController");

const dataUpdateUser = express.Router();

//Criando a rota entre o frontend e o backend para atualizar um usuário
dataUpdateUser.put("/update", updateUser);

module.exports = dataUpdateUser;
