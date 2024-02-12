const express = require("express");
const deleteUserController = require("../controller/deleteUserController");

const deleteUser = express.Router();

//Criando a rota entre o frontend e o backend para deletar um usuário
deleteUser.delete("/delete", deleteUserController);

module.exports = deleteUser;
