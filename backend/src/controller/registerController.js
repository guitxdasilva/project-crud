const registerService = require("../services/registerService");

//Recebe os dados do front e envia para o Service para registrar um usuário
const register = (req, res) => {
  const data = req.body;

  registerService(data)
    .then((result) => {
      if (result.type) {
        return res.status(type).json(result.message);
      }
      return res.status(201).json(result.message);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = register;
