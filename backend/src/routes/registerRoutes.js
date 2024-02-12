const express = require("express");
const register = require("../controller/registerController");

const registerRoutes = express.Router();

//Criando a rota entre o frontend e o backend para registrar um usuário
registerRoutes.post("/register", register);

module.exports = registerRoutes;
