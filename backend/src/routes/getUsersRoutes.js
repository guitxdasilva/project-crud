const express = require("express");
const getUser = require("../controller/getUsersController");

const getAllUser = express.Router();

//Criando a rota entre o frontend e o backend para coletar todos os usuários
getAllUser.get("/users", getUser);

module.exports = getAllUser;
