const express = require("express");
const produtoRoutes = require("./routes/produto.routes");

const app = express();

app.use(express.json());

app.use("/produtos", produtoRoutes);

app.get('/', (req, res) => {
  res.send('Servidor rodando com sucesso!');
});

module.exports = app;