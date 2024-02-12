const initConnection = require("../api/connection");

//Função para lançar o comando dentro do MYSQL e registrar um novo usuário
function registerService(data) {
  const { name, age, occupation } = data;

  const connection = initConnection();

  return new Promise((resolve, reject) => {
    const createNewUser = `
      INSERT INTO PROJECT.users (name, age, occupation)
      VALUES (?, ?, ?)`;

    connection.query(createNewUser, [name, age, occupation], (err, results) => {
      if (err) {
        console.error("Erro ao inserir usuário:", err);
        connection.end();
        reject({ type: 403 });
      } else {
        console.log("Usuário criado com sucesso!");
        connection.end();
        resolve({ type: null });
      }
    });
  });
}

module.exports = registerService;
