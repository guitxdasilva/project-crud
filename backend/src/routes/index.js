const express = require("express");
const registerRoutes = require("./registerRoutes");
const getAllUser = require("./getUsersRoutes");
const getSearchUser = require("./searchUserRoute");
const deleteUser = require("./deleteUserRoute");
const dataUpdateUser = require("./updateUserRoute");

const routes = express.Router();

//Dando acesso do express para as rotas
routes.use(getSearchUser);
routes.use(dataUpdateUser);
routes.use(getAllUser);
routes.use(deleteUser);
routes.use(registerRoutes);

module.exports = routes;
