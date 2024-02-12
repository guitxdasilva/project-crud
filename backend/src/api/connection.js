const mysql = require("mysql2");

//Criando a conexão com o banco de dados
const initConnection = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "PROJECT",
  });

  
  connection.connect((err) => {
    if (err) {
      console.error("Erro ao conectar ao MySQL:", err);
    } else {
      console.log("Conectado ao MySQL!");
    }
  });

  return connection;
};

module.exports = initConnection;
