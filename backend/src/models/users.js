const mysql = require("mysql2");

//Criando a DB e a tabela users dentro do MYSQL
function createDB() {

  const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "12345",
      database: "",
    });

  const createDataBase = `CREATE DATABASE IF NOT EXISTS PROJECT`;
  const createTableOnSQL = `
  CREATE TABLE IF NOT EXISTS PROJECT.users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    occupation VARCHAR(255) NOT NULL
  )`;

  connection.query(createDataBase, (err, results) => {
    if (err) {
      console.error("Erro ao criar a database:", err);
      connection.end();
    } else {
      console.log("Database PROJECT criada com sucesso!");
      connection.query(createTableOnSQL, (err, results) => {
        if (err) {
          console.error("Erro ao criar a tabela:", err);
        } else {
          console.log("Tabela users criada com sucesso!");
        }

        connection.end();
      });
    }
  });
}

module.exports = createDB;
