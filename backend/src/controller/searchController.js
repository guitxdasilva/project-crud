const searchUsersService = require("../services/searchUserService");

//Recebe os dados do front e envia para o Service para buscar um usuário
const searchUser = (req, res) => {
  const { search } = req.headers;

  searchUsersService(search)
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((error) => {
      console.error("Erro ao obter usuários:", error);
    });
};

module.exports = searchUser;
