const initConnection = require("../api/connection");

//Função para lançar o comando dentro do MYSQL e buscar os usuários de acordo com a pesquisa
function searchUsersService(value) {
  const connection = initConnection();

  return new Promise((resolve, reject) => {
    const searchUsers = `SELECT * FROM PROJECT.users WHERE LOWER(name) LIKE LOWER(?);`;

    const searchTerm = value;

    connection.query(searchUsers, [`%${searchTerm}%`], (err, results) => {
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

module.exports = searchUsersService;
