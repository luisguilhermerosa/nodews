const express = require('express');

// Importa o arquivo de rotas com o caminho correto apontando para a pasta 'src'
const produtoRoutes = require('./src/routes/produto.routes');

const app = express();
const port = 3000;

// OBRIGATÓRIO: Habilita o Express a ler requisições com dados em formato JSON (req.body)
app.use(express.json());

// Rota raiz de teste
app.get('/', (req, res) => {
  res.send('Servidor rodando com sucesso!');
});

// Associa as rotas de produtos ao caminho /produtos
app.use('/produtos', produtoRoutes);

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});