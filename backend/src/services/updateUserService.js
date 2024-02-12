const initConnection = require("../api/connection");

//Função para lançar o comando dentro do MYSQL e atualizar o usuário
function updateUserService(value) {
  const connection = initConnection();

  return new Promise((resolve, reject) => {
    const updateUser = `UPDATE PROJECT.users SET name = ?, age = ?, occupation = ? WHERE id LIKE ?;`;

    const data = [value.name, value.age, value.occupation, value.id];

    connection.query(updateUser, data, (err, results) => {
      if (err) {
        console.error("Erro ao alterar usuário", err);
        connection.end();
        reject({ type: 404 });
      } else {
        console.log("Usuário alterado com sucesso!");
        connection.end();
        resolve(results);
      }
    });
  });
}

module.exports = updateUserService;
