const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routers = require("../routes");
const createDB = require("../models/users");

//Configurando o servidor
const app = express();
const port = 3001;

app.use(cors());

app.use(bodyParser.json());

app.use("/", routers);

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
createDB();

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
