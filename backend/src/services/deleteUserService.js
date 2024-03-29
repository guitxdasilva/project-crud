const initConnection = require("../api/connection");

//Função para lançar o comando dentro do MYSQL e deletar o usuário do banco
function deleteUserService(user) {
  const connection = initConnection();

  console.log('service:', user);
  return new Promise((resolve, reject) => {
    const deleteUser = `
      DELETE FROM PROJECT.users WHERE id = ?`;

    connection.query(deleteUser, [user], (err, results) => {
      if (err) {
        console.error("Erro ao inserir usuário:", err);
        connection.end();
        reject({ type: 403 });
      } else {
        connection.end();
        resolve("Usuário deletado com sucesso!");
      }
    });
  });
}

module.exports = deleteUserService;
