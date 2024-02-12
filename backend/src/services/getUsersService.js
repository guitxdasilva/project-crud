const initConnection = require("../api/connection");

//Função para lançar o comando dentro do MYSQL e coletar todos os usuários do banco
function getUsersService() {
  const connection = initConnection();

  return new Promise((resolve, reject) => {
    const getUsers = `SELECT * FROM PROJECT.users`;

    connection.query(getUsers, (err, results) => {
      if (err) {
        console.error("Erro ao buscar usuários", err);
        connection.end();
        reject({ type: 404 });
      } else {
        console.log("Usuários encontrados com sucesso!");
        connection.end();
        resolve(results);
      }
    });
  });
}

module.exports = getUsersService;
