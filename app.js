const express = require("express");
const app = express();

const _env = require("dotenv").config(); // connect env file
const env = process.env;
const { dbConnection } = require("./database/db_config");
const  login  = require("./container/Login/routes");
const IPMiddleware = require('./ipMiddleware');
var cors = require('cors')

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.use(IPMiddleware);

app.use("/api/login", login);
app.use((req, res) => {
  res.status(500).send({ message: "No api found" });
});

app.listen(env.PORT, () => {
  dbConnection();
  console.info(`Server is started: ${env.PORT}`);
});
