const getUsersService = require("../services/getUsersService");

//Recebe os dados do front e envia para o Service para coletar todos os usuários
const getUser = (_req, res) => {
  getUsersService()
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((error) => {
      console.error("Erro ao obter usuários:", error);
    });
};

module.exports = getUser;
