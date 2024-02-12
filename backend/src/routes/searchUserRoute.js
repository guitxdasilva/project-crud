const express = require("express");
const searchUser = require("../controller/searchController");

const getSearchUser = express.Router();

//Criando a rota entre o frontend e o backend para buscar um usuário
getSearchUser.get("/search", searchUser);

module.exports = getSearchUser;
