const deleteUserService = require("../services/deleteUserService");

//Recebe os dados do front e envia para o Service para deletar o usuário
const deleteUserController = (req, res) => {
  const { userid } = req.headers;
  console.log('controller:', userid);

  deleteUserService(userid)
    .then((result) => {
      console.log(result);
      return res.status(200).json(result);
    })
    .catch((error) => {
      console.error("Erro ao obter usuários:", error);
    });
};

module.exports = deleteUserController;
