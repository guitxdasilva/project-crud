const updateUserService = require("../services/updateUserService");

//Recebe os dados do front e envia para o Service para atualizar um usuário
const updateUser = (req, res) => {
  const { data } = req.body;

  updateUserService(data)
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((error) => {
      console.error("Erro ao alterar usuário:", error);
    });
};

module.exports = updateUser;
